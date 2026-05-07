export const profile = {
  name: "Chandan Kumar",
  role: "AI/ML Engineer",
  tagline: "Ship models, not just notebooks.",
  bio: "I build production AI systems across large language models, retrieval pipelines, and computer-vision tooling that move from notebooks to real users. Currently focused on LLM fine-tuning, RAG, and multimodal perception.",
  location: "Bengaluru, IN",
  email: "cml.codes@gmail.com",
  socials: {
    github: "https://github.com/modelpath-dev",
    linkedin: "https://www.linkedin.com/in/chandan-kumar-438aa3193/",
    twitter: "https://x.com/CmlCodes",
    email: "mailto:cml.codes@gmail.com",
  },
};

export const experience = [
  {
    company: "NeuroFin.ai",
    role: "AI/ML Intern",
    period: "Sep 2025 to Present",
    location: "Onsite · Bengaluru",
    bullets: [
      "Building an intelligent KYC verification system using computer vision and deep learning to automate document validation and identity matching.",
      "Designed a robust pipeline that classifies document types, extracts key fields, and performs face matching for secure user onboarding.",
    ],
  },
  {
    company: "TuroCrate.ai",
    role: "ML Engineer",
    period: "Dec 9, 2025",
    location: "Bengaluru, IN",
    bullets: [
      "Designing and shipping ML systems at TuroCrate, focused on production data pipelines and inference services.",
      "Owning the full model lifecycle: training, evaluation, deployment, and observability across the platform.",
    ],
  },
  {
    company: "IIT Ropar · Annam.ai",
    role: "AI Research Intern",
    period: "Jun 2025 to Jul 2025",
    location: "Remote · Punjab",
    bullets: [
      "Built a CNN plant-disease classifier reaching 93% accuracy via ResNet-50 transfer learning on 87K+ images.",
      "Developed an ML recommendation engine and integrated NLP-based sentiment analysis for agricultural news.",
    ],
  },
  {
    company: "ISRO · LPSC",
    role: "Machine Learning Intern",
    period: "Jun 2024 to Jul 2024",
    location: "Onsite · Kerala",
    bullets: [
      "Created a custom OCR pipeline combining YOLOv5 and PaddleOCR to digitize 500+ engineering drawings.",
      "Applied image preprocessing techniques that improved model robustness by 15%.",
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  year: string;
  description: string;
  highlight?: string;
  stack: string[];
  link?: string;
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ShieldPrompt",
    tag: "Open-source · LLM Security",
    year: "2025",
    description:
      "A Python library and MCP server that detects and masks PII before it reaches LLMs. Hybrid detection engine combines regex with Microsoft Presidio and spaCy NER, using reversible tokenization and a per-request in-memory vault. Ships as a library, FastAPI middleware, CLI, and MCP server for Claude Code.",
    highlight:
      "Approached by Apertu Capital (Don Sheu & Enrico) for funding.",
    stack: ["Python", "FastAPI", "Presidio", "spaCy", "MCP"],
    link: "https://github.com/modelpath-dev/ShieldPrompt",
    accent: "from-[#4F46E5] via-[#6366F1] to-[#A78BFA]",
    featured: true,
  },
  {
    title: "TuroQuant",
    tag: "Computer Vision · Bio",
    year: "2025",
    description:
      "IHC image quantification platform using the DeepLIIF API. Supports KI67, ER, and PR stains with cell counting, H-score, and Allred scoring. Handles multi-page TIFs, WSI formats, and live camera input with ROI selection. Video pipeline uses phase-correlation deduplication for overlapping frames.",
    stack: ["Python", "Streamlit", "OpenCV", "DeepLIIF"],
    link: "https://turoquant.vercel.app",
    accent: "from-[#0E7490] to-[#22D3EE]",
  },
  {
    title: "ScholarGraph",
    tag: "RAG · Knowledge Graphs",
    year: "2025",
    description:
      "Transforms research papers into interactive knowledge graphs. GPT-4o-mini extracts concepts, ChromaDB and Sentence-Transformers handle semantic linking across PDFs, and Mermaid.js with svg-pan-zoom render explorable graphs in the browser.",
    stack: ["FastAPI", "GPT-4o", "ChromaDB", "Mermaid"],
    link: "https://github.com/modelpath-dev/Scholar_Paper",
    accent: "from-[#5C7561] to-[#8FA890]",
  },
  {
    title: "Crucible",
    tag: "AI · Desktop IDE",
    year: "2025",
    description:
      "Lightweight AI-powered desktop IDE built on Electron and React. Monaco editor, native Git, integrated terminal (PTY), ripgrep search, and side-by-side diffs. Multi-provider AI chat across Claude, GPT-4o, and Gemini.",
    stack: ["Electron", "TypeScript", "Monaco", "Zustand"],
    link: "https://github.com/modelpath-dev/Crucible",
    accent: "from-[#7C6A8A] to-[#C4A6E8]",
  },
  {
    title: "Vocat",
    tag: "Voice AI · Real-time",
    year: "2025",
    description:
      "Real-time voice interview agent. Google-Meet-style UI with WebRTC audio, Whisper STT, GPT-4o reasoning, and ElevenLabs TTS. Streaming responses with VAD-based turn-taking for natural conversational latency.",
    stack: ["React", "Python", "Whisper", "ElevenLabs"],
    link: "https://github.com/modelpath-dev/Vocat",
    accent: "from-[#B45309] to-[#F59E0B]",
  },
];

export const skillGroups = [
  {
    label: "Deep Learning",
    items: ["CNN", "RNN", "LSTM", "GAN", "Transformers", "Transfer Learning"],
  },
  {
    label: "LLMs & NLP",
    items: ["GPT", "Mistral-7B", "BERT", "LangChain", "LlamaIndex", "RAG", "LoRA", "PEFT"],
  },
  {
    label: "Computer Vision",
    items: ["YOLO", "ResNet", "PaddleOCR", "Tesseract", "Face Recognition", "Segmentation"],
  },
  {
    label: "Languages",
    items: ["Python", "Go", "TypeScript", "Java", "C/C++", "SQL"],
  },
  {
    label: "Platform",
    items: ["AWS", "Docker", "gRPC", "FastAPI", "PostgreSQL", "Redis", "MongoDB"],
  },
];

export type Achievement = {
  title: string;
  detail: string;
  year: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Apertu Capital · Funding interest",
    detail: "ShieldPrompt approached by Don Sheu & Enrico",
    year: "2026",
  },
  {
    title: "Published Paper · PICC 2025 (IEEE)",
    detail: "Automated Ranking of Video Frames Based on Clarity",
    year: "Oct 2025",
    link: "https://ieeexplore.ieee.org/document/11291360",
  },
  {
    title: "Outreach Head · IEEE SPS, VIT",
    detail: "Organized 5+ technical workshops",
    year: "2024",
  },
  {
    title: "7th Rank · CodeChef-VIT Hackathon",
    detail: "Top 2% among 400+ teams",
    year: "Feb 2023",
  },
];
