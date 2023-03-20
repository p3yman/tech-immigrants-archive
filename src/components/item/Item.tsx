import { countries as countriesList } from '@/data/countries';
import { VideoItem } from '@/types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';

dayjs.extend(relativeTime);

interface ItemProps {
    data: VideoItem;
}

export const Item = ({ data }: ItemProps) => {
    const { thumbnail, name, position, countries, tags, audio, youtube, publish_date } = data;
    const countryItems = countriesList.filter((c) => countries.includes(c.code));
    const isUpcoming = new Date(publish_date) > new Date();

    return (
        <div className="w-full rounded overflow-hidden shadow bg-white">
            <div className="w-full relative">
                <Image alt={name} src={thumbnail} width={640} height={320} />
                {isUpcoming && (
                    <span className="absolute top-2 left-2 rounded bg-red-500 text-white px-2 py-1 text-sm">
                        Upcoming {dayjs(publish_date).fromNow()}
                    </span>
                )}
            </div>
            <div className="p-5 min-h-[170px]">
                <div className="font-bold text-xl mb-1">{name}</div>
                <p className="text-gray-500 text-base mb-3">{position}</p>
                <div className="flex gap-1 mb-4">
                    {countryItems.map((country) => (
                        <span key={country.code} className="text-sm font-semibold text-gray-700 mr-2">
                            {country.flag} {country.label}
                        </span>
                    ))}
                </div>
                <div>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block bg-purple-50 border border-purple-200 text-purple-900 rounded px-2 py-1 text-xs font-semibold mr-2"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <footer className="border-t border-gray-100 p-3 flex flex-row-reverse gap-1 justify-between w-full">
                <a
                    href={youtube}
                    target="_blank"
                    className={`flex items-center gap-2 bg-youtube hover:bg-red-600 transition-colors text-white text-gray text-sm py-2 px-4 rounded`}
                    rel="noreferrer"
                >
                    <Image src="/youtube.svg" alt="YouTube" width="24" height="24" />
                    Watch on YouTube
                </a>
                {audio && (
                    <a href={audio} target="_blank" className={`border text-sm py-2 px-4 rounded`} rel="noreferrer">
                        Download audio
                    </a>
                )}
            </footer>
        </div>
    );
};
