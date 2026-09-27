/**
 * Single source of truth for everything shown on the homepage.
 * Edit this file to update the site — no component changes required.
 */
export const profile = {
  name: "So Lok Hang, Nathan",
  /** Shown in the avatar fallback if the profile photo cannot be loaded. */
  initials: "NL",
  /** Monospace handle shown under the avatar. */
  handle: "nathan@hkust",
  status: "University Student",
  institution: "HKUST",
  major: "HKUST BEng (ELEC)",
  email: "lhsoaa@connect.ust.hk",
  github: {
    username: "NN2005",
    url: "https://github.com/NN2005",
  },
  avatar: {
    /** Resolved against the Vite base path, so it survives the Pages sub-path. */
    src: `${import.meta.env.BASE_URL}avatar.jpg`,
    alt: "Illustration of a masked spirit character holding a cup of tea, used as Nathan's avatar",
  },
  intro:
    "I'm Nathan, a university student at HKUST who spends most of his time reading science-fiction novels, writing code, and playing board games, card games and real-time strategy games like Hearts of Iron IV. I'm also fascinated by computer hardware and by modern AI deployment — the silicon that makes models run, and the engineering that gets them out of a notebook and into something people can actually use.",
} as const;
