// Mirrors ~/Documents/resume/chandan_kumar_resume.tex, which builds public/Chandan_Kumar_Resume.pdf.
// Update both together so the web view and the PDF never disagree.

export const resumePdf = "/Chandan_Kumar_Resume.pdf";

export const resume = {
  headline: "AI Engineer · LLMs, Real-Time Voice AI, Computer Vision",
  phone: "+91 72751 88779",
  summary:
    "Founding AI Engineer at OSVI.ai, building the core agent engine of a real-time voice AI platform. Previously shipped computer-vision identity verification at NeuroFin.ai and ML systems at Turocrates.ai (IIT Bombay). Merged open-source work in Microsoft DeepSpeed, CMU's ESPnet and Alibaba's SenseVoice; IEEE-published author.",
  skills: [
    {
      label: "LLMs & GenAI",
      items: "RAG (LangChain, LlamaIndex, ChromaDB), AI agents, tool calling, MCP, LoRA/PEFT fine-tuning, LLM evals",
    },
    {
      label: "Speech & Voice AI",
      items: "LiveKit voice agents, speech-to-speech (Gemini Live, OpenAI Realtime), Whisper, ESPnet, VAD",
    },
    {
      label: "Deep Learning & CV",
      items: "PyTorch, Hugging Face Transformers, TensorFlow, CNNs, YOLO, PaddleOCR, ArcFace, spaCy",
    },
    {
      label: "Inference & MLOps",
      items: "llama.cpp (GGUF quantization), DeepSpeed, CUDA, FastAPI, Docker, Kubernetes, AWS, GCP Vertex AI",
    },
    { label: "Languages", items: "Python, TypeScript, Go, C/C++, SQL" },
  ],
  experience: [
    {
      org: "OSVI.ai",
      url: "https://osvi.ai",
      role: "Founding AI Engineer",
      location: "",
      period: "Aug 2026 - Present",
      points: [
        "Building the core agent engine behind every call on OSVI's voice AI platform: ASR, LLM reasoning, TTS and telephony.",
        "Built voice-to-voice calling on Gemini Live and OpenAI Realtime, cutting first-response latency, with fallback to the STT-LLM-TTS pipeline so calls survive model outages.",
      ],
    },
    {
      org: "NeuroFin.ai",
      url: "https://neurofin.ai",
      role: "AI Engineer",
      location: "Bengaluru, Onsite",
      period: "Sep 2025 - Jul 2026",
      points: [
        "Built a fintech KYC system that classifies documents, extracts fields with OCR and matches faces to ID photos.",
        "Hardened the pipeline against spoofed scans and low-light selfies, reducing false rejects within product latency SLAs.",
      ],
    },
    {
      org: "Turocrates.ai (IIT Bombay)",
      url: "https://turocrates.ai",
      role: "ML Engineer",
      location: "Remote",
      period: "Dec 2025 - Apr 2026",
      points: [
        "Owned the model lifecycle: data preparation, training, evaluation and low-latency inference APIs for product teams.",
        "Built evaluation harnesses and regression baselines so model upgrades could be compared, debugged and rolled out safely.",
      ],
    },
    {
      org: "IIT Ropar, Annam.ai",
      url: "https://www.annam.ai",
      role: "AI Research Intern",
      location: "Ropar, Punjab",
      period: "Jun 2025 - Jul 2025",
      points: [
        "Built a ResNet-50 plant-disease classifier (93% accuracy, 87K+ images) served via FastAPI with batched inference, plus a recommender with NLP sentiment analysis over agricultural news.",
      ],
    },
    {
      org: "ISRO, Liquid Propulsion Systems Centre",
      url: "https://www.lpsc.gov.in",
      role: "Machine Learning Intern",
      location: "Kerala, Onsite",
      period: "Jun 2024 - Jul 2024",
      points: [
        "Built a YOLOv5 and PaddleOCR pipeline that digitised 500+ legacy engineering drawings; denoising, adaptive thresholding and deskewing improved robustness by 15%, and my CRNN vs Tesseract vs PaddleOCR benchmark set the team's OCR stack.",
      ],
    },
  ],
  openSource: [
    {
      name: "Microsoft DeepSpeed",
      meta: "43k stars",
      text: "The RL rollout engine now rejects shared prefill under continuous batching instead of silently ignoring it.",
    },
    {
      name: "Microsoft APM",
      meta: "",
      text: "Fixed version-tag resolution for marketplace installs.",
    },
    {
      name: "ESPnet, Carnegie Mellon University",
      meta: "10k stars, 2 PRs",
      text: "Rebuilt convolutional-subsampling pad masks from each utterance's own length, so batched ASR decoding now matches single-utterance decoding.",
    },
    {
      name: "Alibaba SenseVoice",
      meta: "9k stars",
      text: "Fixed device auto-detection so the ASR container starts on CPU-only machines.",
    },
    {
      name: "LLamaSharp",
      meta: "3 PRs",
      text: "Added CUDA 13 builds and runtime probing.",
    },
  ],
  projects: [
    {
      name: "ShieldPrompt: PII Masking for LLMs",
      stack: "Python, FastAPI, Presidio, spaCy NER, MCP",
      links: [
        { label: "GitHub", href: "https://github.com/modelpath-dev/ShieldPrompt" },
        { label: "PyPI", href: "https://pypi.org/project/shieldprompt/" },
      ],
      text: "Masks PII with reversible vault tokens before prompts reach LLMs; shipped as a library, FastAPI middleware, CLI and MCP server for Claude Code and Cursor. Drew seed-funding interest from Apertu Capital.",
    },
    {
      name: "BitWiser: 1-bit LLM Compression on Apple Silicon",
      stack: "llama.cpp, Metal, FastAPI, React",
      links: [{ label: "GitHub", href: "https://github.com/modelpath-dev/Bitwiser-1q1" }],
      text: "Importance-matrix-calibrated IQ1_S quantization shrinks Llama-3.1-8B from 16.1 GB to 2.19 GB (7.4x), running at ~51 tokens/s in 3.1 GB of RAM, with a live side-by-side benchmark playground.",
    },
    {
      name: "Mistral-7B Domain Q&A with RAG",
      stack: "Hugging Face, LoRA/PEFT, 4-bit quantization, LangChain, ChromaDB",
      links: [{ label: "GitHub", href: "https://github.com/modelpath-dev/Mistral-Finetune" }],
      text: "Fine-tuned Mistral-7B on 10K+ Q&A pairs with LoRA, cutting perplexity by 35% and the 4-bit model from 14 GB to 4 GB at under 2% accuracy loss; the RAG pipeline reached 91% retrieval accuracy.",
    },
  ],
  education: {
    school: "Vellore Institute of Technology (VIT), Vellore",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2022 - 2026",
  },
  achievements: [
    {
      text: "Published Paper, IEEE PICC 2025: \"Automated Ranking of Video Frames Based on Clarity\"",
      date: "Oct 2025",
      href: "https://ieeexplore.ieee.org/document/11291360",
    },
    { text: "7th Rank, CodeChef-VIT Hackathon, top 2% of 400+ teams", date: "2023" },
    { text: "Outreach Head, IEEE Signal Processing Society, VIT", date: "2024" },
  ],
};
