#!/usr/bin/env node
// Regenerates src/lib/oss.json from GitHub: every merged or open PR by AUTHOR
// in a public repo the author doesn't own, grouped by repo, ranked by stars.
// Usage: GITHUB_TOKEN=... node scripts/sync-oss.mjs  (falls back to `gh auth token`)
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const AUTHOR = "modelpath-dev";
// PRs made against a maintainer's fork are shown under the upstream repo.
const GROUP_INTO = { "sw005320/espnet-1": "espnet/espnet" };
const OUT = new URL("../src/lib/oss.json", import.meta.url);

const token =
  process.env.GITHUB_TOKEN ?? execSync("gh auth token", { encoding: "utf8" }).trim();

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`${res.status} ${path}: ${await res.text()}`);
  return res.json();
}

const items = [];
for (let page = 1; ; page++) {
  const r = await gh(`/search/issues?q=author:${AUTHOR}+type:pr&per_page=100&page=${page}`);
  items.push(...r.items);
  if (r.items.length < 100) break;
}

const repoCache = new Map();
const repo = (name) => {
  if (!repoCache.has(name)) repoCache.set(name, gh(`/repos/${name}`));
  return repoCache.get(name);
};

const groups = new Map();
for (const it of items) {
  const source = it.repository_url.replace("https://api.github.com/repos/", "");
  if (source.split("/")[0] === AUTHOR) continue;
  const meta = await repo(source);
  if (meta.private) continue;

  const pr = await gh(`/repos/${source}/pulls/${it.number}`);
  if (pr.draft) continue;
  const state = pr.merged_at ? "merged" : pr.state === "open" ? "open" : null;
  if (!state) continue; // closed without merge

  const target = GROUP_INTO[source] ?? source;
  if (!groups.has(target)) groups.set(target, []);
  groups.get(target).push({
    number: pr.number,
    title: pr.title,
    url: pr.html_url,
    state,
    date: (pr.merged_at ?? pr.created_at).slice(0, 10),
    additions: pr.additions,
    deletions: pr.deletions,
    files: pr.changed_files,
    ...(target !== source && { via: source }),
  });
}

const repos = [];
for (const [name, prs] of groups) {
  const m = await repo(name);
  prs.sort((a, b) => (a.state === b.state ? b.date.localeCompare(a.date) : a.state === "merged" ? -1 : 1));
  repos.push({
    name: m.full_name,
    url: m.html_url,
    avatar: m.owner.avatar_url,
    description: m.description ?? "",
    stars: m.stargazers_count,
    forks: m.forks_count,
    language: m.language,
    prs,
  });
}
repos.sort((a, b) => b.stars - a.stars);

writeFileSync(OUT, JSON.stringify({ syncedAt: new Date().toISOString().slice(0, 10), repos }, null, 2) + "\n");
const merged = repos.flatMap((r) => r.prs).filter((p) => p.state === "merged").length;
console.log(`${repos.length} repos, ${merged} merged PRs -> ${OUT.pathname}`);
