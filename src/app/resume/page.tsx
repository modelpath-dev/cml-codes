import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { resume, resumePdf } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume · Chandan Kumar",
  description: "Resume of Chandan Kumar, AI Engineer working on LLMs, real-time voice AI and computer vision.",
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-3 border-b border-border pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
      {children}
    </h2>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
      {children}
    </a>
  );
}

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-20 sm:px-6 print:max-w-none print:px-0 print:pb-0">
      <nav className="flex flex-wrap items-center justify-between gap-3 pt-8 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Portfolio
        </Link>
        <a
          href={resumePdf}
          download
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          <Download className="h-4 w-4" aria-hidden />
          Download PDF
        </a>
      </nav>

      <article className="mt-6 rounded-xl border border-border p-5 sm:p-10 print:mt-0 print:border-0 print:p-0">
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-sm text-muted">{resume.headline}</p>
          <p className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
            <span>{resume.phone}</span>
            <a href={profile.socials.email} className="hover:text-foreground">
              {profile.email}
            </a>
            <Ext href={profile.socials.github}>github.com/modelpath-dev</Ext>
            <Ext href={profile.socials.linkedin}>LinkedIn</Ext>
          </p>
        </header>

        <Heading>Summary</Heading>
        <p className="text-sm leading-relaxed">{resume.summary}</p>

        <Heading>Technical Skills</Heading>
        <dl className="space-y-1.5 text-sm">
          {resume.skills.map((s) => (
            <div key={s.label} className="grid gap-x-4 sm:grid-cols-[10rem_1fr]">
              <dt className="font-semibold">{s.label}</dt>
              <dd className="text-muted">{s.items}</dd>
            </div>
          ))}
        </dl>

        <Heading>Experience</Heading>
        <div className="space-y-4">
          {resume.experience.map((job) => (
            <section key={job.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  <Ext href={job.url}>{job.org}</Ext>
                </h3>
                <span className="text-sm font-medium">{job.period}</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm italic text-muted">
                <span>{job.role}</span>
                {job.location && <span>{job.location}</span>}
              </div>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Heading>Open Source</Heading>
        <p className="mb-2 text-sm text-muted">
          15 merged pull requests ·{" "}
          <Link href="/#open-source" className="underline-offset-2 hover:underline">
            full list on the portfolio
          </Link>
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
          {resume.openSource.map((o) => (
            <li key={o.name}>
              <span className="font-semibold">{o.name}</span>
              {o.meta && <span className="text-muted"> ({o.meta})</span>}: {o.text}
            </li>
          ))}
        </ul>

        <Heading>Projects</Heading>
        <div className="space-y-3">
          {resume.projects.map((p) => (
            <section key={p.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="flex gap-3 text-sm">
                  {p.links.map((l) => (
                    <Ext key={l.href} href={l.href}>
                      <span className="inline-flex items-center gap-0.5">
                        {l.label}
                        <ArrowUpRight className="h-3 w-3" aria-hidden />
                      </span>
                    </Ext>
                  ))}
                </span>
              </div>
              <p className="text-sm italic text-muted">{p.stack}</p>
              <p className="mt-1 text-sm leading-relaxed">{p.text}</p>
            </section>
          ))}
        </div>

        <Heading>Education</Heading>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <div>
            <h3 className="font-semibold">{resume.education.school}</h3>
            <p className="text-sm italic text-muted">{resume.education.degree}</p>
          </div>
          <span className="text-sm font-medium">{resume.education.period}</span>
        </div>

        <Heading>Achievements</Heading>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
          {resume.achievements.map((a) => (
            <li key={a.text}>
              <span className="flex flex-wrap justify-between gap-x-4">
                <span>{a.href ? <Ext href={a.href}>{a.text}</Ext> : a.text}</span>
                <span className="text-muted">{a.date}</span>
              </span>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
