import React from 'react';
import PropTypes from 'prop-types';
import SidebarMenuSection from './sidebar-menu-section';

/* menu is in the form:
 * menu = [
    {
      header: 'Get started',
      items: {
        label: 'First lesson'
        href: '#first-lesson' // or href:'https://example.com/'
      }
    },
    {
      header: 'Get started',
      items: {
        label: 'First lesson'
        href: '#first-lesson' // or href:'https://example.com/'
      }
    }
  ]
 *
 */

function SidebarMenu({ menu }) {
  return (
        <nav className='px-4 py-4 md:w-64'>
          {menu.map((section) => <SidebarMenuSection
            key={section.header}
            header={section.header}
            items={section.items}
          />)}
        </nav>
  );
}

SidebarMenu.propTypes = {
  menu: PropTypes.array,
};
export default SidebarMenu;
