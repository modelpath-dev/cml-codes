import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { achievements, education, publications } from "@/lib/data";

function DateChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 rounded bg-chip px-1.5 py-0.5 font-mono text-[11px] font-semibold">
      {children}
    </span>
  );
}

export function Publications() {
  return (
    <Section id="publications" title="Publications" subtitle="Research papers">
      <div className="space-y-3">
        {publications.map((p) => (
          <article key={p.title} className="rounded-xl border border-border p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium leading-snug">{p.title}</h3>
              <DateChip>{p.venue}</DateChip>
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-xs text-muted">
              <span>{p.date} · Published</span>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-foreground"
              >
                IEEE Xplore <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Recognitions and highlights">
      <div className="space-y-3">
        {achievements.map((a) => (
          <article key={a.title} className="rounded-xl border border-border p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium leading-snug">{a.title}</h3>
              <DateChip>{a.year}</DateChip>
            </div>
            <p className="mt-1.5 font-mono text-xs text-muted">{a.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((e) => (
        <article
          key={e.school}
          className="flex items-start justify-between gap-3 rounded-xl border border-border p-4"
        >
          <div>
            <h3 className="font-medium">{e.school}</h3>
            <p className="mt-0.5 font-mono text-sm text-muted">{e.degree}</p>
          </div>
          <span className="text-sm text-muted">{e.period}</span>
        </article>
      ))}
    </Section>
  );
}
