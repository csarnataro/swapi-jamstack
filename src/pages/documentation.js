import React from 'react';

import Layout from '../components/layout';
import SidebarMenu from '../components/sidebar-menu';
import Code from '../components/code';
import DocumentationResource from '../components/documentaton-resource';

const menu = [
  {
    header: 'Documentation',

    items: [
      { label: 'Introduction', href: '#intro' },
      { label: 'Getting started', href: '#start' },
      { label: 'Base URL', href: '#base' },
      { label: 'Rate limiting', href: '#rate' },
      { label: 'Authentication', href: '#auth' },
      { label: 'JSON Schema', href: '#schema' },
      { label: 'Searching', href: '#search' },
    ],
  },

  {
    header: 'Encodings',

    items: [
      { label: 'JSON', href: '#json' },
      { label: 'Wookiee', href: '#wookie' },
    ],
  },
  {
    header: 'Resources',
    items: [
      { label: 'Root', href: '#root' },
      { label: 'People', href: '#people' },
      { label: 'Films', href: '#films' },
      { label: 'Starships', href: '#starships' },
      { label: 'Vehicles', href: '#vehicles' },
      { label: 'Species', href: '#spcies' },
      { label: 'Planets', href: '#planets' },
    ],
  },
  {
    header: 'Helper libraries',
    items: [
      { label: 'Python', href: '#' },
      { label: 'Javascript', href: '#' },
      { label: 'Android', href: '#' },
      { label: 'Java', href: '#' },
      { label: 'Go', href: '#' },
      { label: 'Ruby', href: '#' },
      { label: 'C#', href: '#' },
      { label: 'Objective C', href: '#' },
      { label: 'Angular', href: '#' },
      { label: 'Angular 2', href: '#' },
      { label: 'R', href: '#' },
      { label: 'F#', href: '#' },
      { label: 'Elixir', href: '#' },
    ],
  },
];

function DocsPage() {
  return (
    <Layout currentPage="documentation">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-no-wrap">
          <SidebarMenu menu={menu} />
          <div className="flex-1 px-4 py-2 m-2">
            <div className="prose max-w-none">
              <h3>Documentation</h3>
              <hr />
              <a name="intro" id="intro" />
              <h4 style={{ marginTop: '0' }}>Introduction</h4>
              <p>
                Welcome to the swapi, the Star Wars API! This documentation
                should help you familiarise yourself with the resources
                available and how to consume them with HTTP requests. If you’re
                after a native helper library then I suggest you scroll down and
                check out what’s available. Read through the getting started
                section before you dive in. Most of your problems should be
                solved just by reading through it.{' '}
              </p>
              <a name="start" id="start"></a>
              <h4>Getting started</h4>
              <p>Let’s make our first API request to the Star Wars API!</p>
              <Code>
                http {process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/planets/1/
              </Code>
              <p>
                We’ll use httpie for our examples as it displays responses
                nicely and gives us a whole lot more useful information. If you
                don’t want to download httpie, just use the curl command
                instead.
              </p>
              <p>
                Here is the response we get:
                <Code>
                  {`HTTP/1.0 200 OK
Content-Type: application/json
{
    "climate": "Arid",
    "diameter": "10465",
    "gravity": "1 standard",
    "name": "Tatooine",
    "orbital_period": "304",
    "population": "200000",
    "residents": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people/1",
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people/2",
        ...
    ],
    "rotation_period": "23",
    "surface_water": "1",
    "terrain": "Dessert",
    "url": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/planets/1"
}`}
                </Code>
              </p>
              <p>
                If your response looks slightly different don’t panic. This is
                probably because more data has been added to swapi since we made
                this documentation.
              </p>
              <a name="intro" id="intro"></a>
              <h4>Base URL</h4>
              <p>
                The Base URL is the root URL for all of the API, if you ever
                make a request to swapi and you get back a 404 NOT FOUND
                response then check the Base URL first.
              </p>
              <p>The Base URL for swapi is:</p>
              <Code>{process.env.NEXT_PUBLIC_API_SERVER_NAME}</Code>
              <p>
                The documentation below assumes you are prepending the Base URL
                to the endpoints in order to make requests.
              </p>
              <a name="rate" id="rate"></a>
              <h4>Rate limiting</h4>
              <p>{'// TODO'}</p>
              <p className="line-through">
                Swapi has rate limiting to prevent malicious abuse (as if anyone
                would abuse Star Wars data!) and to make sure our service can
                handle a potentially large amount of traffic. Rate limiting is
                done via IP address and is currently limited to 10,000 API
                request per day. This is enough to request all the data on the
                website at least ten times over. There should be no reason for
                hitting the rate limit.
              </p>
              <h4>Authentication</h4>
              <p>
                Swapi is a completely open API. No authentication is required to
                query and get data. This also means that we’ve limited what you
                can do to just GET-ing the data. If you find a mistake in the
                data, then tweet the author or email him.
              </p>
              <a name="schema" id="schema"></a>
              <h4>JSON Schema</h4>
              <p>
                All resources support JSON Schema. Making a request to{' '}
                <Code inline>/api/&lt;resource&gt;/schema</Code> will give you
                the details of that resource. This will allow you to
                programmatically inspect the attributes of that resource and
                their types.
              </p>
              <a name="search" id="search"></a>
              <h4>Searching</h4>
              <p>
                All resources support a <Code inline>search</Code> parameter
                that filters the set of resources returned. This allows you to
                make queries like:
                <Code>
                  {process.env.NEXT_PUBLIC_API_SERVER_NAME}
                  /api/people/?search=r2
                </Code>
                All searches will use case-insensitive partial matches on the
                set of search fields. To see the set of search fields for each
                resource, check out the individual resource documentation. For
                more information on advanced search terms see here.
              </p>
              <h3>Encodings</h3>
              <hr />
              <p>
                SWAPI provides two encodings for you to render the data with:
              </p>
              <a name="json" id="json"></a>
              <h4>JSON</h4>
              <p>
                JSON is the standard data format provided by SWAPI by default.
              </p>
              <a name="wookie" id="wookie"></a>
              <h4>Wookiee</h4>
              Wookiee is for our tall hairy allies who speak Wookiee, this
              encoding is identical to JSON except with wookiee translations.
              Using the wookiee renderer is easy, just append{' '}
              <Code inline>?format=wookiee</Code> to your urls:{' '}
              <Code>
                {process.env.NEXT_PUBLIC_API_SERVER_NAME}
                /api/planets/1/?format=wookiee
              </Code>
              <h3>Resources</h3>
              <hr />
              <DocumentationResource
                anchor="root"
                title="Root"
                description="The Root resource provides information on all available
                resources within the API."
                request={`http ${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api`}
                response={`HTTP/1.0 200 OK
Content-Type: application/json
{
    "films": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films",
    "people": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people",
    "planets": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/planets",
    "species": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/species",
    "starships": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/starships",
    "vehicles": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/vehicles"
}`}
                attributes={[
                  {
                    name: 'films',
                    type: 'string',
                    description: 'The URL root for Film resources',
                  },
                  {
                    name: 'people',
                    type: 'string',
                    description: 'The URL root for People resources',
                  },
                  {
                    name: 'planets',
                    type: 'string',
                    description: 'The URL root for Planet resources',
                  },
                  {
                    name: 'species',
                    type: 'string',
                    description: 'The URL root for Species resources',
                  },
                  {
                    name: 'starships',
                    type: 'string',
                    description: 'The URL root for Starships resources',
                  },
                  {
                    name: 'vehicles',
                    type: 'string',
                    description: 'The URL root for Vehicles resources',
                  },
                ]}
              />
              <DocumentationResource
                title="People"
                anchor="people"
                description="A People resource is an individual person or character within
                the Star Wars universe."
                endpoints={[
                  {
                    url: '/people/',
                    description: 'get all the people resources',
                  },
                  {
                    url: '/people/:id',
                    description: 'get a specific people resource',
                  },
                  {
                    url: '/people/schema',
                    description: 'view the JSON schema for this resource',
                  },
                ]}
                request={`http ${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people/1`}
                response={`HTTP/1.0 200 OK
Content-Type: application/json
{
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/1/",
        ...
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/species/1/"
    ],
    "starships": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/starships/12/",
        ...
    ],
    "url": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people/1/",
    "vehicles": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/vehicles/14/"
        ...
    ]
}`}
                attributes={[
                  {
                    name: 'name',
                    type: 'string',
                    description: 'The name of this person.',
                  },
                  {
                    name: 'birth_year',
                    type: 'string',
                    description:
                      'The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.',
                  },
                  {
                    name: 'eye_color',
                    type: 'string',
                    description:
                      'The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.',
                  },
                  {
                    name: 'gender',
                    type: 'string',
                    description:
                      'The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.',
                  },
                  {
                    name: 'hair_color',
                    type: 'string',
                    description:
                      'The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.',
                  },
                  {
                    name: 'height',
                    type: 'string',
                    description: 'The height of the person in centimeters.',
                  },
                  {
                    name: 'mass',
                    type: 'string',
                    description: 'The mass of the person in kilograms.',
                  },
                  {
                    name: 'skin_color',
                    type: 'string',
                    description: 'The skin color of this person.',
                  },
                  {
                    name: 'homeworld',
                    type: 'string',
                    description:
                      'The URL of a planet resource, a planet that this person was born on or inhabits.',
                  },
                  {
                    name: 'films',
                    type: 'array',
                    description:
                      'An array of film resource URLs that this person has been in.',
                  },
                  {
                    name: 'species',
                    type: 'array',
                    description:
                      'An array of species resource URLs that this person belongs to.',
                  },
                  {
                    name: 'starships',
                    type: 'array',
                    description:
                      'An array of starship resource URLs that this person has piloted.',
                  },
                  {
                    name: 'vehicles',
                    type: 'array',
                    description:
                      'An array of vehicle resource URLs that this person has piloted.',
                  },
                  {
                    name: 'url',
                    type: 'string',
                    description: 'the hypermedia URL of this resource.',
                  },
                  {
                    name: 'created',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was created.',
                  },
                  {
                    name: 'edited',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was edited.',
                  },
                ]}
                searchFields={[{ name: 'name' }]}
              />
              <DocumentationResource
                title="Films"
                anchor="films"
                request={`http ${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/1`}
                description="A Film resource is a single film."
                endpoints={[
                  {
                    url: '/films',
                    description: 'get all the film resources',
                  },
                  {
                    url: '/films/:id',
                    description: 'get a specific film resource',
                  },
                  {
                    url: '/films/schema',
                    description: 'view the JSON schema for this resource',
                  },
                ]}
                attributes={[
                  {
                    name: 'title',
                    type: 'string',
                    description: 'The title of this film',
                  },
                  {
                    name: 'episode_id',
                    type: 'integer',
                    description: 'The episode number of this film.',
                  },
                  {
                    name: 'opening_crawl',
                    type: 'string',
                    description:
                      'The opening paragraphs at the beginning of this film.',
                  },
                  {
                    name: 'director',
                    type: 'string',
                    description: 'The name of the director of this film.',
                  },
                  {
                    name: 'producer',
                    type: 'string',
                    description:
                      'The name(s) of the producer(s) of this film. Comma separated.',
                  },
                  {
                    name: 'release_date',
                    type: 'date',
                    description:
                      'The ISO 8601 date format of film release at original creator country.',
                  },
                  {
                    name: 'species',
                    type: 'array',
                    description:
                      'An array of species resource URLs that are in this film.',
                  },
                  {
                    name: 'starships',
                    type: 'array',
                    description:
                      'An array of starship resource URLs that are in this film.',
                  },
                  {
                    name: 'vehicles',
                    type: 'array',
                    description:
                      'An array of vehicle resource URLs that are in this film.',
                  },
                  {
                    name: 'characters',
                    type: 'array',
                    description:
                      'An array of people resource URLs that are in this film.',
                  },
                  {
                    name: 'planets',
                    type: 'array',
                    description:
                      'An array of planet resource URLs that are in this film.',
                  },
                  {
                    name: 'url',
                    type: 'string',
                    description: 'the hypermedia URL of this resource.',
                  },
                  {
                    name: 'created',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was created.',
                  },
                  {
                    name: 'edited',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was edited.',
                  },
                ]}
                searchFields={[
                  {
                    name: 'title',
                  },
                ]}
                response={`HTTP/1.0 200 OK
Content-Type: application/json
{
    "characters": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people/1/",
        ...
    ],
    "created": "2014-12-10T14:23:31.880000Z",
    "director": "George Lucas",
    "edited": "2014-12-12T11:24:39.858000Z",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\\n\\n
    Rebel spaceships, striking\\n\\n
    from a hidden base, have won\\n\\n
    their first victory against\\n\\n
    the evil Galactic Empire.\\n\\n
    \\n\\n
    During the battle, Rebel\\n\\n
    spies managed to steal secret\\n\\n
    plans to the Empire's\\n\\n
    ultimate weapon, the DEATH\\n\\n
    STAR, an armored space\\n\\n
    station with enough power\\n\\n
    to destroy an entire planet.\\n\\n
    \\n\\n
    Pursued by the Empire's\\n\\n
    sinister agents, Princess\\n\\n
    Leia races home aboard her\\n\\n
    starship, custodian of the\\n\\n
    stolen plans that can save her\\n\\n
    people and restore\\n\\n
    freedom to the galaxy....",
    "planets": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/planets/1/",
        ...
    ],
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "species": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/species/1/",
        ...
    ],
    "starships": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/starships/2/",
        ...
    ],
    "title": "A New Hope",
    "url": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/1/",
    "vehicles": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/vehicles/4/",
        ...
    ]
}
                `}
              />
              <DocumentationResource
                title="Starships"
                anchor="starships"
                description="A Starship resource is a single transport craft that has
                hyperdrive capability."
                endpoints={[
                  {
                    url: 'starships',
                    description: 'get all the starship resources',
                  },
                  {
                    url: '/starships/:id',
                    description: 'get a specific starship resource',
                  },
                  {
                    url: '/starships/schema',
                    description: 'view the JSON schema for this resource',
                  },
                ]}
                request={`http ${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/starships/9`}
                response={`HTTP/1.0 200 OK
Content-Type: application/json
{
    "MGLT": "10 MGLT",
    "cargo_capacity": "1000000000000",
    "consumables": "3 years",
    "cost_in_credits": "1000000000000",
    "created": "2014-12-10T16:36:50.509000Z",
    "crew": "342953",
    "edited": "2014-12-10T16:36:50.509000Z",
    "hyperdrive_rating": "4.0",
    "length": "120000",
    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
    "max_atmosphering_speed": "n/a",
    "model": "DS-1 Orbital Battle Station",
    "name": "Death Star",
    "passengers": "843342",
    "films": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/1/"
    ],
    "pilots": [],
    "starship_class": "Deep Space Mobile Battlestation",
    "url": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/starships/9/"
}`}
                attributes={[
                  {
                    name: 'name',
                    type: 'string',
                    description:
                      'The name of this starship. The common name, such as "Death Star".',
                  },
                  {
                    name: 'model',
                    type: 'string',
                    description:
                      'The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".',
                  },
                  {
                    name: 'starship_class',
                    type: 'string',
                    description:
                      'The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"',
                  },
                  {
                    name: 'manufacturer',
                    type: 'string',
                    description:
                      'The manufacturer of this starship. Comma separated if more than one.',
                  },
                  {
                    name: 'cost_in_credits',
                    type: 'string',
                    description:
                      'The cost of this starship new, in galactic credits.',
                  },
                  {
                    name: 'length',
                    type: 'string',
                    description: 'The length of this starship in meters.',
                  },
                  {
                    name: 'crew',
                    type: 'string',
                    description:
                      'The number of personnel needed to run or pilot this starship.',
                  },
                  {
                    name: 'passengers',
                    type: 'string',
                    description:
                      'The number of non-essential people this starship can transport.',
                  },
                  {
                    name: 'max_atmosphering_speed',
                    type: 'string',
                    description:
                      'The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.',
                  },
                  {
                    name: 'hyperdrive_rating',
                    type: 'string',
                    description: 'The class of this starships hyperdrive.',
                  },
                  {
                    name: 'MGLT',
                    type: 'string',
                    description:
                      'The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.',
                  },
                  {
                    name: 'cargo_capacity',
                    type: 'string',
                    description:
                      'The maximum number of kilograms that this starship can transport.',
                  },
                  {
                    name: 'consumables',
                    type: 'string',
                    description:
                      'The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.',
                  },
                  {
                    name: 'films',
                    type: 'array',
                    description:
                      'An array of Film URL Resources that this starship has appeared in.',
                  },
                  {
                    name: 'pilots',
                    type: 'array',
                    description:
                      'An array of People URL Resources that this starship has been piloted by.',
                  },
                  {
                    name: 'url',
                    type: 'string',
                    description: 'the hypermedia URL of this resource.',
                  },
                  {
                    name: 'created',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was created.',
                  },
                  {
                    name: 'edited',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was edited.',
                  },
                ]}
                searchFields={[{ name: 'name' }, { name: 'model' }]}
              />
              <DocumentationResource
                anchor="vehicles"
                title="Vehicles"
                description="A Vehicle resource is a single transport craft that does not have hyperdrive capability."
                endpoints={[
                  {
                    url: 'vehicles',
                    description: 'get all the vehicle resources',
                  },
                  {
                    url: '/vehicles/:id',
                    description: 'get a specific vehicle resource',
                  },
                  {
                    url: '/vehicles/schema',
                    description: 'view the JSON schema for this resource',
                  },
                ]}
                request={`http ${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/vehicles/4`}
                response={`HTTP/1.0 200 OK
Content-Type: application/json
{
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "cost_in_credits": "150000",
    "created": "2014-12-10T15:36:25.724000Z",
    "crew": "46",
    "edited": "2014-12-10T15:36:25.724000Z",
    "length": "36.8",
    "manufacturer": "Corellia Mining Corporation",
    "max_atmosphering_speed": "30",
    "model": "Digger Crawler",
    "name": "Sand Crawler",
    "passengers": "30",
    "pilots": [],
    "films": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/1/"
    ],
    "url": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/vehicles/4/",
    "vehicle_class": "wheeled"
}`}
                attributes={[
                  {
                    name: 'name',
                    type: 'string',
                    description:
                      'The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".',
                  },
                  {
                    name: 'model',
                    type: 'string',
                    description:
                      'The model or official name of this vehicle. Such as "All-Terrain Attack Transport".',
                  },
                  {
                    name: 'vehicle_class',
                    type: 'string',
                    description:
                      'The class of this vehicle, such as "Wheeled" or "Repulsorcraft".',
                  },
                  {
                    name: 'manufacturer',
                    type: 'string',
                    description:
                      'The manufacturer of this vehicle. Comma separated if more than one.',
                  },
                  {
                    name: 'length',
                    type: 'string',
                    description: 'The length of this vehicle in meters.',
                  },
                  {
                    name: 'cost_in_credits',
                    type: 'string',
                    description:
                      'The cost of this vehicle new, in Galactic Credits.',
                  },
                  {
                    name: 'crew',
                    type: 'string',
                    description:
                      'The number of personnel needed to run or pilot this vehicle.',
                  },
                  {
                    name: 'passengers',
                    type: 'string',
                    description:
                      'The number of non-essential people this vehicle can transport.',
                  },
                  {
                    name: 'max_atmosphering_speed',
                    type: 'string',
                    description:
                      'The maximum speed of this vehicle in the atmosphere.',
                  },
                  {
                    name: 'cargo_capacity',
                    type: 'string',
                    description:
                      'The maximum number of kilograms that this vehicle can transport.',
                  },
                  {
                    name: 'consumables',
                    type: 'string',
                    description:
                      'The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.',
                  },
                  {
                    name: 'films',
                    type: 'array',
                    description:
                      'An array of Film URL Resources that this vehicle has appeared in.',
                  },
                  {
                    name: 'pilots',
                    type: 'array',
                    description:
                      'An array of People URL Resources that this vehicle has been piloted by.',
                  },
                  {
                    name: 'url',
                    type: 'string',
                    description: 'the hypermedia URL of this resource.',
                  },
                  {
                    name: 'created',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was created.',
                  },
                  {
                    name: 'edited',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was edited.',
                  },
                ]}
                searchFields={[{ name: 'name' }, { name: 'model' }]}
              />
              <DocumentationResource
                anchor="species"
                title="Species"
                description="A Species resource is a type of person or character within the Star Wars Universe."
                endpoints={[
                  {
                    url: '/species',
                    description: 'get all the species resources',
                  },
                  {
                    url: '/species/:id',
                    description: 'get a specific species resource',
                  },
                  {
                    url: '/species/schema',
                    description: 'view the JSON schema for this resource',
                  },
                ]}
                request={`http ${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/species/3`}
                response={`HTTP/1.0 200 OK
Content-Type: application/json

{
    "average_height": "2.1",
    "average_lifespan": "400",
    "classification": "Mammal",
    "created": "2014-12-10T16:44:31.486000Z",
    "designation": "Sentient",
    "edited": "2014-12-10T16:44:31.486000Z",
    "eye_colors": "blue, green, yellow, brown, golden, red",
    "hair_colors": "black, brown",
    "homeworld": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/planets/14/",
    "language": "Shyriiwook",
    "name": "Wookie",
    "people": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people/13/"
    ],
    "films": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/1/",
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/2/"
    ],
    "skin_colors": "gray",
    "url": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/species/3/"
}`}
                attributes={[
                  {
                    name: 'name',
                    type: 'string',
                    description: 'The name of this species.',
                  },
                  {
                    name: 'classification',
                    type: 'string',
                    description:
                      'The classification of this species, such as "mammal" or "reptile".',
                  },
                  {
                    name: 'designation',
                    type: 'string',
                    description:
                      'The designation of this species, such as "sentient".',
                  },
                  {
                    name: 'average_height',
                    type: 'string',
                    description:
                      'The average height of this species in centimeters.',
                  },
                  {
                    name: 'average_lifespan',
                    type: 'string',
                    description:
                      'The average lifespan of this species in years.',
                  },
                  {
                    name: 'eye_colors',
                    type: 'string',
                    description:
                      'A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.',
                  },
                  {
                    name: 'hair_colors',
                    type: 'string',
                    description:
                      'A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.',
                  },
                  {
                    name: 'skin_colors',
                    type: 'string',
                    description:
                      'A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.',
                  },
                  {
                    name: 'language',
                    type: 'string',
                    description:
                      'The language commonly spoken by this species.',
                  },
                  {
                    name: 'homeworld',
                    type: 'string',
                    description:
                      'The URL of a planet resource, a planet that this species originates from.',
                  },
                  {
                    name: 'people',
                    type: 'array',
                    description:
                      'An array of People URL Resources that are a part of this species.',
                  },
                  {
                    name: 'films',
                    type: 'array',
                    description:
                      'An array of Film URL Resources that this species has appeared in.',
                  },
                  {
                    name: 'url',
                    type: 'string',
                    description: 'the hypermedia URL of this resource.',
                  },
                  {
                    name: 'created',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was created.',
                  },
                  {
                    name: 'edited',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was edited.',
                  },
                ]}
                searchFields={[{ name: 'name' }]}
              />
              <DocumentationResource
                anchor="planets"
                title="Planets"
                description="A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY."
                endpoints={[
                  {
                    url: '/planets',
                    description: 'get all the planets resources',
                  },
                  {
                    url: '/planets/:id',
                    description: 'get a specific planets resource',
                  },
                  {
                    url: '/planets/schema',
                    description: 'view the JSON schema for this resource',
                  },
                ]}
                request={`http ${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/planets/1`}
                response={`HTTP/1.0 200 OK
Content-Type: application/json

{
    "climate": "Arid",
    "created": "2014-12-09T13:50:49.641000Z",
    "diameter": "10465",
    "edited": "2014-12-15T13:48:16.167217Z",
    "films": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/films/1/",
        ...
    ],
    "gravity": "1",
    "name": "Tatooine",
    "orbital_period": "304",
    "population": "120000",
    "residents": [
        "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/people/1/",
        ...
    ],
    "rotation_period": "23",
    "surface_water": "1",
    "terrain": "Dessert",
    "url": "${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/planets/1/"
}`}
                attributes={[
                  {
                    name: 'name',
                    type: 'string',
                    description: 'The name of this planet.',
                  },
                  {
                    name: 'diameter',
                    type: 'string',
                    description: 'The diameter of this planet in kilometers.',
                  },
                  {
                    name: 'rotation_period',
                    type: 'string',
                    description:
                      'The number of standard hours it takes for this planet to complete a single rotation on its axis.',
                  },
                  {
                    name: 'orbital_period',
                    type: 'string',
                    description:
                      'The number of standard days it takes for this planet to complete a single orbit of its local star.',
                  },
                  {
                    name: 'gravity',
                    type: 'string',
                    description:
                      'A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.',
                  },
                  {
                    name: 'population',
                    type: 'string',
                    description:
                      'The average population of sentient beings inhabiting this planet.',
                  },
                  {
                    name: 'climate',
                    type: 'string',
                    description:
                      'The climate of this planet. Comma separated if diverse.',
                  },
                  {
                    name: 'terrain',
                    type: 'string',
                    description:
                      'The terrain of this planet. Comma separated if diverse.',
                  },
                  {
                    name: 'surface_water',
                    type: 'string',
                    description:
                      'The percentage of the planet surface that is naturally occurring water or bodies of water.',
                  },
                  {
                    name: 'residents',
                    type: 'array',
                    description:
                      'An array of People URL Resources that live on this planet.',
                  },
                  {
                    name: 'films',
                    type: 'array',
                    description:
                      'An array of Film URL Resources that this planet has appeared in.',
                  },
                  {
                    name: 'url',
                    type: 'string',
                    description: 'the hypermedia URL of this resource.',
                  },
                  {
                    name: 'created',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was created.',
                  },
                  {
                    name: 'edited',
                    type: 'string',
                    description:
                      'the ISO 8601 date format of the time that this resource was edited.',
                  },
                ]}
                searchFields={[{ name: 'name' }]}
              />
              <h3>Helper libraries</h3>
              <p>
                There are a bunch of helper libraries available for consuming
                the Star Wars API in a native programming language.
                <img
                  src="https://i.imgur.com/l02u363.gif"
                  alt="helper_library_gif"
                ></img>
              </p>
              <p>
                <a name="python"></a>
              </p>
              <h4>Python</h4>
              <ul>
                <li>
                  <a href="https://github.com/phalt/swapi-python">
                    swapi-python
                  </a>{' '}
                  is built by the author of swapi, Paul Hallett.
                </li>
              </ul>
              <p>
                <a name="javascript"></a>
              </p>
              <h4>Javascript</h4>
              <ul>
                <li>
                  <a href="https://github.com/cfjedimaster/SWAPI-Wrapper">
                    SWAPI-Wrapper
                  </a>{' '}
                  By{' '}
                  <a href="https://github.com/cfjedimaster">Raymond Camden</a>.
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/swapi-node">
                    swapi-node
                  </a>{' '}
                  by <a href="https://github.com/lholmquist">Lucas Holmquist</a>
                  .
                </li>
              </ul>
              <p>
                <a name="android"></a>
              </p>
              <h4>Android</h4>
              <ul>
                <li>
                  <a href="https://github.com/Oleur/SWAPI-Android-SDK">
                    SWAPI-Android-SDK
                  </a>{' '}
                  by <a href="https://github.com/Oleur">Julien Salvi</a>.
                </li>
              </ul>
              <p>
                <a name="java"></a>
              </p>
              <h4>Java</h4>
              <ul>
                <li>
                  <a href="https://github.com/maartendekker1998/StarWarsAPI">
                    SWAPI
                  </a>{' '}
                  by{' '}
                  <a href="https://github.com/maartendekker1998">
                    Maarten Dekker
                  </a>
                  .
                </li>
              </ul>
              <p>
                <a name="golang"></a>
              </p>
              <h4>Go</h4>
              <ul>
                <li>
                  <a href="https://github.com/peterhellberg/swapi">swapi-go</a>{' '}
                  by{' '}
                  <a href="https://github.com/peterhellberg">Peter Hellberg</a>.
                </li>
                <li>
                  <a href="https://github.com/leejarvis/swapi">swapi</a> by{' '}
                  <a href="https://github.com/leejarvis">Lee Jarvis</a>.
                </li>
              </ul>
              <p>
                <a name="php"></a>
              </p>
              <h4>PHP</h4>
              <ul>
                <li>
                  <a href="https://github.com/DraperStudio/Coruscant">
                    Coruscant
                  </a>{' '}
                  by <a href="https://github.com/DraperStudio">DraperStudio</a>.
                </li>
                <li>
                  <a href="https://github.com/rmasters/swapi-php">swapi-php</a>{' '}
                  by <a href="https://github.com/rmasters">Ross Masters</a>.
                </li>
              </ul>
              <p>
                <a name="ruby"></a>
              </p>
              <h4>Ruby</h4>
              <ul>
                <li>
                  <a href="https://github.com/emaraschio/swapi-ruby">
                    swapi-ruby
                  </a>{' '}
                  by{' '}
                  <a href="https://github.com/emaraschio">Ezequiel Maraschio</a>
                  .
                </li>
                <li>
                  <a href="https://github.com/philnash/tatooine">Tatooine</a> by{' '}
                  <a href="https://github.com/philnash">Phil Nash</a>.
                </li>
                <li>
                  <a href="https://github.com/igordcsouza/swgem">swgem</a> by{' '}
                  <a href="https://github.com/igordcsouza">Igor Souza</a>.
                </li>
              </ul>
              <p>
                <a name="csharp"></a>
              </p>
              <h4>C Sharp</h4>
              <ul>
                <li>
                  <a href="https://github.com/olcay/SharpTrooper">
                    SharpTrooper
                  </a>{' '}
                  by <a href="https://github.com/olcay">Olcay Bayram</a>.
                </li>
                <li>
                  <a href="https://github.com/M-Yankov/SWapi-CSharp">
                    SWapiCSharp
                  </a>{' '}
                  by <a href="https://github.com/M-Yankov/">M-Yankov</a>
                </li>
              </ul>
              <p>
                <a name="objc"></a>
              </p>
              <h4>Objective C</h4>
              <ul>
                <li>
                  <a href="https://github.com/njdehoog/Falcon">Falcon</a> by{' '}
                  <a href="https://github.com/njdehoog">Niels de Hoog</a>.
                </li>
              </ul>
              <p>
                <a name="angular"></a>
              </p>
              <h4>Angular</h4>
              <ul>
                <li>
                  <a href="https://github.com/unshift-devs/xyz-angular-swapi">
                    xyz-angular-swapi
                  </a>{' '}
                  by <a href="https://github.com/cef62">Matteo Ronchi</a>.
                </li>
                <li>
                  <a href="https://github.com/nickescallon/ne-swapi">
                    ne-swapi
                  </a>{' '}
                  by <a href="https://github.com/nickescallon">Nick Escallon</a>
                  .
                </li>
              </ul>
              <p>
                <a name="angular2"></a>
              </p>
              <h4>Angular 2</h4>
              <ul>
                <li>
                  <a href="https://github.com/giammaleoni/ng2-swapi">
                    ng2-swapi
                  </a>{' '}
                  by{' '}
                  <a href="https://github.com/giammaleoni">Gianmaria Leoni</a>.
                </li>
              </ul>
              <p>
                <a name="r"></a>
              </p>
              <h4>R</h4>
              <ul>
                <li>
                  <a href="https://github.com/Ironholds/rwars">rwars</a> by{' '}
                  <a href="https://github.com/ironholds">Oliver Keyes</a>.
                </li>
              </ul>
              <p>
                <a name="fsharp"></a>
              </p>
              <h4>F#</h4>
              <ul>
                <li>
                  <a href="https://github.com/evelinag/fsharp-swapi">
                    fsharp-swapi
                  </a>{' '}
                  by <a href="http://evelinag.com/">Evelina Gabasova</a>.
                </li>
              </ul>
              <h4>Elixir</h4>
              <ul>
                <li>
                  <a href="https://github.com/twhitacre/swapi.ex">swapi.ex</a>{' '}
                  by <a href="http://timw.co/">Tim Whitacre</a>.
                </li>
                <li>
                  <a href="https://github.com/mrkjlchvz/ex_swapi">ex_swapi</a>{' '}
                  by <a href="http://markjoelchavez.com">Mark Chavez</a>.
                </li>
                <li>
                  <a href="https://github.com/kylesurowiec/swapi-elixir">
                    elixir-swapi
                  </a>{' '}
                  by <a href="https://github.com/kylesurowiec">Kyle Surowiec</a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DocsPage;
