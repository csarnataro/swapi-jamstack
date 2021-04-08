import React from 'react';

function Footer() {
  return (
    <div className="py-4 max-w-7xl border-gray-900 border-t">
      <div className="container mx-auto px-2">
        Originally created by Paul Hallett in 2015.
        Maintained by Christian Sarnataro
        &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
