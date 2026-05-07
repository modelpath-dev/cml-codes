"use client";

import { motion } from "motion/react";
import { projects, type Project } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import PitchProof from "./PitchProof";
import { ArrowUpRight } from "lucide-react";

function FeaturedCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group sheen relative col-span-full rounded-3xl overflow-hidden border border-border bg-paper hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.25)] transition-all"
    >
      {/* Animated gradient header */}
      <div className={`relative h-52 md:h-64 bg-gradient-to-br ${p.accent} overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.5),transparent_50%)]"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.2),transparent_60%)]" />

        {/* Floating glyph */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 200" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-feat" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-feat)" />
        </svg>

        {/* Featured badge */}
        <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur text-foreground rounded-full px-3 py-1.5 text-xs font-mono">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          FEATURED · OPEN SOURCE
        </div>

        <div className="absolute bottom-5 right-5 text-white/80 font-mono text-xs">
          {p.year}
        </div>

        {/* Title overlay on the gradient */}
        <div className="absolute bottom-5 left-5 text-white">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-80 mb-1">
            {p.tag}
          </div>
          <div className="font-serif text-3xl md:text-4xl tracking-tight">
            {p.title}
          </div>
        </div>
      </div>

      <div className="p-7 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-end">
        <div>
          <p className="text-foreground/85 leading-relaxed mb-4 max-w-3xl">
            {p.description}
          </p>
          {p.highlight && (
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-accent-soft text-accent px-3 py-1.5 rounded-full text-xs font-medium">
                <span>★</span> {p.highlight}
              </div>
              <PitchProof />
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-background-soft border border-border text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${p.title} on GitHub`}
          className="flex w-12 h-12 rounded-full border border-border items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors"
        >
          <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
        </a>
      </div>
    </motion.div>
  );
}

function StandardCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group sheen relative bg-paper border border-border rounded-3xl p-7 flex flex-col gap-5 hover:border-foreground/20 hover:shadow-[0_30px_60px_-20px_rgba(28,28,26,0.15)] transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.accent} relative overflow-hidden shrink-0`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),transparent_60%)]" />
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.25) 60deg, transparent 120deg)",
            }}
          />
        </div>
        <div className="flex w-10 h-10 rounded-full border border-border items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors">
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
        </div>
      </div>

      <div className="flex-1">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-2 flex items-center gap-2">
          <span>{p.tag}</span>
          <span className="opacity-50">·</span>
          <span>{p.year}</span>
        </div>
        <h3 className="font-serif text-2xl tracking-tight mb-3">{p.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{p.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-background-soft text-muted"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Work() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          label="Selected Work"
          title="Things I've shipped recently."
          description="A selection of AI tools: open-source libraries, research interfaces, and shipped products."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featured && <FeaturedCard p={featured} index={0} />}
          {others.map((p, i) => (
            <StandardCard key={p.title} p={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
