import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const activeClass = 'bg-gray-200 md:bg-gray-900 focus:bg-gray-700';
const inactiveClass = 'hover:text-white hover:bg-gray-700 focus:bg-gray-700';

function NavigationItem({
  children, href, alt, isActive,
}) {
  return (
    <Link href={href}
        alt={alt}
        className={`${
          isActive ? activeClass : inactiveClass
        } px-3 py-2 no-underline md:underline text-gray-800 md:text-white rounded-md text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out`}
      >
        {children}
    </Link>
  );
}

NavigationItem.propTypes = {
  href: PropTypes.string,
  alt: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default NavigationItem;
