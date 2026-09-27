import { GraduationCap } from "lucide-react";

import { ActionButtons } from "./components/ActionButtons";
import { Avatar } from "./components/Avatar";
import { CodeBackground } from "./components/CodeBackground";
import { Footer } from "./components/Footer";
import { StatusBadge } from "./components/StatusBadge";
import { profile } from "./data/profile";

export default function App() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <CodeBackground />

      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-16 sm:px-8">
        <div className="grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <section className="flex flex-col items-start gap-7">
            <div className="reveal reveal-d1">
              <StatusBadge />
            </div>

            <div className="reveal reveal-d2 space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
                So Lok Hang,{" "}
                <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Nathan
                </span>
              </h1>
              <p className="flex items-center gap-2 font-mono text-sm text-cyan-200/90 sm:text-base">
                <GraduationCap aria-hidden="true" className="size-4 shrink-0 sm:size-5" />
                {profile.major}
              </p>
            </div>

            <p className="reveal reveal-d3 max-w-2xl text-pretty text-base leading-relaxed text-slate-300/90 sm:text-lg">
              {profile.intro}
            </p>

            <div className="reveal reveal-d4 w-full sm:w-auto">
              <ActionButtons />
            </div>
          </section>

          <div className="reveal reveal-d3 flex justify-center lg:justify-end">
            <Avatar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
