import { Country } from "./countries";

interface Links {
  email?: string;
  website?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

export interface VideoItem {
  thumbnail: string;
  name: string;
  countries: Country[];
  companies?: string[];
  position: string;
  tags: string[];
  youtube: string;
  audio?: string;
  links?: Links;
}

export const videosData: VideoItem[] = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/6gGBvPARl4M/maxresdefault.jpg?v=63fa65ba",
    name: "Ario",
    countries: ["nl"],
    position: "Senior Software Engineer",
    tags: ["Java"],
    youtube:
      "https://www.youtube.com/watch?v=6gGBvPARl4M&ab_channel=TechImmigrants",
  },
];
