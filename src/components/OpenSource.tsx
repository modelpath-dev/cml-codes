"use client";

import { useState } from "react";
import { GitFork, GitMerge, Star } from "lucide-react";
import Section, { ShowMore } from "./Section";
import oss from "@/lib/oss.json";

type Repo = (typeof oss.repos)[number];
type PR = Repo["prs"][number] & { via?: string };

const VISIBLE = 6;

const compact = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "")}k` : String(n);

const shortDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

const mergedCount = oss.repos.flatMap((r) => r.prs).length;
const totalStars = oss.repos.reduce((sum, r) => sum + r.stars, 0);

function PRLine({ pr }: { pr: PR }) {
  return (
    <div className="flex min-w-0 items-start gap-2">
      <GitMerge className="mt-0.5 h-4 w-4 shrink-0 text-merged" aria-label="Merged" />
      <div className="min-w-0 flex-1">
        <a
          href={pr.url}
          target="_blank"
          rel="noreferrer"
          className="text-sm leading-snug hover:underline underline-offset-2"
        >
          {pr.title}
        </a>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[11px] text-muted">
          <span>#{pr.number}</span>
          <span className="text-add">+{pr.additions}</span>
          <span className="-ml-1 text-del">−{pr.deletions}</span>
          <span>merged {shortDate(pr.date)}</span>
          {pr.via && <span>via {pr.via}</span>}
        </div>
      </div>
    </div>
  );
}

function RepoCard({ repo, rank }: { repo: Repo; rank: number }) {
  const prs = repo.prs as PR[];

  return (
    <article className="min-w-0 rounded-xl border border-border p-4 transition-colors hover:bg-background-soft/60">
      <div className="flex items-start justify-between gap-3">
        <a
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="group flex min-w-0 items-center gap-2.5"
        >
          <img
            src={`${repo.avatar}&s=64`}
            alt=""
            width={24}
            height={24}
            loading="lazy"
            className="h-6 w-6 shrink-0 rounded-md border border-border"
          />
          <span className="truncate font-medium group-hover:underline underline-offset-2">
            <span className="text-muted">{repo.name.split("/")[0]}/</span>
            {repo.name.split("/")[1]}
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-3 text-sm text-muted">
          <span className="inline-flex items-center gap-1" title={`${repo.stars.toLocaleString()} stars`}>
            <Star className="h-3.5 w-3.5 text-amber-500" aria-hidden />
            {compact(repo.stars)}
          </span>
          <span className="hidden items-center gap-1 sm:inline-flex" title={`${repo.forks.toLocaleString()} forks`}>
            <GitFork className="h-3.5 w-3.5" aria-hidden />
            {compact(repo.forks)}
          </span>
          <span className="font-mono text-[11px] text-muted/80">#{rank}</span>
        </div>
      </div>

      {repo.description && (
        <p className="mt-1.5 line-clamp-2 font-mono text-xs text-muted">{repo.description}</p>
      )}

      <div className="mt-3">
        {prs.length === 1 ? (
          <PRLine pr={prs[0]} />
        ) : (
          <>
            <p className="mb-2 font-mono text-[11px] text-muted">
              {prs.length} merged pull requests
            </p>
            <ul>
              {prs.map((pr) => (
                <li
                  key={pr.url}
                  className="relative pb-2.5 pl-6 last:pb-0 before:absolute before:left-[7px] before:top-0 before:h-full before:w-px before:bg-border last:before:h-[0.6rem] after:absolute after:left-[7px] after:top-[0.6rem] after:h-px after:w-3 after:bg-border"
                >
                  <PRLine pr={pr} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {repo.language && (
        <div className="mt-3">
          <span className="rounded bg-chip px-1.5 py-0.5 font-mono text-[11px] font-semibold">
            {repo.language}
          </span>
        </div>
      )}
    </article>
  );
}

export default function OpenSource() {
  const [open, setOpen] = useState(false);
  const repos = open ? oss.repos : oss.repos.slice(0, VISIBLE);

  return (
    <Section
      id="open-source"
      title="Open Source Contributions"
      subtitle={`${mergedCount} merged PRs across ${oss.repos.length} projects, ranked by repository stars`}
      aside={
        <span
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-chip px-3 py-1 font-mono text-sm sm:inline-flex"
          title="Combined stars of the repositories above"
        >
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
          {compact(totalStars)} combined stars
        </span>
      }
    >
      <div className="space-y-3">
        {repos.map((repo, i) => (
          <RepoCard key={repo.name} repo={repo} rank={i + 1} />
        ))}
      </div>
      {oss.repos.length > VISIBLE && (
        <ShowMore open={open} onToggle={() => setOpen(!open)} label="repositories" />
      )}
    </Section>
  );
}
