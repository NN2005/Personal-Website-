type CodeToken = {
  label: string;
  top: string;
  left: string;
  delay: string;
  duration: string;
  /** Hidden on the smallest screens so the hero stays uncluttered. */
  wideOnly?: boolean;
};

const CODE_TOKENS: readonly CodeToken[] = [
  { label: "</>", top: "14%", left: "7%", delay: "0s", duration: "18s" },
  { label: "const", top: "80%", left: "11%", delay: "-6s", duration: "22s" },
  { label: "=>", top: "46%", left: "4%", delay: "-9s", duration: "17s" },
  { label: "{ }", top: "26%", left: "89%", delay: "-3s", duration: "20s", wideOnly: true },
  { label: "0x1F", top: "70%", left: "82%", delay: "-2s", duration: "19s", wideOnly: true },
  { label: "npm run dev", top: "8%", left: "64%", delay: "-8s", duration: "24s", wideOnly: true },
  { label: "git push", top: "58%", left: "93%", delay: "-5s", duration: "21s", wideOnly: true },
  { label: "1010", top: "90%", left: "58%", delay: "-4s", duration: "23s", wideOnly: true },
];

/**
 * Purely decorative background: gradient lighting, a masked grid and a few
 * floating code tokens. Hidden from assistive technology.
 */
export function CodeBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-base" />
      <div className="bg-grid" />
      <div className="aurora aurora-blue" />
      <div className="aurora aurora-violet" />
      <div className="aurora aurora-cyan" />
      <div className="vignette" />

      {CODE_TOKENS.map((token) => (
        <span
          key={token.label}
          className={token.wideOnly ? "code-token hidden md:block" : "code-token"}
          style={{
            top: token.top,
            left: token.left,
            animationDelay: token.delay,
            animationDuration: token.duration,
          }}
        >
          {token.label}
        </span>
      ))}

      <div className="load-bar" />
    </div>
  );
}
