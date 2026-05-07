"use client";

import { motion } from "motion/react";
import { experience, achievements } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          label="Experience"
          title="Where I've been training & shipping."
        />

        <div className="grid md:grid-cols-[1fr_auto] gap-16 md:gap-24">
          <div>
            <div className="space-y-0">
              {experience.map((e, i) => (
                <motion.div
                  key={e.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative grid grid-cols-[auto_1fr] gap-6 py-8 border-t border-border first:border-t-0 hover:bg-background-soft/40 transition-colors px-2 -mx-2 rounded-lg"
                >
                  <div className="font-mono text-xs text-muted pt-1.5 whitespace-nowrap min-w-[110px]">
                    {e.period}
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="font-serif text-2xl tracking-tight">
                        {e.company}
                      </h3>
                      <span className="text-xs uppercase tracking-widest text-muted">
                        {e.location}
                      </span>
                    </div>
                    <div className="text-sm text-accent mt-1 mb-3">{e.role}</div>
                    <ul className="space-y-2 text-muted text-sm leading-relaxed list-none">
                      {e.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-accent mt-1.5 leading-none">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="md:sticky md:top-28 self-start space-y-3 min-w-0 md:min-w-[280px]">
            <div className="text-xs uppercase tracking-widest text-muted mb-4">
              Recognitions
            </div>
            {achievements.map((a, i) => {
              const Wrapper = a.link ? motion.a : motion.div;
              return (
                <Wrapper
                  key={a.title}
                  {...(a.link ? { href: a.link, target: "_blank", rel: "noreferrer" } : {})}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="block bg-paper border border-border rounded-2xl p-5 hover:border-accent/40 hover:bg-background-soft/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-serif text-lg leading-tight">{a.title}</div>
                    {a.link && (
                      <span className="text-muted text-xs mt-1">↗</span>
                    )}
                  </div>
                  <div className="text-xs text-muted mt-2">{a.detail}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-accent mt-3">
                    {a.year}
                  </div>
                </Wrapper>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}
