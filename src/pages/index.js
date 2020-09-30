import React from 'react';
import Head from 'next/head';
import Layout from '../components/layouts';
import RequestBox from '../components/request-box';
import Navigation from '../components/navigation';

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>SWAPI - The Star Wars API</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navigation />
      <div className="container mx-auto p-4 text-center text-yellow-400">
        <div className="text-5xl font-bold">SWAPI</div>
        <div className="text-lg">The Star Wars API</div>
      </div>
      <div className="container mx-auto text-center text-md pt-4 pb-12">
        <div>All the Star Wars data you’ve ever wanted:
          Planets, Spaceships, Vehicles, People, Films and Species</div>
        <div>From all SEVEN Star Wars films.
          Now with The Force Awakens data!</div>
      </div>
      <div>
        <RequestBox />

        <div className="container mx-auto text-center text-md pt-4 pb-12">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-lg font-bold mb-2">What is this?</div>
              The Star Wars API, or &ldquo;swapi&rdquo; (Swah-pee) is the
              world’s first quantified and programmatically-accessible data
              source for all the data from the Star Wars canon universe! We’ve
              taken all the rich contextual stuff from the universe and
              formatted into something easier to consume with software. Then we
              went and stuck an API on the front so you can access it all!
            </div>
            <div>
              <div className="text-lg font-bold mb-2">How can I use it?</div>
              All the data is accessible through our HTTP web API. Consult our
              documentation if you’d like to get started. Helper libraries for
              popular programming languages are also provided so you can consume
              swapi in your favourite programming language, in a style that
              suits you.
            </div>

            <div>
              <div className="text-lg font-bold mb-2">
                What happened with old swapi.co?
              </div>
              swapi.co is not supported and maintained anymode. But since so
              many projects and tutorials used it as their educational
              playground, this is an &ldquo;unofficial&rdquo; branch This
              project is open source and you can contribute on GitHub.
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 max-w-7xl border-gray-900 border-t">
        <div className="container mx-auto">
        Created by Paul Hallett &copy; 2020

        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
