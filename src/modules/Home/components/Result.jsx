import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// eslint-disable-next-line import/no-extraneous-dependencies
// import { useQuery } from '@tanstack/react-query';
import { ArrowRightSvg } from './ArrowRightSvg';
import { ArrowDownSvg } from './ArrowDownSvg';

function Result(props) {
  const { url } = props;
  const [result, setResult] = useState();

  const fetchResult = async (URL) => {
    const res = await fetch(`/api?url=${URL}`);
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetchResult(url, abortController.signal).then((data) => {
      setResult(data);
    });

    // this is not working because, we're fetching from api routes
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-3 text-slate-600">
      {/* basic details */}
      <div className="mb-2 w-full	border border-[#f3f4f6] bg-white p-4 drop-shadow">
        <div className="flex justify-between border-b border-b-[#f3f4f6] pb-3 align-baseline">
          <div className="flex flex-col">
            <h1>URL</h1>
            <p>
              <span className="hidden md:inline">https://</span>
              {url}
            </p>
          </div>
          <div className="flex flex-col">
            <h2>timestamp</h2>
            <p>{result?.[0]?.timestamp || 'loading'}</p>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <p>
            state:{' '}
            <span
              className={`${
                result?.[0]?.axe ? 'text-[#4ade80]' : 'text-red-600'
              }`}
            >
              {result?.[0]?.axe ? 'succeeded' : 'scanning'}
            </span>
          </p>
          <p>
            lighthouse <span className="hidden md:inline">version</span>:
            {/* {version */}
            {result?.[0]?.lighthouse.version || 'loading'}
          </p>
        </div>
      </div>

      {/* metrics */}
      <div className="mb-5 flex flex-col gap-2 md:flex-row">
        {/* 1 */}
        <div className="w-full border border-[#f3f4f6] bg-white p-4 drop-shadow md:max-w-[24rem]">
          <div className="align-center flex h-[3.5rem] justify-between border-b border-b-[#f3f4f6] pb-3">
            <h1>Web Vitals</h1>
            <div className="flex align-baseline">
              <p
                className={`text-3xl ${
                  result?.[0]?.lighthouse && 'text-[#4ade80]'
                }`}
              >
                {result?.[0]?.lighthouse.total || 'loading'}
              </p>
              <span>/</span>
              <p>400</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 flex-row">
            <div>
              <p>LCP: {result?.[0]?.largestContentfulPaint || 'loading'}</p>
              <p>TBT: {result?.[0].totalBlockingTime || 'loading'}</p>
              <p>CLS: {result?.[0].cumulativeLayoutShift || 'loading'}</p>
            </div>
            <div>
              <p>FCP: {result?.[0].firstContentfulPaint || 'loading'}</p>
              <p>SI: {result?.[0].speedIndex || 'loading'}</p>
              <p>TTI: {result?.[0].timeToInteractive || 'loading'}</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-full border border-[#f3f4f6] bg-white p-4 drop-shadow">
          <div className="align-center flex h-[3.5rem] justify-between border-b border-b-[#f3f4f6] pb-3">
            <h1>Transferred Assets</h1>
            <div className="align-center flex">
              <p>total: {result?.[0]?.weight.total || 'loading'}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-row justify-between">
            <div>
              <p>Image: {result?.[0]?.weight.image || 'loading'}</p>
              <p>Script: {result?.[0]?.weight.script || 'loading'}</p>
              <p>Document:{result?.[0]?.weight.document || 'loading'}</p>
            </div>
            <div>
              <p>Font: {result?.[0]?.weight.font || 'loading'}</p>
              <p>Stylesheet: {result?.[0]?.weight.stylesheet || 'loading'}</p>
              <p>ThirdParty: {result?.[0]?.weight.thirdParty || 'loading'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ads */}
      <div className="mb-5 flex flex-col items-center justify-between bg-[#ededed] p-3 shadow-inner md:flex-row md:p-5">
        <div>
          <h2>Monitor Your Website</h2>
          <p className="mb-3 md:mb-0">
            Automate performance monitoring, gain insights over time, save
            previous scans for easy progress comparison and tracking.
          </p>
        </div>
        <div>
          <Link className="btn-light btn shadow-md" href="/login">
            Goto Account <ArrowRightSvg />
          </Link>
        </div>
      </div>

      {/* result */}
      <div>
        <h2 className="text-text-lg text-black">Lighthouse Audits</h2>

        {/* 1 */}
        <div className="collapse border">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-black peer-checked:bg-[#E6EDEF]">
            <div className="flex justify-between">
              <p>
                Performance:{' '}
                <span className="text-success">
                  {result?.[0]?.lighthouse.performance
                    ? result[0].lighthouse.performance * 100
                    : 'loading'}
                </span>
              </p>
              <ArrowDownSvg className="w-10" />
            </div>
          </div>
          <div className="collapse-content ">
            <div className="mt-2 border-t">
              The page should be prevented back/forward cache restoration
            </div>
            <div>First Contentful Paint</div>
            <div>Largest Contentful Paint</div>
            <div>Total Blocking Time</div>
            <div>Cumulative Layout Shift</div>
            <div>Speed Index</div>
            <div>Time to Interactive</div>
            <div>Max Potential First Input Delay</div>
            <div>First Meaningful Paint</div>
            <div>Eliminate the render-blocking resources</div>
            <div>Properly size images</div>
            <div>Defer offscreen images</div>
            <div>Minify CSS</div>
            <div>Minify JavaScript</div>
            <div>Reduce unused CSS</div>
            <div>Reduce unused JavaScript</div>
            <div>Efficiently encode images</div>
            <div>Serve images in next-gen formats</div>
            <div>Enable text compression</div>
            <div>Preconnect to required origins</div>
            <div>Initial server response time was short</div>
            <div>Avoid multiple page redirects</div>
            <div>Use HTTP/2</div>
            <div>Use video formats for animated content</div>
            <div>Remove duplicate modules in JavaScript bundles</div>
            <div>Avoid serving legacy JavaScript to modern browsers</div>
            <div>Avoids enormous network payloads</div>
            <div>Uses efficient cache policy on static assets</div>
            <div>Avoids an excessive DOM size</div>
            <div>JavaScript execution time</div>
            <div>Minimizes main-thread work</div>
            <div>All text remains visible during webfont loads</div>
            <div>Uses passive listeners to improve scrolling performance</div>
            <div>Avoids document.write()</div>
            <div>Image elements should have explicit width and height</div>
            <div>Has a tag with width or initial-scale</div>
          </div>
        </div>

        {/* 2 */}
        <div className="collapse border">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-black peer-checked:bg-[#E6EDEF]">
            <div className="flex justify-between">
              <p>
                Accessibility:{' '}
                <span className="text-success">
                  {result?.[0]?.lighthouse.accessibility
                    ? result[0].lighthouse.accessibility * 100
                    : 'loading'}
                </span>
              </p>
              <ArrowDownSvg className="w-10" />
            </div>
          </div>
          <div className="collapse-content ">
            <div className="mt-2 border-t">
              [aria-*] attributes match their roles
            </div>
            <div>
              [aria-hidden=&quot;true&quot;] should not present on the document
              body tag
            </div>
            <div>[aria-*] attributes should have valid values</div>
            <div>[aria-*] attributes should be valid and not misspelled</div>
            <div>
              Background and foreground colors should have a sufficient contrast
              ratio
            </div>
            <div>Document should have a title tag element</div>
            <div>
              Heading elements should appear in a sequentially-descending order
            </div>
            <div>html tag element should have a [lang] attribute</div>
            <div>
              html tag element should have a valid value for its [lang]
              attribute
            </div>
            <div>Image elements should have [alt] attributes</div>
            <div>Links should have a discernible name</div>
            <div>
              Lists contain should only have li tag elements and script
              supporting elements (script and template tag).
            </div>
            <div>
              List items (li tag) should contained within ul, ol or menu tag
              parent elements
            </div>
            <div>
              [user-scalable=&quot;no&quot;] should not used in the meta
              name=&quot;viewport&quot; element and the [maximum-scale]
              attribute is not less than 5.
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="collapse border">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-black peer-checked:bg-[#E6EDEF]">
            <div className="flex justify-between">
              <p>
                BestPractices:{' '}
                <span className="text-success">
                  {result?.[0]?.lighthouse.bestPractices
                    ? result[0].lighthouse.bestPractices * 100
                    : 'loading'}
                </span>
              </p>
              <ArrowDownSvg className="w-10" />
            </div>
          </div>
          <div className="collapse-content ">
            <div className="mt-2 border-t">Uses HTTPS</div>
            <div>
              Should avoid requesting the geolocation permission on page load
            </div>
            <div>
              Should avoid requesting the notification permission on page load
            </div>
            <div>Should allow users to paste into input fields</div>
            <div>should serves images with appropriate resolution</div>
            <div>Page should have the HTML doctype</div>
            <div>Properly defines charset</div>
            <div>Avoids unload event listeners</div>
            <div>Avoids deprecated APIs</div>
            <div>Page has valid source maps</div>
            <div>No issues in the Issues panel in Chrome Devtools</div>
          </div>
        </div>

        {/* 4 */}
        <div className="collapse border">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-black peer-checked:bg-[#E6EDEF]">
            <div className="flex justify-between">
              <p>
                Seo:{' '}
                <span className="text-success">
                  {result?.[0]?.lighthouse.seo
                    ? result[0].lighthouse.seo * 100
                    : 'loading'}
                </span>
              </p>
              <ArrowDownSvg className="w-10" />
            </div>
          </div>
          <div className="collapse-content ">
            <div className="mt-2 border-t">Links are not crawlable</div>
            <div>Should have a code tag with width or initial-scale</div>
            <div>
              Should have a &lt;meta name=&quot;viewport&quot;&gt; tag with
              <code>width</code> or <code>initial-scale</code>
            </div>
            <div> Document should have a &lt;title&gt; element</div>
            <div>Document should have a meta description</div>
            <div>Page should have successful HTTP status code</div>
            <div>Links have descriptive text</div>
            <div>Page isn’t blocked from indexing</div>
            <div>Image elements should have [alt] attributes</div>
            <div>Document should have a valid hreflang</div>
            <div>Document should uses legible font sizes</div>
            <div>Document avoids plugins</div>
            <div>Tap targets should have sized appropriately</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Result;
