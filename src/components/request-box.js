import React from 'react';

function RequestBox() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl pb-4">Try it now!</h1>
      <div className="inline-flex w-full">
        <span className="bg-gray-700 text-white text-sm lg:text-base lg:font-bold py-2 pr-2 pl-4 rounded-l">
          https://swapi.dev/api/
        </span>
        <input
          type="text"
          className="w-full py-2 px-1"
          placeholder="people/1/"
        />
        <button className="bg-gray-900 hover:bg-gray-700 text-white text-sm lg:text-base lg:font-bold py-2 px-4 rounded-r">
          request
        </button>
      </div>

      <small>
        Need a hint? try{' '}
        <a href="#">
          <i>people/1/</i>
        </a>{' '}
        or{' '}
        <a href="#">
          <i>planets/3/</i>
        </a>{' '}
        or{' '}
        <a href="#">
          <i>starships/9/</i>
        </a>
      </small>
      <p className="text-xl mt-8">Result:</p>
      <div>
        <div className="relative overflow-hidden mb-8">
          <div className="rounded overflow-hidden border border-gray-400 p-4">
            <div className="overscroll-auto overflow-auto h-64 bg-gray-300 text-gray-700 p-4">
              <pre className="overscroll-auto text-sm">
                {`{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/6/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/7/"
    ],
    "species": [
        "https://swapi.dev/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestBox;
