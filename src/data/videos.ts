import { generateRandomVideo } from "@/support/generateRandomVideo";
// import { VideoItem } from "@/types";

// export const videos: VideoItem[] = [
//   {
//     thumbnail:
//       "https://i.ytimg.com/vi/6gGBvPARl4M/maxresdefault.jpg?v=63fa65ba",
//     name: "Ario",
//     countries: ["nl", "tr"],
//     position: "Front-End Developer",
//     tags: ["Java"],
//     youtube:
//       "https://www.youtube.com/watch?v=6gGBvPARl4M&ab_channel=TechImmigrants",
//     audio: null,
//   },
// ];

export const videos = Array.from({ length: 100 }, () => generateRandomVideo());
