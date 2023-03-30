import React from 'react';
import { Footer, Header } from '../../../shared/component/index';

function Form(props) {
  return (
    <>
      <Header />
      <main className="mt-20">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            {/* card */}
            <div className="mx-auto mt-12 max-w-[460px] md:shadow">
              {/* card-body */}
              <div className="border bg-white px-10 py-20 shadow-lg">
                <h1 className="typo-playfair mb-10 text-center text-2xl font-semibold">
                  Welcome to webPulse
                </h1>
                {props.children}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Form;
