import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [previousScroll, setPreviousScroll] = useState(0);
  const [headerClass, setHeaderClass] = useState('custom-header-none');
  const [toggle, setToggle] = useState(false);

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

  // menu toggle
  const currentToggle = () => {
    return !toggle;
  };

  const handleMenuToggle = () => {
    setToggle(currentToggle());
    const menuOpen = document.querySelector('#menu-open');
    const menuClose = document.querySelector('#menu-close');
    const menuContainer = document.querySelector('#menu-container');

    if (currentToggle()) {
      menuClose.classList.add('hidden');
      menuOpen.classList.remove('hidden');
      menuContainer.classList.add('hidden');
      // document.body.classList.remove('overflow-hidden');
    }
    if (!currentToggle()) {
      menuOpen.classList.add('hidden');
      menuClose.classList.remove('hidden');
      menuContainer.classList.remove('hidden');
      // document.body.classList.add('overflow-hidden');
    }
  };

  // auto remove the menuContainer
  const handleResize = () => {
    const menuOpen = document.querySelector('#menu-open');
    const menuClose = document.querySelector('#menu-close');
    const menuContainer = document.querySelector('#menu-container');
    if (window.matchMedia('(min-width: 768px)').matches) {
      setToggle(false);
      menuClose.classList.add('hidden');
      menuOpen.classList.remove('hidden');
      menuContainer.classList.add('hidden');
      // document.body.classList.remove('overflow-hidden');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEmailUsername = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      return email.slice(0, atIndex);
    }
    return email;
  };

  return (
    <>
      <div
        aria-label="menu_container"
        id="menu-container"
        className="fixed top-[5.1rem] bottom-0 left-0 right-0 z-50  hidden bg-white"
      >
        <div className="mx-3 mt-4">
          <div className="flex flex-col gap-3">
            <Link
              className="w-full rounded-lg border px-3 py-1 text-center text-primary hover:bg-[#F8F9FA]"
              href="/login"
              id="btn-dashboard1"
            >
              Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="inline w-4"
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
            <button
              // className="btn-outline-light d-none btn mt-auto border px-3 py-1 text-primary"
              className="mt-auto hidden border px-3 py-1 text-primary"
              href="#"
              id="logoutBtn1"
            >
              logout
            </button>
            <Link
              href="/documentation"
              className="text-slate-500 hover:text-slate-800"
            >
              Docs
            </Link>
            <a
              className="text-slate-500 hover:text-slate-800"
              href="https://github.com/K3ndev/next-web-pulse"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
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
          <ul className="hidden items-center gap-4 md:flex">
            <li className="cursor-pointer text-slate-500 hover:text-slate-800">
              <Link href="/documentation">Docs</Link>
            </li>
            <li className="cursor-pointer text-slate-500 hover:text-slate-800">
              <a
                href="https://github.com/K3ndev/next-web-pulse"
                target="_blank"
              >
                Github
              </a>
            </li>
            {!session ? (
              <Link
                href="/dashboard"
                className=" flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 py-1 px-4 text-slate-600 hover:bg-[#F8F9FA]"
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
            ) : (
              <>
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 py-1 px-4 text-slate-600 hover:bg-[#F8F9FA]"
                >
                  <div>Logout</div>
                </button>
                <Link
                  href="/dashboard"
                  className="btn-primary flex cursor-pointer items-center gap-1 rounded-md border py-1 px-4 text-white"
                >
                  <div>{getEmailUsername(session.user.email)}</div>
                </Link>
              </>
            )}
          </ul>

          <button
            aria-label="Toggle menu"
            // class="ut-button-reset"
            className="cursor-pointer md:hidden"
            data-toggle="false"
            id="menu-toggle"
            aria-expanded="true"
            onClick={handleMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              id="menu-open"
              className="w-[1.6rem]"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="hidden w-[1.6rem]"
              id="menu-close"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </button>
        </nav>
      </header>
    </>
  );
}
