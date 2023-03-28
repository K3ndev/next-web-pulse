import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  const [isLoggedIn] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [headerClass, setHeaderClass] = useState('custom-header-none');

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > previousScroll) {
      setHeaderClass('custom-header');
    } else {
      setHeaderClass('custom-header-none');
    }
    setPreviousScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0  z-30 border border-[#e5e7eb] bg-white ${headerClass}`}
      id="header"
    >
      <nav className="h-100 mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
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
        <ul className="flex items-center gap-4">
          <li className="cursor-pointer text-slate-500 hover:text-slate-800">
            <Link href="/documentation">Docs</Link>
          </li>
          <li className="cursor-pointer text-slate-500 hover:text-slate-800">
            <a href="https://github.com/K3ndev/next-web-pulse" target="_blank">
              Github
            </a>
          </li>
          {!isLoggedIn && (
            <Link
              href="/login"
              className=" flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 py-1 px-4 text-slate-500 hover:bg-[#F8F9FA]"
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
