import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", href: profile.socials.email, Icon: Mail },
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "X", href: profile.socials.twitter, Icon: XIcon },
];

export default function Header() {
  return (
    <header id="top" className="flex items-start justify-between gap-6 pt-16 md:pt-20">
      <div className="min-w-0">
        <h1 className="text-3xl font-semibold tracking-tight md:text-[2rem]">{profile.name}</h1>
        <p className="mt-2 max-w-md font-mono text-sm leading-relaxed text-muted">
          {profile.role}, {profile.tagline.charAt(0).toLowerCase() + profile.tagline.slice(1)}
        </p>
        <p className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-muted">
          <MapPin className="h-3 w-3" aria-hidden />
          {profile.location}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/80 transition-colors hover:bg-background-soft hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <Image
        src="/avatar.jpg"
        alt={profile.name}
        width={112}
        height={112}
        priority
        className="h-20 w-20 shrink-0 rounded-xl object-cover md:h-28 md:w-28"
      />
    </header>
  );
}
