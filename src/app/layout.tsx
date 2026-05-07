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
    "AI/ML Engineer building production systems across LLMs, RAG, Computer Vision, and NLP. Ship models, not just notebooks.",
  metadataBase: new URL("https://chandan.dev"),
  openGraph: {
    title: "Chandan Kumar · AI/ML Engineer",
    description:
      "AI/ML Engineer building production systems across LLMs, RAG, Computer Vision, and NLP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
