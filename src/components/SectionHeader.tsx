"use client";

import { motion } from "motion/react";

type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ index, label, title, description }: Props) {
  return (
    <div className="mb-14 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted mb-6"
      >
        <span className="font-mono text-accent">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span>{label}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] max-w-3xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-muted text-lg max-w-2xl mt-5 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
