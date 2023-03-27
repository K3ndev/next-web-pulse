import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  const [isLoggedIn] = useState(false);

  return (
    <header className="custom-shadow-xs fixed top-0 left-0 right-0  z-30 border border-[#e5e7eb] bg-white">
      <nav className="h-100 mx-auto h-20 max-w-6xl px-4 flex justify-between w-full items-center">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/assets/logo_light.png"
              alt="logo"
              width="120"
              height="90"
              className="min-w-[90px]"
            />
          </Link>
        </div>
        <ul className="flex gap-4 items-center">
          <li className="cursor-pointer text-slate-500 hover:text-slate-800">
            <Link href="/documentation">Docs</Link>
          </li>
          <li className="cursor-pointer text-slate-500 hover:text-slate-800">
            <a href="https://github.com/K3ndev/next-web-pulse">Github</a>
          </li>
          {!isLoggedIn && (
            <Link
              href="/login"
              className=" hover:bg-[#F8F9FA] cursor-pointer text-slate-500 border border-gray-300 py-1 px-4 rounded-md flex items-center gap-1"
            >
              <div>Account</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="inline w-[1rem]"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-6 6l6-6m-6-6l6 6"
                />
              </svg>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}
