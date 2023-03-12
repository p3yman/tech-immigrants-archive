import { VideoItem } from "@/data/videos";
import Video from "../video/Video";

interface VideosProps {
  videos: VideoItem[];
  className?: string;
}

export const Videos = ({ videos }: VideosProps) => {
  return (
    <div className="w-3/4 pt-32">
      {videos.map((video) => (
        <Video data={video} key={video.youtube} />
      ))}
    </div>
  );
};
