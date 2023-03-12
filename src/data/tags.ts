export const tagsList = [
  "JavaScript",
  "React",
  "Vue",
  "Java",
  "C#",
  ".Net",
] as const;

export type Tag = typeof tagsList[number];
