import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 px-6 pb-8 text-center sm:px-8">
      <p className="font-mono text-[0.7rem] tracking-wide text-slate-400">
        © {year} {profile.name} · Built with React, TypeScript &amp; Tailwind CSS
      </p>
    </footer>
  );
}
