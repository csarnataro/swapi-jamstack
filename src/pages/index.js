import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../components/layout';
import RequestBox from '../components/request-box';
import ExternalLink from '../components/external-link';

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const serverName = process.env.NEXT_PUBLIC_API_SERVER_NAME;
  // eslint-disable-next-line no-undef
  const res = await fetch(`${serverName}/api/people/1`);
  const initialCode = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      initialCode: JSON.stringify(initialCode, null, 2),
    },
  };
}

function HomePage({ initialCode }) {
  return (
    <Layout currentPage="index" seoTitle="Homepage">
      <div className="container mx-auto text-center text-md pt-4 pb-12">
        <div>
          An API with all the Star Wars data you’ve ever wanted: <br />Planets, Spaceships,
          Vehicles, People, Films and Species, from all SEVEN Star Wars films
        </div>
      </div>
      <div>
        <RequestBox initialCode={initialCode || '...'} />

        <div className="container mx-auto text-center text-md pt-4 pb-12 px-2">
          <div className="grid grid-col-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-lg font-bold mb-2">What is this?</h4>
              <p>
                The Star Wars API, or &ldquo;swapi&rdquo; (swah-pee) is the
                world’s first quantified and programmatically-accessible data
                source for all the data from the Star Wars canon universe! We’ve
                taken all the rich contextual stuff from the universe and
                formatted into something easier to consume with software.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">How can I use it?</h4>
              <p>
                All the data is accessible through our HTTP web API. Consult our
                {' '}<Link href="/documentation" className="underline">documentation</Link>{' '}
                to get started.<br />
                Swapi is the perfect playground to get familiar with REST architectures
                and for educational purpose.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">
                Why this API?
              </h4>
              <p>
                This site and the underlying API are heavily inspired by
                <ExternalLink href="https://github.com/phalt/swapi" label="swapi.co" />, which
                is not maintained anymore. Many forks of the original repo exist.
                E.g.
                <ExternalLink href="https://swapi.dev" label="swapi.dev" />
                or
                <ExternalLink href="https://swapi.tech" label="swapi.tech" />.
                This is a complete rewrite of the API and web site in JavaScript, using a
                <ExternalLink href="https://jamstack.org/" label="JAMStack" />
                architecture. Currently deployed on
                <ExternalLink href="https://www.netlify.com" label="Netlify" />
                using
                <ExternalLink href="https://nextjs.org/" label="Next.js" /> and
                <ExternalLink href="https://www.fastify.io/" label="fastify" />
                This project is open source and you can contribute on
                <ExternalLink href="https://github.com/csarnataro/swapi-jamstack" label="GitHub" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

HomePage.propTypes = {
  initialCode: PropTypes.string,
};

export default HomePage;
