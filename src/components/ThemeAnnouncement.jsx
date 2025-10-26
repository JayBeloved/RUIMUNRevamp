
import React from 'react';

const ThemeAnnouncement = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">6th Session of the Redeemer's University</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            International Model United Nations Conference
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Theme: Better Together for Peace, Development, and Human Rights
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Conference Fees</h3>
              <ul className="space-y-4 text-gray-700">
                <li><span className="font-semibold">RUN Students:</span> ₦80,000</li>
                <li><span className="font-semibold">Nigerian Delegates:</span> ₦100,000</li>
                <li><span className="font-semibold">Int'l Delegates:</span> $150</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Important Dates</h3>
              <ul className="space-y-4 text-gray-700">
                <li><span className="font-semibold">Conference:</span> March 30th - April 3rd, 2026</li>
                <li><span className="font-semibold">Registration Begins:</span> October 25th, 2025</li>
                <li><span className="font-semibold">Payment Deadline:</span> January 31st, 2026</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Register Now</h3>
              <a
                href="https://bit.ly/ruimun26"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900">For Enquiries</h3>
          <p className="mt-2 text-lg text-gray-600">
            Comms. & PI: +234 814 887 1390
          </p>
          <p className="text-lg text-gray-600">
            Admin Secretary: +234 813 560 3016
          </p>
          <p className="mt-4 text-lg text-gray-600">
            <a href="mailto:ruimun@run.edu.ng" className="text-primary hover:underline">ruimun@run.edu.ng</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeAnnouncement;
