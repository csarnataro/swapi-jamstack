import React from 'react';
import PropTypes from 'prop-types';

function ExternalLink({ href, label }) {
  return (<>
    {' '}
    <a href={href} rel="noreferrer" target="_blank">
      {label || href}
    </a>
    {' '}
  </>);
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default ExternalLink;
