import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Navigation from './navigation';
import Header from './header';
import Footer from './footer';


function Layout({ currentPage, seoTitle = '', children }) {
  return (
    <>
      <Head>
        <title>SWAPI - The Star Wars API {seoTitle ? ` - ${seoTitle}` : ''}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon"
          type="image/x-icon"
          href="favicon.ico" />
      </Head>

      <Navigation currentPage={currentPage} />
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  seoTitle: '',
};

Layout.propTypes = {
  currentPage: PropTypes.string,
  seoTitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
