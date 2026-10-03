import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import OpenSource from "@/components/OpenSource";
import { Achievements, Education, Publications } from "@/components/Highlights";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <Header />
        <About />
        <Experience />
        <OpenSource />
        <Projects />
        <Publications />
        <Achievements />
        <Skills />
        <Education />
        <Footer />
      </main>
      <Dock />
    </>
  );
}
