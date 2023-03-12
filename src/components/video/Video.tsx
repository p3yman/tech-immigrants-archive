import { VideoItem } from "@/data/videos";
import { countriesList } from "@/data/countries";

interface VideoProps {
  data: VideoItem;
}

const Video = ({ data }: VideoProps) => {
  const { thumbnail, name, position, countries, tags, audio, youtube } = data;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow bg-white">
      <img className="w-full" src={thumbnail} alt={name} />
      <div className="p-5">
        <div className="font-bold text-xl mb-1">{name}</div>
        <p className="text-gray-500 text-base mb-3">{position}</p>
        <div className="flex gap-1 mb-4">
          {countries.map((country) => (
            <span
              key={country}
              className="text-sm font-semibold text-gray-700 mr-2"
            >
              {countriesList[country].flag} {countriesList[country].label}
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
          className={`border border-red-500 bg-red-500 hover:bg-red-600 transition-colors text-white text-gray text-sm py-2 px-4 rounded`}
        >
          Watch on YouTube
        </a>
        {audio && (
          <a
            href={audio}
            target="_blank"
            className={`border text-sm py-2 px-4 rounded`}
          >
            Download audio
          </a>
        )}
      </footer>
    </div>
  );
};

export default Video;
