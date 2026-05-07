"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { profile } from "@/lib/data";

const Icon = {
  Github: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  Linkedin: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  X: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const socials = [
  { Icon: Icon.Github, label: "GitHub", href: profile.socials.github, handle: "@modelpath-dev" },
  { Icon: Icon.Linkedin, label: "LinkedIn", href: profile.socials.linkedin, handle: "chandan-kumar" },
  { Icon: Icon.X, label: "X", href: profile.socials.twitter, handle: "@CmlCodes" },
];

export default function ContactBar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="relative bg-foreground text-background overflow-hidden">
      {/* Subtle scanning gradient */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/15 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-3 md:py-4 flex items-center justify-between gap-4 flex-wrap">
        {/* Big email */}
        <button
          type="button"
          onClick={handleCopy}
          className="group flex items-baseline gap-3 text-left"
          aria-label="Copy email"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-background/50 hidden sm:inline">
            mail
            <span className="text-accent ml-1">●</span>
          </span>
          <motion.span
            className="font-serif italic text-2xl sm:text-3xl md:text-5xl tracking-tight leading-none"
            initial={false}
          >
            <span className="bg-gradient-to-r from-background via-background to-accent bg-clip-text text-transparent">
              {profile.email}
            </span>
          </motion.span>
          <motion.span
            className="text-[10px] font-mono uppercase tracking-widest text-background/40 group-hover:text-accent transition-colors hidden md:inline"
            animate={{ opacity: copied ? 1 : 0.4 }}
          >
            {copied ? "✓ copied" : "click to copy"}
          </motion.span>
        </button>

        {/* Socials */}
        <div className="flex items-center gap-1.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group relative inline-flex items-center gap-2 px-3 py-2 rounded-full border border-background/15 hover:border-accent hover:bg-accent transition-colors"
            >
              <s.Icon className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px] font-mono">{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
