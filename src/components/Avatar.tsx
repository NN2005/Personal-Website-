import { Terminal } from "lucide-react";
import { useState } from "react";

import { profile } from "../data/profile";

/** Profile photo inside a glowing ring, with an initials avatar as fallback. */
export function Avatar() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex w-fit flex-col items-center">
      <div className="avatar-glow relative rounded-full">
        <div className="avatar-frame relative size-44 rounded-full bg-linear-to-br from-cyan-300/80 via-sky-500/50 to-violet-500/80 p-[2px] sm:size-52 lg:size-60">
          <div className="size-full overflow-hidden rounded-full bg-ink-900">
            {imageFailed ? (
              <div className="flex size-full items-center justify-center bg-linear-to-br from-ink-800 to-ink-950">
                <span className="font-mono text-4xl font-semibold tracking-widest text-cyan-200 sm:text-5xl">
                  {profile.initials}
                </span>
              </div>
            ) : (
              <img
                src={profile.avatar.src}
                alt={profile.avatar.alt}
                width={512}
                height={512}
                decoding="async"
                onError={() => setImageFailed(true)}
                className="size-full object-cover"
              />
            )}
          </div>
        </div>
      </div>

      <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-slate-300 backdrop-blur-sm">
        <Terminal aria-hidden="true" className="size-3.5 text-cyan-300" />
        {profile.handle}
      </p>
    </div>
  );
}
