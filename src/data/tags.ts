export const tags = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'NestJs',
  'React',
  'Vue',
  'Java',
  'C#',
  'PHP',
  'Ruby',
  'Python',
  'Golang',
  '.Net',
  'SRE',
  'DevOps',
  'IT Operations',
  'Scalability',
  'Software Developer',
  'Software Engineer',
  'Project Management',
  'Solution Architecture',
  'Software Architecture',
  'IT Strategy',
  'Interview Tips',
  'Team lead',
  'HR',
  'Tech Recruiter',
  'Student',
  'Product Manager',
  'UI/UX Designer',
  'Design',
  'Data Engineer',
  'SEO',
  'Linux',
] as const;

export type Tag = (typeof tags)[number];
