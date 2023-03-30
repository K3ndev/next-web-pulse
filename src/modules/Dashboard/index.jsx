import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Header, Footer } from '../../shared/component/index';

function Dashboard() {
  const [isNotif, setIsNotif] = useState(true);

  const runScanHandler = () => {
    // console.log('hi');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNotif(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>WebPulse | Dashboard Page</title>
      </Head>
      <div className="custom-background-vision"></div>
      <Header />

      <main className="mt-20">
        {/* notification */}
        {isNotif && (
          <div className="toast-center toast toast-top absolute z-50 max-w-xl">
            <div className="w-max rounded-xl bg-primary p-4">
              <div>
                <p className="text-white">
                  Automation scan is currently unavailable
                </p>
              </div>
            </div>
          </div>
        )}

        <section className="py-20">
          <div className="mx-auto max-w-6xl rounded-md border bg-white px-5 py-10 shadow-sm">
            <h2 className="typo-playfair mb-10 text-center text-3xl">
              Scan your website
            </h2>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter your url</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="https://google.com, ..."
                    className="input-bordered input"
                  />
                  <span
                    className="cursor-pointer hover:bg-primary hover:text-white"
                    onClick={runScanHandler}
                  >
                    Run Scan
                  </span>
                </label>
                <p>sample url: https://google.com</p>
                <p>sample url: https://google.com,https://www.facebook</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
