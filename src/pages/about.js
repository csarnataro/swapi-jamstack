import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Layout from '../components/layout';
import ExternalLink from '../components/external-link';

import films from '../../data/films.json';
import people from '../../data/people.json';
import planets from '../../data/planets.json';
import species from '../../data/species.json';
import vehicles from '../../data/vehicles.json';
import starships from '../../data/starships.json';
import Code from '../components/code';

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
          <div className="flex-1 px-4 py-2 m-2 prose">
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
                <ExternalLink href="https://en.wikipedia.org/wiki/Representational_state_transfer" label="REST" />
                implementation that allows you to programmatically
                collect and measure the data.
              </p>
              <p className="mb-2">
                Check out the <Link href="/documentation"><a>documentation</a></Link> to get started consuming swapi data
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">
                What can you use this for?
              </h4>
              <p className="mb-2">
                Comparing the data from Star Wars has never been easier. Here
                are some examples in plain JavaScript.
              </p>
              <p className="italic mt-2">Get the planet with id = 1:</p>
              <Code>
                {`const fetch = require('node-fetch')

fetch('https://www.swapi.it/api/planets/1')
 .then(res => res.json())
 .then(data => console.log(data))
 .catch(err => console.error(err))
`}
              </Code>
              <p className="italic mt-2">List the planets in order of size:</p>
              <Code>
                {`const fetch = require('node-fetch')

fetch('https://www.swapi.it/api/planets')
 .then(res => res.json())
 .then(planets => {
    console.log([...planets.results.sort((a,b) => 
      (parseInt(a.diameter) > parseInt(b.diameter)) 
      ? 1 
      : ((parseInt(b.diameter) > parseInt(a.diameter)) ? -1 : 0))])
 })
 .catch(err => console.error(err))
`}
              </Code>

              <p className="italic mt-2">
                View the people who have piloted more than one starship:
              </p>
              <Code>
                {`const fetch = require('node-fetch')

fetch('https://www.swapi.it/api/people')
  .then(res => res.json())
  .then(people => {
    console.log(people.results.filter(
      person => person.starships.length > 1
    ))
})
`}
              </Code>
              <div className="my-8">
                <h4 className="text-lg font-bold mb-2 mt-2">
                  What are the features?
                </h4>
                <p className="mb-2">
                  We’re using JavaScript Lambda Serverless functions to serve a
                  REST API to you. The data is all formatted in JSON and we
                  also support JSON Schema for programmatically understanding
                  the attributes of each resource.
                </p>
                <p className="mb-2">
                  For the front-end we’re using React.js and Next.js to
                  statically pre-render all the pages in order to deploy the
                  whole site following the JamStack approach.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-2 mt-2">Who are you?</h4>
                <p className="mb-2">
                  <code className="comment text-sm font-mono text-orange-300">
                    {'// current JavaScript version'}
                  </code>
                  <br />I am Christian Sarnataro, a passionate web developer
                  exploring the JamStack architecture.
                  <br />
                  <code className="comment text-sm font-mono text-orange-300">
                    {'// original swapi.co'}
                  </code>
                  <br />
                  I am Paul Hallett, a senior software engineer and an
                  infinitely protean machine.
                  <br />
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
                  <ExternalLink href="https://starwars.fandom.com/wiki/Main_Page" label="Wookiepedia" />.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-2">
                  What happened to swapi.co?
                </h4>
                <p className="mb-2">
                  Unfortunately swapi.co is not maintained anymore, and the
                  service is currently down.<br />
                  Inspired by this sentence in the readme file of the
                  {' '}<a href="https://github.com/Juriy/swapi" rel="noreferrer" target="_blank">swapi.dev</a> fork
                </p>
                <blockquote className="p-4 my-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                  original swapi project is built on Python/Django stack that is quite
                  outdated by now.<br />
                  It would be a great exercise to rewrite it in cloud-native manner
                </blockquote>
                <p className="mb-2">
                  I decided to rewrite the API and the frontend pages in JavaScript, using the
                  JAMStack architecture and deploying it on Netlify.
                  <br />This is the result.
                  <br />
                  I cannot guarantee that this site will be maintained forever, but
                  for the moment is here as an exercise to explore the advantages of
                  the JAMStack architecture.
                </p>
              </div>


              <div className="mb-8">
                <h4 className="text-lg font-bold mb-2 mt-2">Contributors</h4>
                <p className="mb-2">
                  SWAPI would not be possible without contributions from the
                  following people:
                </p>
                <ul className="mb-2 list-disc list-inside">
                  <li>Paul Hallett</li>
                  <li>Owen Hallett</li>
                  <li>Carvilsi</li>
                  <li>Andrea Stagi</li>
                  <li>Juriy Bura</li>
                  <li>Christian Sarnataro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

AboutPage.propTypes = {
  statistics: PropTypes.object,
};

export default AboutPage;
