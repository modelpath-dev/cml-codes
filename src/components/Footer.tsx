import { profile } from "@/lib/data";
import oss from "@/lib/oss.json";

export default function Footer() {
  return (
    <footer className="mt-24 pb-12">
      <p
        aria-hidden
        className="select-none text-center text-[clamp(2.5rem,11vw,6.5rem)] font-semibold leading-none tracking-tighter text-foreground/[0.06]"
      >
        {profile.name.toUpperCase()}
      </p>
      <div className="mt-6 flex flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Open-source data synced {oss.syncedAt}</span>
      </div>
    </footer>
  );
}
