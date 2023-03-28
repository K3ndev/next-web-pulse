import Image from 'next/image';

// eslint-disable-next-line import/prefer-default-export
export function Footer() {
  return (
    <footer className="z-30 bg-[#084c62] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 text-slate-400">
        <div className="flex w-full flex-col gap-5 md:flex-row md:justify-between md:gap-0">
          <div className="flex flex-col items-center md:flex-col md:items-start">
            <Image
              src="/assets/logo_light.png"
              width="120"
              height="90"
              alt=""
              className="mb-2 min-w-[90px]"
            />
            <p className="text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur, <br />
              adipisicing elit. Ea, recusandae.
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <div>
              <h3 className="mb-2 font-bold text-slate-100	">Projects</h3>
              <p className="cursor-pointer hover:text-slate-300">Contribute</p>
              <p className="cursor-pointer hover:text-slate-300">Changelog</p>
              <p className="cursor-pointer hover:text-slate-300">Releases</p>
              <p className="cursor-pointer hover:text-slate-300">Docs API</p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-slate-100">Community</h3>
              <p className="cursor-pointer hover:text-slate-300">
                Join Discord
              </p>
              <p className="cursor-pointer hover:text-slate-300">
                Follow on Twitter
              </p>
              <p className="cursor-pointer hover:text-slate-300">
                Email newsletter
              </p>
              <p className="cursor-pointer hover:text-slate-300">
                Gihub discussions
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col justify-between md:flex-row">
          <p className="text-center">
            © 2023 webpulse.com All rights reserved.
          </p>
          <div className="flex justify-center gap-2">
            <div className="cursor-pointer hover:text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="w-[1.25rem]"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
                ></path>
              </svg>
            </div>
            <div className="cursor-pointer hover:text-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="w-[1.25rem]"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className=""
                >
                  <path
                    d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M7.5 7.5c3.5-1 5.5-1 9 0m-9.5 9c3.5 1 6.5 1 10 0"
                    className=""
                  ></path>
                  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-1 2.5M8.5 17c0 1-1.356 3-1.832 3c-1.429 0-2.698-1.667-3.333-3c-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"></path>
                </g>
              </svg>
            </div>
            <a
              className="cursor-pointer hover:text-slate-300"
              href="https://github.com/K3ndev/next-web-pulse"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="w-[1.25rem]"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
