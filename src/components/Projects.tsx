import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import PitchProof from "./PitchProof";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built end to end">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`flex flex-col rounded-xl border p-4 transition-colors hover:bg-background-soft/60 ${
              p.featured ? "border-accent/60 sm:col-span-2" : "border-border"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline underline-offset-2"
                  >
                    {p.title}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted" aria-hidden />
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <span className="shrink-0 font-mono text-[11px] text-muted">{p.year}</span>
            </div>
            <p className="mt-0.5 text-xs text-muted">{p.tag}</p>
            <p
              className={`mt-2 font-mono text-xs leading-relaxed text-muted ${
                p.featured ? "" : "line-clamp-5"
              }`}
            >
              {p.description}
            </p>
            {p.highlight && (
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <p className="text-sm">{p.highlight}</p>
                <PitchProof />
              </div>
            )}
            <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded bg-chip px-1.5 py-0.5 font-mono text-[11px] font-semibold"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
