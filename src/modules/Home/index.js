import Head from 'next/head';
import { Header, Footer } from '../../shared/component/index';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>WebPulse | Home Page</title>
      </Head>
      <div className="custom-background-vision"></div>
      <Header />
      <main className="mt-20">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">secion1</div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
