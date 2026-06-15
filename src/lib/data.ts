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
    role: "AI Engineer",
    period: "Sep 2025 to Present",
    location: "Onsite · Bengaluru",
    bullets: [
      "Building an intelligent KYC verification system using computer vision and deep learning to automate document validation and identity matching.",
      "Designed a robust pipeline that classifies document types, extracts key fields, and performs face matching for secure user onboarding.",
    ],
  },
  {
    company: "IIT Bombay · TuroCrate.ai",
    role: "ML Engineer",
    period: "Dec 2025 to Apr 2026",
    location: "Remote · Mumbai",
    bullets: [
      "Designed and shipped ML systems at TuroCrate, focused on production data pipelines and inference services.",
      "Owned the full model lifecycle: training, evaluation, deployment, and observability across the platform.",
    ],
  },
  {
    company: "IIT Ropar · Annam.ai",
    role: "AI Research Intern",
    period: "Jun 2025 to Jul 2025",
    location: "Onsite · Punjab",
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
    title: "BitWiser-1q1",
    tag: "Local LLMs · 1-bit Quantization",
    year: "2026",
    description:
      "One-click 1-bit (IQ1_S) compressor for any local LLM on Apple Silicon. Auto-discovers Ollama and on-disk GGUF models, runs importance-matrix calibration, and quantizes via llama.cpp with Metal — shrinking Llama-3.1-8B from 16.1 GB to 2.19 GB (7.4×) at ~51 tok/s on 3.1 GB of RAM. Side-by-side playground streams live tokens/sec, RAM, and bandwidth.",
    stack: ["Python", "FastAPI", "llama.cpp", "React", "Metal"],
    link: "https://github.com/modelpath-dev/Bitwiser-1q1",
    accent: "from-[#7C6A8A] to-[#C4A6E8]",
  },
  {
    title: "Facematch",
    tag: "Computer Vision · Identity",
    year: "2025",
    description:
      "Face verification pipeline that compares faces across images, PDFs, and Excel documents. RetinaFace detection with quality filtering and automatic rotation handling, ArcFace embeddings via DeepFace, and cosine-similarity matching with configurable thresholds — producing detailed reports with per-document confidence scores.",
    stack: ["Python", "DeepFace", "ArcFace", "RetinaFace", "OpenCV"],
    link: "https://github.com/modelpath-dev/Facematch",
    accent: "from-[#5C7561] to-[#8FA890]",
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
  {
    title: "Whisper Hindi ASR",
    tag: "Speech · LoRA Fine-tuning",
    year: "2025",
    description:
      "Fine-tunes OpenAI Whisper-small for Hindi speech recognition using LoRA (PEFT) on Mozilla Common Voice 17, training under 2% of parameters to measure WER/CER gains over the baseline. Type-hinted library with YAML-driven config, runs as fast CPU/MPS smoke tests locally and full fp16 training on a Colab T4.",
    stack: ["Python", "PyTorch", "Whisper", "PEFT", "HuggingFace"],
    link: "https://github.com/modelpath-dev/whisper-finetune",
    accent: "from-[#0E7490] to-[#22D3EE]",
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
