import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chandan Kumar · AI/ML Engineer",
  description:
    "AI/ML Engineer building production systems across LLMs, RAG, Computer Vision, and NLP. Open-source contributor to DeepSpeed, ESPnet, LLamaSharp and more.",
  metadataBase: new URL("https://cml-codes.vercel.app"),
  openGraph: {
    title: "Chandan Kumar · AI/ML Engineer",
    description:
      "AI/ML Engineer building production systems across LLMs, RAG, Computer Vision, and NLP.",
    type: "website",
  },
};

// Applies a saved theme before first paint so the page never flashes the wrong one.
const themeScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
