import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import RequestBox from '../components/request-box';

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
          All the Star Wars data you’ve ever wanted: Planets, Spaceships,
          Vehicles, People, Films and Species
        </div>
        <div>
          From all SEVEN Star Wars films. Now with The Force Awakens data!
        </div>
      </div>
      <div>
        <RequestBox initialCode={initialCode || '...'} />

        <div className="container mx-auto text-center text-md pt-4 pb-12">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="text-lg font-bold mb-2">What is this?</h4>
              <p>
                The Star Wars API, or &ldquo;swapi&rdquo; (Swah-pee) is the
                world’s first quantified and programmatically-accessible data
                source for all the data from the Star Wars canon universe! We’ve
                taken all the rich contextual stuff from the universe and
                formatted into something easier to consume with software. Then
                we went and stuck an API on the front so you can access it all!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">How can I use it?</h4>
              <p>
                All the data is accessible through our HTTP web API. Consult our
                documentation if you’d like to get started. Helper libraries for
                popular programming languages are also provided so you can
                consume swapi in your favourite programming language, in a style
                that suits you.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">
                What happened with old swapi.co?
              </h4>
              <p>
                swapi.co is not supported and maintained anymore. But since so
                many projects and tutorials used it as their educational
                playground, this is an &ldquo;unofficial&rdquo; branch This
                project is open source and you can contribute on GitHub.
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
