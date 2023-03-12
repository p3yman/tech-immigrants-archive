import { VideoItem } from "@/data/videos";
import Item from "../item/Item";

interface VideosProps {
  list: VideoItem[];
  className?: string;
}

export const List = ({ list }: VideosProps) => {
  return (
    <div className="w-3/4 pt-32 min-h-screen">
      {list.map((item) => (
        <Item data={item} key={item.youtube} />
      ))}
    </div>
  );
};
