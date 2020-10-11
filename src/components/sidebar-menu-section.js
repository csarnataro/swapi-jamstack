import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function getFirstAndLastItemClass(index, length) {
  if (index === 0) {
    return 'rounded-t-lg border-t';
  }
  if (index === length - 1) {
    return 'rounded-b-lg border-b mb-4';
  }
  return '';
}

function SidebarMenuSection({ header, items }) {
  return (
        <>
        <div className='text-lg font-bold my-2'>{header}</div>
        <ul>
            {items.map((item, index) => <li key={item.href}>
                <Link href={item.href}>
                    <a className={`
                        ${getFirstAndLastItemClass(index, items.length)}
                        border-black
                        border-l
                        border-r
                        border-b
                        bg-gray-700
                        p-2
                        w-full
                        block
                    `}>{item.label}</a>
                </Link>
            </li>)}
        </ul>
        </>
  );
}

SidebarMenuSection.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array,
};
export default SidebarMenuSection;
