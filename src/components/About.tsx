"use client";

import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/lib/data";

const facts = [
  { k: "Years building", v: "3+" },
  { k: "Production models", v: "12+" },
  { k: "Internships shipped", v: "3" },
  { k: "Paper published", v: "1" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 md:px-10 bg-background-soft/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          label="About"
          title="I bridge the gap between research and production."
          description="Currently a final-year CSE student at VIT Vellore, with internships at ISRO, IIT Ropar, and AI startups. I obsess over the path from notebook to deployed system: latency, model size, retrieval quality, and the boring infra glue that makes models actually useful."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              My focus is the part most teams skip: the <span className="text-foreground">last mile</span>. Quantizing
              a 14GB model to 4GB without losing accuracy. Cutting inference under 200ms.
              Replacing a brittle OCR script with a YOLO + PaddleOCR pipeline that handles
              real-world engineering drawings.
            </p>
            <p>
              When I'm not training models, I'm writing Go services, exploring distributed
              systems, or organizing technical workshops with IEEE SPS at VIT.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              {facts.map((f, i) => (
                <motion.div
                  key={f.k}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
                    {f.v}
                  </div>
                  <div className="text-xs uppercase tracking-widest mt-1">{f.k}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-[120px_1fr] gap-6 items-baseline pb-6 border-b border-border last:border-0"
              >
                <div className="text-xs uppercase tracking-widest text-muted">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
                  {group.items.map((it) => (
                    <span
                      key={it}
                      className="hover:text-accent transition-colors cursor-default"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
