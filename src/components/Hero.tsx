"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import RevealText from "./RevealText";
import NeuralBackdrop from "./NeuralBackdrop";
import { profile } from "@/lib/data";
import { ArrowDown } from "lucide-react";

const tokens = [
  "import",
  "torch",
  "nn",
  "transformer",
  "attention",
  "softmax",
  "embed",
  "rag",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[calc(100svh-140px)] flex items-center pt-16 pb-20 px-6 md:px-10 overflow-hidden"
    >
      <NeuralBackdrop />

      {/* Ambient orbs */}
      <motion.div
        className="orb bg-[#A5B4FC] w-[500px] h-[500px] -top-40 -left-40"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb bg-[#D4C5A9] w-[400px] h-[400px] top-40 right-0"
        animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl w-full grid md:grid-cols-[1.4fr_1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-8 font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-accent">●</span> shipping models · open to roles
          </motion.div>

          <h1 className="font-serif text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] tracking-[-0.02em] mb-6">
            <RevealText>{`${profile.name}.`}</RevealText>
            <RevealText
              delay={0.25}
              className="block italic text-muted"
            >
              {profile.role}
            </RevealText>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm hover:gap-3 transition-all"
            >
              See selected work
              <span className="group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border border-border hover:border-foreground transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Token strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex items-center gap-2 flex-wrap font-mono text-[10px] text-muted"
          >
            <span className="text-accent">{">"}</span>
            {tokens.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.06 }}
                className="px-2 py-1 rounded-md bg-background-soft border border-border"
              >
                {t}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-accent"
            >
              ▌
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="relative aspect-[4/5] md:aspect-square mx-auto w-full max-w-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute inset-0 rounded-[28px] overflow-hidden bg-background-soft border border-border shadow-[0_30px_80px_-20px_rgba(28,28,26,0.18)]"
          >
            <Image
              src="/avatar.jpg"
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
            />
            {/* Subtle vignette + scan-line */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
            <motion.div
              className="absolute left-0 right-0 h-[1px] bg-accent/40"
              initial={{ top: "0%" }}
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            {/* Corner brackets */}
            <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-accent/60" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/60" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-accent/60" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-accent/60" />
          </motion.div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -bottom-4 -left-4 bg-paper border border-border rounded-2xl px-4 py-3 shadow-lg"
          >
            <div className="text-[10px] uppercase tracking-widest text-muted font-mono">
              Currently
            </div>
            <div className="text-sm font-medium">AI/ML @ NeuroFin.ai</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -top-4 -right-4 bg-paper border border-border rounded-2xl px-4 py-3 shadow-lg"
          >
            <div className="text-[10px] uppercase tracking-widest text-muted font-mono">
              Based in
            </div>
            <div className="text-sm font-medium">Bengaluru, IN</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
        >
          Scroll
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
