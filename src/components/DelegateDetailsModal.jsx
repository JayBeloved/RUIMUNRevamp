
import React from 'react';

const DelegateDetailsModal = ({ delegate, onClose }) => {
  if (!delegate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-5xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Delegate Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 text-gray-700">
          {Object.entries(delegate).map(([key, value]) => (
            <div key={key} className="border-b border-gray-200 py-2">
              <strong className="text-gray-900 capitalize">{key.replace(/_/g, ' ')}:</strong> {String(value)}
            </div>
          ))}
        </div>
        <div className="text-right mt-8">
          <button onClick={onClose} className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelegateDetailsModal;
