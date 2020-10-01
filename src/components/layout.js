import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './navigation';
import Header from './header';
import Footer from './footer';

function Layout({ currentPage, children }) {
  return (
    <>
      <Navigation currentPage={currentPage} />
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  currentPage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
