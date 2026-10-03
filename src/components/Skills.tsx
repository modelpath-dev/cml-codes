"use client";

import { useState } from "react";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

const ALL = "All Skills";
const allItems = skillGroups.flatMap((g) => g.items);
const filters = [
  { label: ALL, items: allItems },
  ...skillGroups.map((g) => ({ label: g.label, items: g.items })),
];

export default function Skills() {
  const [active, setActive] = useState(ALL);
  const shown = filters.find((f) => f.label === active)?.items ?? allItems;

  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
        {filters.map((f) => {
          const on = f.label === active;
          return (
            <button
              key={f.label}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(f.label)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                on ? "bg-foreground text-background" : "bg-chip hover:bg-border"
              }`}
            >
              {f.label}
              <span className={`text-xs ${on ? "opacity-70" : "text-muted"}`}>{f.items.length}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-3 rounded-xl border border-border p-4">
        <div className="flex flex-wrap justify-center gap-2">
          {shown.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border px-2 py-1 font-mono text-xs font-semibold"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          Showing {shown.length} {active === ALL ? "total skills" : `${active} skills`}
        </p>
      </div>
    </Section>
  );
}
