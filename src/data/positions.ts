export const positions = [
    'Full-Stack developer',
    'Front-End Developer',
    'Back-End Developer',
    'Project Manager',
    'Solution Architect',
    'Principal Software Engineer',
    'Site Reliability Engineering',
    'Software Engineer',
    'Product Manager',
    'Android Developer',
    'Digital Marketing Manager',
    'Data Scientist',
    'Student',
] as const;

export type Position = (typeof positions)[number];
