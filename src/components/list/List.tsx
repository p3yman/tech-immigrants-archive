import { VideoItem } from '@/types';

import { Item } from '../item/Item';

interface VideosProps {
  list: VideoItem[];
  className?: string;
}

export const List = ({ list }: VideosProps) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-col-4 gap-4">
      {list.map((item) => (
        <Item data={item} key={item.youtube} />
      ))}
    </div>
  );
};
