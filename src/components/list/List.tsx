import { VideoItem } from '@/types';

import { Item } from '../item/Item';

interface VideosProps {
  list: VideoItem[];
  className?: string;
}

export const List = ({ list }: VideosProps) => {
  return (
    <div className="2xl:grid-col-4 grid grid-cols-1 gap-4 p-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {list.map((item) => (
        <Item data={item} key={item.youtube} />
      ))}
    </div>
  );
};
