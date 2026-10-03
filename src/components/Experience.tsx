import Section from "./Section";
import { experience as items } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <ol className="relative">
        {items.map((job, i) => {
          const current = job.period.endsWith("Present");
          return (
            <li key={job.company} className="relative grid grid-cols-[2.5rem_1fr] gap-3 pb-3 md:gap-4">
              {i < items.length - 1 && (
                <span aria-hidden className="absolute left-5 top-10 bottom-0 w-px bg-border" />
              )}
              <span
                aria-hidden
                className="relative z-10 mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background font-mono text-[11px] font-semibold"
              >
                {job.mark}
              </span>
              <div
                className={`rounded-xl border p-4 transition-colors ${
                  current
                    ? "border-accent/60 bg-accent-soft/30"
                    : "border-border hover:bg-background-soft"
                }`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-medium">{job.company}</h3>
                    <p className="font-mono text-sm">{job.role}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                    <span className="text-sm text-muted">{job.period}</span>
                    {job.location && (
                      <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] font-semibold">
                        {job.location}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
