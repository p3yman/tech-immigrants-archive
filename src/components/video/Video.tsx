import { VideoItem } from "@/data/videos";

interface VideoProps {
  data: VideoItem;
}

const Video = ({ data }: VideoProps) => {
  const { thumbnail, name, position, countries, tags } = data;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow bg-white">
      <img className="w-full" src={thumbnail} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
        <div className="flex items-center mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {countries}
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
