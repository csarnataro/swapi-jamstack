import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './navigation-item';

function Navigation({ currentPage }) {
  return (
    <div className="bg-gray-800 border-gray-900 border-b">
      <nav className="bg-gray-800 container mx-auto">
        <div className="max-w-7xl">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                {/* <!-- Icon when menu is closed. --> */}
                {/* <!--
                Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Icon when menu is open. --> */}
                {/* <!--
                Menu open: "block", Menu closed: "hidden"
              --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <div className="container mx-auto text-center text-yellow-400">
                  <div className="text-xl font-bold py-1">SWAPI</div>
                </div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Team
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string,
};

export default Navigation;
