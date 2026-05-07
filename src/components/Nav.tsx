"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 12]);
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(250, 248, 244, 0)", "rgba(250, 248, 244, 0.72)"]
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(232, 228, 219, 0)", "rgba(232, 228, 219, 1)"]
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
        backgroundColor: bg,
        borderBottomColor: border,
      }}
      className="sticky top-0 z-50 border-b transition-all"
    >
      <motion.div
        style={{ backdropFilter: scrolled ? "blur(12px)" : "blur(0px)" }}
        className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between"
      >
        <a href="#top" className="font-serif text-xl tracking-tight">
          Chandan<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full text-muted hover:text-foreground hover:bg-background-soft transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/917275188779"
          target="_blank"
          rel="noreferrer"
          className="text-sm px-4 py-2 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all inline-flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Say hi ↗
        </a>
      </motion.div>
    </motion.nav>
  );
}
