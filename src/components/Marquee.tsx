"use client";

const items = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "HuggingFace",
  "LangChain",
  "Mistral",
  "ResNet",
  "YOLO",
  "Go",
  "gRPC",
  "Redis",
  "Docker",
  "AWS",
  "FastAPI",
  "PostgreSQL",
  "TypeScript",
];

export default function Marquee() {
  return (
    <div className="relative py-12 border-y border-border bg-background-soft/40 overflow-hidden">
      <div className="flex w-max marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 font-serif italic text-2xl md:text-4xl text-muted/70"
          >
            {item}
            <span className="ml-16 text-accent/50">✦</span>
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}
