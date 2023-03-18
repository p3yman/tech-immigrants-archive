export const positions = [
  "Front-End Developer",
  "Back-End Developer",
  "Principal Software Engineer",
] as const;

export type Position = typeof positions[number];
