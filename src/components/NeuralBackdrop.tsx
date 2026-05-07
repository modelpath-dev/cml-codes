"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

// Animated neural-network style backdrop: dot grid + pulsing connections.
export default function NeuralBackdrop() {
  const nodes = useMemo(
    () => [
      { x: 12, y: 22 },
      { x: 28, y: 14 },
      { x: 45, y: 30 },
      { x: 62, y: 18 },
      { x: 78, y: 28 },
      { x: 88, y: 50 },
      { x: 70, y: 60 },
      { x: 52, y: 72 },
      { x: 32, y: 64 },
      { x: 14, y: 50 },
      { x: 22, y: 80 },
      { x: 50, y: 50 },
    ],
    []
  );

  const edges = useMemo(
    () => [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
      [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
      [2, 11], [11, 4], [11, 7], [11, 9], [0, 9],
      [3, 11], [10, 8],
    ],
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(28,28,26,0.3) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Neural graph */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
            <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </linearGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const A = nodes[a];
          const B = nodes[b];
          return (
            <motion.line
              key={i}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="#4F46E5"
              strokeWidth="0.08"
              strokeOpacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.4,
                delay: i * 0.06,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Pulsing token along random edges */}
        {[0, 4, 9, 13].map((idx, i) => {
          const [a, b] = edges[idx];
          const A = nodes[a];
          const B = nodes[b];
          return (
            <motion.circle
              key={i}
              r="0.55"
              fill="#4F46E5"
              initial={{ cx: A.x, cy: A.y, opacity: 0 }}
              animate={{
                cx: [A.x, B.x, A.x],
                cy: [A.y, B.y, A.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.6,
                delay: i * 0.9 + 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="0.6"
            fill="#1C1C1A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{
              duration: 1.2,
              delay: 0.2 + i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
