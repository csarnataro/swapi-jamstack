import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function RequestBox({ initialCode }) {
  const [code, setCode] = useState();
  const [currentRequest, setCurrentRequest] = useState('');

  useEffect(() => {
    setCode(initialCode);
  }, []);
  // executed at runtime
  async function showCode(resource) {
    try {
      const fullUrl = `${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/${resource}`;
      // eslint-disable-next-line no-undef
      const res = await fetch(fullUrl);
      const newCode = await res.json();
      setCode(JSON.stringify(newCode, null, 2));
      setCurrentRequest(resource);
    } catch (error) {
      console.dir(error);
      console.error('Error: ', error.message);
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl pb-4">Try it now!</h1>
      <div className="inline-flex w-full">
        <span className="bg-gray-700 text-white text-sm lg:text-base lg:font-bold py-2 pr-2 pl-4 rounded-l">
          {`${process.env.NEXT_PUBLIC_API_SERVER_NAME}/api/`}
        </span>
        <input
          type="text"
          id="api"
          className="flex-grow py-2 px-1 text-gray-900"
          placeholder="people/1"
          onChange={(e) => setCurrentRequest(e.target.value)}
          value={currentRequest}
        />
        <button
          onClick={() => showCode(currentRequest)}
          className="bg-gray-900 hover:bg-gray-700 text-white text-sm lg:text-base lg:font-bold py-2 px-4 rounded-r">
          request
        </button>
      </div>

      <small>
        Need a hint? try{' '}
        <button
          onClick={() => showCode('people/1')}
          className="underline italic font-bold"
        >
          people/1
        </button>
        {' or '}
        <button
          onClick={() => showCode('planets/3')}
          className="underline italic font-bold"
        >
          planets/3
        </button>
        {' or '}
        <button
          onClick={() => showCode('starships/9')}
          className="underline italic font-bold"
        >
          starships/9
        </button>
      </small>
      <p className="text-xl mt-8">Result:</p>
      <div>
        <div className="relative overflow-hidden mb-8">
          <div className="rounded overflow-hidden border border-gray-400 p-4">
            <div className="overscroll-auto overflow-auto h-64 bg-gray-300 text-gray-700 p-4">
              <output role="result" htmlFor="api" className="overscroll-auto text-sm whitespace-pre font-mono">
                {code}
              </output>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RequestBox.propTypes = {
  initialCode: PropTypes.string,
};

export default RequestBox;
