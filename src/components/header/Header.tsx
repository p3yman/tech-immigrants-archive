import Image from 'next/image';

export const Header = () => {
  return (
    <header className="fixed z-50 flex h-36 w-full flex-col items-center justify-between bg-white p-3 pr-6 shadow sm:h-24 sm:flex-row">
      <div className="flex items-center gap-2">
        <Image src="/logo.jpeg" alt="Tech Immigrents" width="64" height="64" />
        <h1 className="text-2xl font-medium">Tech Immigrants</h1>
      </div>
      <div className="flex gap-2">
        <a
          href="https://www.youtube.com/@TechImmigrants"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-youtube py-2 px-4 text-sm text-white hover:bg-red-700 sm:text-base"
        >
          <span className="hidden sm:inline-block">Visit</span> YouTube Channel
        </a>
        <a
          href="https://t.me/techimmigrants"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-blue-500 py-2 px-4 text-sm text-white hover:bg-blue-700 sm:text-base"
        >
          <span className="hidden sm:inline-block">Join</span> Telegram Group
        </a>
      </div>
    </header>
  );
};
