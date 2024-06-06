import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col items-center">
          <div className="py-6 text-gray-800 dark:text-white">
            © {new Date().getFullYear()} Shop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
