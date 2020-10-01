import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Layout from '../components/layout';

import films from '../../data/films.json';
import people from '../../data/people.json';
import planets from '../../data/planets.json';
import species from '../../data/species.json';
import vehicles from '../../data/vehicles.json';
import starships from '../../data/starships.json';

export async function getStaticProps() {
  return {
    props: {
      statistics: {
        People: people.length,
        Planets: planets.length,
        Films: films.length,
        Species: species.length,
        Vehicles: vehicles.length,
        Starships: starships.length,
      },
    }, // will be passed to the page component as props
  };
}

function AboutPage({ statistics }) {
  return (
    <Layout currentPage="about">
      <Head>
        <title>SWAPI - The Star Wars API</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-no-wrap">
          <div className="px-4 py-2 m-2 md:w-48">
            <h4 className="text-lg font-bold mb-2">Statistics</h4>
            <ul className="list-disc list-inside">
              {Object.keys(statistics).map((key) => (
                  <li key={key}>
                    <span>{key}</span>: <span>{statistics[key]}</span>
                  </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-2">What is this?</h4>
              <p className="mb-2">
                The Star Wars API is the world’s first quantified and
                programmatically-formatted set of Star Wars data.
              </p>
              <p className="mb-2">
                After hours of watching films and trawling through content
                online, we present to you all the People, Films, Species,
                Starships, Vehicles and Planets from Star Wars.
              </p>
              <p className="mb-2">
                We’ve formatted this data in JSON and exposed it to you in a
                RESTish implementation that allows you to programmatically
                collect and measure the data.
              </p>
              <p className="mb-2">
                Check out the documentation to get started consuming swapi data
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-2">
                What happened to swapi.co?
              </h4>
              <p className="mb-2">
                Unfortunately swapi.co is not maintained anymore, and the
                service is currently down. This is an branch of SWAPI that will
                be supported going forward.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">
                What can you use this for?
              </h4>
              <p className="mb-2">
                Comparing the data from Star Wars has never been easier. Here
                are some examples using the Python helper library.
              </p>
              <p className="italic mt-2">List the planets in order of size:</p>
              <div className="rounded overscroll-auto overflow-auto bg-gray-300 text-gray-700 p-4 border border-gray-400">
                <pre className="overscroll-auto text-sm">
                  {`import swapi
for planet in swapi.get_all("planets").order_by("diameter"):
    print(planet.name)`}
                </pre>
              </div>

              <p className="italic mt-2">
                View the people who have piloted more than one starship:
              </p>
              <div className="rounded overscroll-auto overflow-auto bg-gray-300 text-gray-700 p-4 border border-gray-400">
                <pre className="overscroll-auto text-sm">
                  {`import swapi
for people in swapi.get_all("people").iter():
    if len(people.starships) > 1:
        print(people.name)
`}
                </pre>
              </div>
              <p className="italic mt-2">
                Discover if Jar Jar Binks ruined a film just by being in it:
              </p>
              <div className="rounded overscroll-auto overflow-auto bg-gray-300 text-gray-700 p-4 border border-gray-400">
                <pre className="overscroll-auto text-sm">
                  {`import swapi
pm = swapi.get_film(4)
jj = swapi.get_person(36)
for c in pm.get_characters().iter():
    if c.name == jj.name:
        print("Why George, why.")`}
                </pre>
              </div>
              <div className="my-8">
                <h4 className="text-lg font-bold mb-2 mt-2">
                  What are the features?
                </h4>
                <p className="mb-2">
                  <span className="line-through">
                    We’re using Django and Django REST Framework
                  </span>{' '}
                  We’re using JavaScript Lambda Serverless functions to serve a
                  RESTishAPI to you. The data is all formatted in JSON and we
                  also support JSON Schema for programmatically understanding
                  the attributes of each resource.
                </p>
                <p className="mb-2">
                  For the front-end we’re using React.js and Next.js to
                  statically pre-render all the pages in order to deploy the
                  whole site following the JamStack approach.
                </p>
                <p className="mb-2">
                  After hours of watching films and trawling through content
                  online, we present to you all the People, Films, Species,
                  Starships, Vehicles and Planets from Star Wars.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-2 mt-2">Who are you?</h4>
                <p className="mb-2">{'// TODO'}</p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-2 mt-2">
                  Original author?
                </h4>
                <p className="mb-2">
                  This project was originally built and maintained by Paul
                  Hallett.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-2 mt-2">
                  Copyright and stuff?
                </h4>
                <p className="mb-2">
                  Star Wars and all associated names are copyright Lucasfilm
                  ltd.
                </p>
                <p className="mb-2">
                  This project is open source and carries a BSD licence.
                </p>
                <p className="mb-2">
                  All data has been freely collected from open sources such as
                  Wookiepedia.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-2 mt-2">Contributors</h4>
                <p className="mb-2">
                  SWAPI would not be possible without contributions from the
                  following people:
                </p>
                <p className="mb-2">
                  <ul className="list-disc list-inside">
                    <li>Paul Hallett</li>
                    <li>Owen Hallett</li>
                    <li>Carvilsi</li>
                    <li>Andrea Stagi</li>
                    <li>Juriy Bura</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

AboutPage.propTypes = {
  statistics: PropTypes.array,
};

export default AboutPage;
