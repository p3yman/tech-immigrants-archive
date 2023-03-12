export const positionsList = [
  "Front-End Developer",
  "Back-End Developer",
] as const;

export type Position = typeof positionsList[number];
