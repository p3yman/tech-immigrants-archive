export const positions = [
  "Front-End Developer",
  "Back-End Developer",
  "Principal Software Engineer",
  "SRE",
] as const;

export type Position = typeof positions[number];
