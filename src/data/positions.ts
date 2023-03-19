export const positions = [
  "Full-Stack developer",
  "Front-End Developer",
  "Back-End Developer",
  "Project Manager",
  "Solution Architect",
  "Principal Software Engineer",
  "Site Reliability Engineering",
  "Software Engineer",
] as const;

export type Position = typeof positions[number];
