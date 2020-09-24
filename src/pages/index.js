import React from 'react';
import Head from 'next/head';
import Layout from '../components/layouts';
import Header from '../components/header';

function HomePage() {
  return <Layout>
    <Head>
      <title>SWAPI - The Star Wars API</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Header />
  </Layout>;
}

export default HomePage;
