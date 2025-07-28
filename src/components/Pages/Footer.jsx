import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Essay Arrow. All rights reserved.
      </p>
      <p className="text-gray-500 text-xs mt-2">
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms</a>
      </p>
    </footer>
  );
};

export default Footer;
