import React from 'react';
import { Link } from 'react-router-dom';

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 dark:bg-gray-900 text-center p-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">Under Construction</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          The admin dashboard is currently undergoing essential updates to improve your experience. It will be back online shortly.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          We apologize for any inconvenience and appreciate your patience.
        </p>
        <div className="mt-8">
          <Link to="/" className="bg-primary hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
    return <MaintenancePage />;
};

export default Dashboard;
