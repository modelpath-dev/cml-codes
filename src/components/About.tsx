import Section from "./Section";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-3 font-mono text-sm leading-relaxed text-muted">
        <p>{profile.bio}</p>
        <p>{about}</p>
      </div>
    </Section>
  );
}
