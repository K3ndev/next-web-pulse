import Head from 'next/head';
import Highlighter from './components/Highlighter';

import { Header, Footer } from '../../shared/component/index';

function Documentation() {
  const codeRequest = `cat fetch.js
  const URL = 'https://webpulse.com/api?url=https://www.google.com'
  async function fetchTest(URL) {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      return data
    } catch(err) { return err }
  }`;
  const codeResponse = `cat result.json
  [{
    "url": "https://www.google.com/",
    "requestedUrl": "https://www.google.com/",
    "timestamp": 1679985754710,
    "ranks": {
      "hundos": 1,
      "performance": 1,
      "accessibility": 1,
      "cumulative": 1
    },
    "lighthouse": {
      "version": "10.0.2",
      "performance": 0.69,
      "accessibility": 0.8,
      "bestPractices": 1,
      "seo": 0.85,
      "total": 334
    },
    "firstContentfulPaint": 1117.763,
    "firstMeaningfulPaint": 1197.263,
    "speedIndex": 5218.110361828296,
    "largestContentfulPaint": 1197.263,
    "totalBlockingTime": 1724.5,
    "cumulativeLayoutShift": 0.00975153876476572,
    "timeToInteractive": 6901.763,
    "maxPotentialFirstInputDelay": 517,
    "timeToFirstByte": 126.63900000000001,
    "weight": {
      "summary": "43 requests • 679 KiB",
      "total": 695447,
      "image": 18669,
      "imageCount": 16,
      "script": 510319,
      "scriptCount": 7,
      "document": 46293,
      "font": 29910,
      "fontCount": 2,
      "stylesheet": 827,
      "stylesheetCount": 1,
      "thirdParty": 100708,
      "thirdPartyCount": 15
    },
    "run": {
      "number": 2,
      "total": 3
    },
    "sidequests": {
      "-weight.total": 1,
      "+weight.total": 1,
      "-weight.document": 1,
      "+weight.document": 1,
      "-weight.script": 1,
      "+weight.script": 1,
      "-weight.image": 1,
      "+weight.image": 1,
      "-weight.font": 1,
      "+weight.font": 1,
      "+weight.fontCount": 1,
      "-timeToFirstByte": 1,
      "-totalBlockingTime": 1,
      "-largestContentfulPaint": 1
    },
    "axe": {
      "passes": 239,
      "violations": 22
    }
  }]`;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>WebPulse | Documentation Page</title>
      </Head>
      <div className="custom-background-vision"></div>
      <Header />
      <main className="mt-20">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="mb-10 text-3xl text-secondary">API DOCUMENTATION</h1>
            <div className="mb-5">
              <h2 className="mb-1 text-2xl">BASE URL</h2>
              <p className="text-xl text-success">webpulse.com</p>
            </div>
            <div className="mb-5">
              <h2 className="mb-1 text-2xl">ENDPOINTS</h2>
              <div className="border border-blue-500 p-1 text-xl">
                <span className="pr-2 text-blue-500">GET</span>
                /api?url=https://www.google.com
              </div>
              <p className="pl-5 text-lg">returns a the result of the scan.</p>
            </div>
            <div className="mb-5">
              <h2 className="mb-1 text-2xl">request</h2>
              <Highlighter code={codeRequest} />
            </div>
            <div className="mb-5">
              <h2 className="mb-1 text-2xl">response</h2>
              <Highlighter code={codeResponse} />
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-1 text-2xl">About the metrics audits</h2>
            <div className="collapse rounded-tl-lg rounded-tr-lg">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#3D4451] text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                Performance metrics
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#3D4451] peer-checked:text-secondary-content">
                <p className="pt-3">
                  For website automation and performance monitoring include load
                  time, page speed, and responsiveness. These metrics measure
                  how quickly the website loads and how fast the website
                  responds to user actions. They also measure the website&apos;s
                  ability to handle heavy traffic without crashing or slowing
                  down. Performance metrics are important for ensuring a
                  positive user experience and can impact search engine
                  rankings.
                </p>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#3D4451] text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                Accessibility metrics
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#3D4451] peer-checked:text-secondary-content">
                <p className="pt-3">
                  Includes compliance with the Web Content Accessibility
                  Guidelines (WCAG) and the Americans with Disabilities Act
                  (ADA). These metrics ensure that the website is accessible to
                  people with disabilities and that it can be used by a diverse
                  range of users. Accessibility metrics can also impact search
                  engine rankings and can help to avoid legal issues related to
                  non-compliance.
                </p>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#3D4451] text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                Best practices metrics
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#3D4451] peer-checked:text-secondary-content">
                <p className="pt-3">
                  Entails compliance with industry standards and guidelines.
                  These metrics ensure that the website follows established best
                  practices for security, privacy, and usability. Best practices
                  metrics can also impact search engine rankings and can help to
                  avoid legal issues related to non-compliance.
                </p>
              </div>
            </div>
            <div className="collapse rounded-bl-lg rounded-br-lg">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#3D4451] text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                SEO metrics
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#3D4451] peer-checked:text-secondary-content">
                <p className="pt-3">
                  Refers search engine rankings, organic traffic, and keyword
                  performance. These metrics measure the website&apos;s
                  visibility and relevance in search engine results pages
                  (SERPs) and help to optimize the website for search engines.
                  SEO metrics are important for increasing organic traffic and
                  improving the website&apos;s overall performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Documentation;
