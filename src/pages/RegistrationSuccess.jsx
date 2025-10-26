import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { siteConfig } from '../config/site';

const RegistrationSuccess = () => {
  const [searchParams] = useSearchParams();
  const [registration, setRegistration] = useState(null);
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
      const currentRegistration = registrations.find(r => r.id === id);
      setRegistration(currentRegistration);
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearchAttempted(true);
    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    const found = registrations.find(r => r.email.toLowerCase() === searchEmail.toLowerCase() && r.phone === searchPhone);
    setSearchResult(found || null);
  };

  const renderRegistrationDetails = (data) => (
    <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-xl p-6 md:p-8 mt-6 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Registration Details</h2>
        <p className="text-gray-600 dark:text-gray-400">Your delegate profile for {siteConfig.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Personal Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-secondary border-b-2 border-secondary/20 pb-2 mb-4">👤 Personal Information</h3>
          <p className="text-white mb-2"><strong>Name:</strong> {data.name}</p>
          <p className="text-white mb-2"><strong>Email:</strong> {data.email}</p>
          <p className="text-white mb-2"><strong>Phone:</strong> {data.phone}</p>
          <p className="text-white mb-2"><strong>Gender:</strong> {data.gender}</p>
          <p className="text-white mb-2"><strong>Delegate Type:</strong> <span className="text-white font-semibold text-accent">{data.delegate_type}</span></p>
        </div>

        {/* Affiliation Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-secondary border-b-2 border-secondary/20 pb-2 mb-4">🎓 Affiliation</h3>
          <p className="text-white mb-2"><strong>Affiliation:</strong> {data.affiliation}</p>
          <p className="text-white mb-2"><strong>Position:</strong> {data.position}</p>
          <p className="text-white mb-2"><strong>Department:</strong> {data.department}</p>
          <p className="text-white mb-2"><strong>Matric Number:</strong> {data.matric_num}</p>
        </div>
        
        {/* Committee Choices */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold text-secondary border-b-2 border-secondary/20 pb-2 mb-4">🌍 Committee Choices</h3>
          <p className="text-white mb-2"><strong>1st:</strong> {data.committee1} - {data.country1}</p>
          <p className="text-white mb-2"><strong>2nd:</strong> {data.committee2} - {data.country2}</p>
          <p className="text-white mb-2"><strong>3rd:</strong> {data.committee3} - {data.country3}</p>
        </div>

        {/* Other Details */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow lg:col-span-2">
          <h3 className="text-xl font-bold text-secondary border-b-2 border-secondary/20 pb-2 mb-4">📋 Other Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p className="text-white mb-2"><strong>T-Shirt Size:</strong> {data.tshirt_size.toUpperCase()}</p>
              <p className="text-white mb-2"><strong>Experience:</strong> {data.mun_experience}</p>
              <p className="text-white mb-2"><strong>Advert Source:</strong> {data.advert}</p>
              <p className="text-white mb-2"><strong>Referral Code:</strong> {data.referral || 'N/A'}</p>
              <p className="text-white sm:col-span-2"><strong>Medical:</strong> {data.medical || 'None'}</p>
              <p className="text-white sm:col-span-2"><strong>Dietary:</strong> {data.diet || 'None'}</p>
          </div>
        </div>

        {/* Status */}
        <div className="bg-gradient-to-tr from-primary to-secondary text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold mb-2">Registration Status</h3>
          <span className={`px-4 py-2 text-lg font-bold rounded-full bg-yellow-400 text-yellow-900`}>
            {data.status}
          </span>
           <p className="mt-3 text-sm opacity-90">Your registration ID is: <br/><strong className="text-lg">{data.id}</strong></p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      {registration && !searchAttempted && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-md mb-6" role="alert">
          <p className="font-bold">Registration Successful!</p>
          <p>Thank you for registering. Your details are displayed below. You can also search for your registration at any time.</p>
        </div>
      )}

      {/* Search Section */}
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">Check Your Registration</h2>
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="flex-grow shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
            className="flex-grow shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button onClick={handleSearch} className="bg-primary hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105">
            Search
          </button>
        </div>
      </div>
      
      {/* Display Area */}
      <div>
        {registration && !searchAttempted && renderRegistrationDetails(registration)} 
        {searchResult && renderRegistrationDetails(searchResult)}
        {searchAttempted && !searchResult && 
          <div className="text-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md shadow-md">
            <p className="font-bold">No Registration Found</p>
            <p>We couldn't find a registration matching the provided email and phone number. Please check your details and try again.</p>
        </div>
        }
      </div>

    </div>
  );
};

export default RegistrationSuccess;
