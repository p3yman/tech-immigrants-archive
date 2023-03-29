import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Header = ({ toggleMenu, isMenuOpen }: any) => {
  return (
    <div>
      <header className="fixed z-50 flex hidden h-36 w-full flex-col items-center justify-between bg-white p-3 pr-6 shadow sm:flex">
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
      <header className="fixed z-50 flex w-full items-center justify-between bg-gray-900 px-4 py-3 text-white sm:hidden">
        <Image src="/logo.jpeg" alt="Tech Immigrents" width="24" height="24" />
        <div>Tech Immigrants Archive</div>
        <button onClick={toggleMenu} className="mobile-menu-button outline-none">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>
    </div>
  );
};
