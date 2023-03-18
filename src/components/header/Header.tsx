import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center shadow p-3 pr-6 h-36 sm:h-24 fixed w-full bg-white z-50">
      <div className="flex gap-2 items-center">
        <Image src="/logo.jpeg" alt="Tech Immigrents" width="64" height="64" />
        <h1 className="text-2xl font-medium">Tech Immigrants</h1>
      </div>
      <div className="flex gap-2">
        <a
          href={`https://www.youtube.com/channel/test`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm sm:text-base"
        >
          <span className="hidden sm:inline-block">Visit</span> YouTube Channel
        </a>
        <a
          href={`https://t.me/telegram`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm sm:text-base"
        >
          <span className="hidden sm:inline-block">Join</span> Telegram Channel
        </a>
      </div>
    </header>
  );
};
