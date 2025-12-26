import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
        RUIMUN Has Moved!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
        We have a new and improved home.
      </p>
      <a
        href="https://ruimunconference.online"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-opacity-80 text-white font-bold py-4 px-10 rounded-full transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline text-xl md:text-2xl"
      >
        Visit Our New Site
      </a>
    </div>
  );
};

export default HomePage;
