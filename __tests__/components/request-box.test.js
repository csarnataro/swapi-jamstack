import React from 'react';

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import fetch from 'jest-fetch-mock';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RequestBox from '../../src/components/request-box';

process.env.NEXT_PUBLIC_API_SERVER_NAME = 'http://localhost:4000';

fetch.enableMocks();
// const server = setupServer(
//   rest.get('http://localhost:4000/api/people/1', (req, res, ctx) => {
//     console.log('received request');
//     return res(ctx.json({ edited: 'now' }));
//   }),
// );

beforeAll(() => {
  fetch.mockIf(/^.*\/api\/.*$/, (req) => {
    if (req.url.endsWith('/people/1')) {
      return Promise.resolve(JSON.stringify({ name: 'Luke Skywalker' }));
    } if (req.url.endsWith('/planets/3')) {
      return Promise.resolve(JSON.stringify({
        name: 'Yavin IV',
      }));
    }
    return Promise.reject(new Error('bad url'));
  });
});

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test('loads and displays initial text', async () => {
  render(<RequestBox initialCode={'hello world'} />);

  const resultBox = screen.getByRole('result');

  expect(resultBox).toHaveTextContent('hello world');
});

test('fetches and display people/1', async () => {
  render(<RequestBox initialCode="whatever" />);

  fireEvent.click(screen.getByText('people/1'));

  const resultBox = screen.getByRole('result');
  await waitFor(() => resultBox);

  expect(resultBox).toHaveTextContent('{ "name": "Luke Skywalker" }');
});

test('fetches and display planets/3', async () => {
  render(<RequestBox initialCode="whatever" />);

  fireEvent.click(screen.getByText('planets/3'));

  const resultBox = screen.getByRole('result');
  await waitFor(() => resultBox);

  expect(resultBox).toHaveTextContent('{ "name": "Yavin IV" }');
});
