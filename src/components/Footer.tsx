"use client";

import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
        <div className="font-serif text-base">
          © {new Date().getFullYear()} {profile.name}.
          <span className="italic"> Crafted with care.</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            LinkedIn
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
