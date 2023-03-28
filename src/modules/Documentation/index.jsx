import Head from 'next/head';
import Highlighter from './components/Highlighter';

import { Header, Footer } from '../../shared/component/index';

function Documentation() {
  const codeRequest = `cat fetch.js
  async function fetchTest() {
    const URL = 'https://webpulse.com/api?url=https://www.google.com'
    try {
      let response = await fetch(URL)
      let data = await response.json()
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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Documentation;
