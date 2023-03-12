import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between items-center shadow p-3 pr-6 h-24 fixed w-full bg-white z-50">
      <div className="logo">
        <Image src="/logo.jpeg" alt="Tech Immigrents" width="64" height="64" />
      </div>
      <div className="flex gap-2">
        <a
          href={`https://www.youtube.com/channel/test`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Visit YouTube Channel
        </a>
        <a
          href={`https://t.me/telegram`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Join Telegram Channel
        </a>
      </div>
    </header>
  );
};
