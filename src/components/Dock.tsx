"use client";

import { useEffect, useState } from "react";
import { Briefcase, Code, FileText, FolderGit2, House, Moon, Sun, User } from "lucide-react";

const items = [
  { href: "#top", label: "Home", Icon: House },
  { href: "#about", label: "About", Icon: User },
  { href: "#experience", label: "Work", Icon: Briefcase },
  { href: "#open-source", label: "Open Source", Icon: FolderGit2 },
  { href: "#projects", label: "Projects", Icon: Code },
  { href: "/resume", label: "Resume", Icon: FileText },
];

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Dock() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => setTheme(currentTheme()), []);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-fit max-w-[calc(100%-2rem)] items-center gap-0.5 rounded-full border border-border bg-background/90 p-1 shadow-lg shadow-black/5 backdrop-blur"
    >
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-[13px] text-foreground/80 transition-colors hover:bg-chip hover:text-foreground"
        >
          <Icon className="h-4 w-4" aria-hidden />
          <span className="hidden md:inline">{label}</span>
        </a>
      ))}
      <span aria-hidden className="mx-1 h-5 w-px bg-border" />
      <button
        type="button"
        onClick={toggle}
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-chip hover:text-foreground"
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </nav>
  );
}
