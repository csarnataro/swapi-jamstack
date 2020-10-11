import React from 'react';
import PropTypes from 'prop-types';

function Code({ inline, children }) {
  const inlineCssClassName = inline
    ? 'inline'
    : 'block text-sm border p-2 bg-gray-200 mt-2 mb-2 text-gray-900';

  // need to override tailwind typography defaults
  const inlineStyle = inline
    ? { padding: '2px 4px', color: '#c7254e' }
    : {};
  return (
    <pre style={inlineStyle} className={`${inlineCssClassName} `}>
      <code>{children}</code>
    </pre>
  );
}

Code.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Code.defaultProps = {
  inline: false,
};

export default Code;
