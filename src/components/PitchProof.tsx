"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PitchProof() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  return (
    <>
      {/* Trigger: sealed dossier ribbon */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative inline-flex items-center gap-2.5 rounded-full bg-foreground text-background px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] hover:bg-accent transition-colors"
        aria-label="View Apertu Capital pitch proof"
      >
        {/* Wax seal */}
        <span className="relative inline-flex w-4 h-4 items-center justify-center">
          <motion.span
            className="absolute inset-0 rounded-full bg-accent"
            animate={{ scale: hovered ? [1, 1.15, 1] : 1 }}
            transition={{ duration: 1.2, repeat: hovered ? Infinity : 0 }}
          />
          <span className="relative text-[8px] text-white">★</span>
        </span>
        Investor-Call · Sealed
        <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
          ↗
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-foreground/92"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-5xl mx-auto my-auto p-6 min-h-full flex flex-col justify-center"
            >
              {/* Dossier header */}
              <div className="flex items-center justify-between mb-6 text-background">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/50">
                    Confidential · Verified
                  </div>
                  <div className="font-serif text-2xl md:text-3xl italic mt-1">
                    Apertu Capital · Pitch Round
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full border border-background/30 text-background hover:bg-background hover:text-foreground transition-colors flex items-center justify-center"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Polaroid stack */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {[
                  {
                    src: "/pitch-1.jpg",
                    rot: -2.5,
                    caption: "Live demo · ShieldPrompt PII redaction pipeline",
                    sub: "Don Sheu, Enrico · Apertu Capital",
                  },
                  {
                    src: "/pitch-2.jpg",
                    rot: 2.2,
                    caption: "Investor session · Walkthrough call",
                    sub: "Founder · Chandan Kumar",
                  },
                ].map((item, i) => (
                  <motion.figure
                    key={item.src}
                    initial={{ opacity: 0, y: 20, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: item.rot }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className="bg-paper p-4 pb-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] cursor-zoom-in"
                  >
                    {/* Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-accent/40 rotate-[-2deg] rounded-sm" />
                    <div className="relative aspect-[16/10] overflow-hidden bg-foreground">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        sizes="(max-width: 768px) 90vw, 500px"
                        className="object-cover"
                      />
                      {/* Confidential watermark */}
                      <div className="absolute top-2 right-2 text-[9px] font-mono uppercase tracking-widest text-white/60 bg-black/40 px-2 py-0.5 rounded">
                        17·APR·2026
                      </div>
                    </div>
                    <figcaption className="absolute bottom-3 left-4 right-4 font-serif italic text-foreground">
                      <div className="text-sm leading-tight">{item.caption}</div>
                      <div className="text-[10px] text-muted not-italic font-mono uppercase tracking-widest mt-1">
                        {item.sub}
                      </div>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>

              {/* Footer strip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-background/70 text-xs font-mono"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-background/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    AUTHENTICATED
                  </span>
                  <span>Project: ShieldPrompt</span>
                </div>
                <div className="opacity-60">
                  Press ESC or click outside to close
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
