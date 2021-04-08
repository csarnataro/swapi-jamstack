import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './navigation-item';

function Navigation({ currentPage }) {
  const [open, setOpen] = useState(false);

  return (

    <div className={`${open ? 'bg-white' : 'bg-gray-800'} border-gray-900 border-b transition duration-500 w-full  text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800`}>
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <div className="tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            <div className={`${open ? 'text-gray-900' : 'text-yellow-400'} text-xl font-bold py-1`}>SWAPI</div>
          </div>
          <button className={`${open ? 'text-gray-900' : 'text-yellow-400'} md:hidden rounded-lg focus:outline-none focus:shadow-outline`} onClick={() => setOpen(!open)}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path style={{ display: open ? 'none' : 'inherit' }} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              <path style={{ display: open ? 'inherit' : 'none' }} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <nav className={`${open ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:flex-row sm:items-stretch sm:justify-start`}>
          <NavigationItem
            href="/"
            alt="Link to home page"
            isActive={currentPage === 'index'}
          >
            Home
          </NavigationItem>
          <NavigationItem
            href="/about"
            alt="Link to about page"
            isActive={currentPage === 'about'}
          >
            About
          </NavigationItem>
          <NavigationItem
            href="/documentation"
            alt="Link to documentation page"
            isActive={currentPage === 'documentation'}
          >
            Documentation
          </NavigationItem>
        </nav>
      </div>
    </div>


  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string,
};

export default Navigation;
