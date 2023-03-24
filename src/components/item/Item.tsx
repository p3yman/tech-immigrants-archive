import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';

import { countries as countriesList } from '@/data/countries';
import { VideoItem } from '@/types';

dayjs.extend(relativeTime);

interface ItemProps {
  data: VideoItem;
}

export const Item = ({ data }: ItemProps) => {
  const { thumbnail, name, position, countries, tags, audio, youtube, publish_date } = data;
  const countryItems = countriesList.filter((c) => countries.includes(c.code));
  const isUpcoming = new Date(publish_date) > new Date();

  return (
    <div className="w-full overflow-hidden rounded bg-white shadow">
      <div className="relative w-full">
        <Image alt={name} src={thumbnail} width={640} height={320} />
        {isUpcoming && (
          <span className="absolute top-2 left-2 rounded bg-red-500 px-2 py-1 text-sm text-white">
            Upcoming {dayjs(publish_date).fromNow()}
          </span>
        )}
      </div>
      <div className="min-h-[170px] p-5">
        <div className="mb-1 text-xl font-bold">{name}</div>
        <p className="mb-3 text-base text-gray-500">{position}</p>
        <div className="mb-4 flex gap-1">
          {countryItems.map((country) => (
            <span key={country.code} className="mr-2 text-sm font-semibold text-gray-700">
              {country.flag} {country.label}
            </span>
          ))}
        </div>
        <div>
          {tags?.map((tag) => (
            <span
              key={tag}
              className="mr-2 inline-block rounded border border-purple-200 bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-900"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <footer className="flex w-full flex-row-reverse justify-between gap-1 border-t border-gray-100 p-3">
        <a
          href={youtube}
          target="_blank"
          className={`text-gray flex items-center gap-2 rounded bg-youtube py-2 px-4 text-sm text-white transition-colors hover:bg-red-600`}
          rel="noreferrer"
        >
          <Image src="/youtube.svg" alt="YouTube" width="24" height="24" />
          Watch on YouTube
        </a>
        {audio && (
          <a href={audio} target="_blank" className={`rounded border py-2 px-4 text-sm`} rel="noreferrer">
            Download audio
          </a>
        )}
      </footer>
    </div>
  );
};
