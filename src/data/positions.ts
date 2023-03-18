export const positions = ["Front-End Developer", "Back-End Developer"] as const;

export type Position = typeof positions[number];
