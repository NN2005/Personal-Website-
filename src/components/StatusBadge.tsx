import { profile } from "../data/profile";

/** Compact status pill shown above the name. */
export function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/40 sm:text-sm">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-70 motion-reduce:hidden" />
        <span className="relative inline-flex size-2 rounded-full bg-cyan-300" />
      </span>
      {profile.status}
      <span aria-hidden="true" className="hidden text-slate-600 sm:inline">
        /
      </span>
      <span className="hidden font-mono text-[0.7rem] tracking-widest text-cyan-200/80 uppercase sm:inline">
        {profile.institution}
      </span>
    </span>
  );
}
