import { ArrowUpRight, Github, Mail } from "lucide-react";

import { profile } from "../data/profile";

/** The two calls to action: school email (mailto) and GitHub profile. */
export function ActionButtons() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
      <a
        href={`mailto:${profile.email}`}
        className="action-button action-button--primary focus-ring group inline-flex items-center gap-3.5 rounded-2xl px-5 py-3.5"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition-colors duration-300 group-hover:border-cyan-300/50 group-hover:text-cyan-100">
          <Mail aria-hidden="true" className="size-5" />
        </span>
        <span className="flex min-w-0 flex-col text-left">
          <span className="text-sm font-semibold text-white">School Email</span>
          <span className="truncate font-mono text-[0.7rem] text-cyan-100/70">{profile.email}</span>
        </span>
      </a>

      <a
        href={profile.github.url}
        target="_blank"
        rel="noopener noreferrer"
        className="action-button focus-ring group inline-flex items-center gap-3.5 rounded-2xl px-5 py-3.5"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-300/10 text-violet-200 transition-colors duration-300 group-hover:border-violet-300/50 group-hover:text-violet-100">
          <Github aria-hidden="true" className="size-5" />
        </span>
        <span className="flex min-w-0 flex-col text-left">
          <span className="text-sm font-semibold text-white">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
          <span className="truncate font-mono text-[0.7rem] text-violet-100/70">
            @{profile.github.username}
          </span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
        />
      </a>
    </div>
  );
}
