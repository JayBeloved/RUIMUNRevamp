import React from 'react';

/* Import images for the hero section slideshow */
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';
import hero6 from '../assets/hero6.jpg';
import hero7 from '../assets/hero7.jpg';

const ThemePage = () => {
  const importantDates = [
    { event: 'Registration Begins', date: 'October 25th, 2025' },
    { event: 'Payment Deadline', date: 'January 31st, 2026' },
    { event: 'Conference', date: 'March 30th - April 3rd, 2026' },
  ];

  const fees = [
    { category: 'RUN Students', price: '₦80,000', delay: '100ms' },
    { category: 'Nigerian Delegates', price: '₦100,000', delay: '200ms' },
    { category: "Int'l Delegates", price: '$150', delay: '300ms' },
  ];

  const theme = {
    supertitle: "6th Session of the Redeemer's University International Model United Nations",
    title: "Better Together for Peace, Development, and Human Rights",
    description: "This theme underscores the importance of global cooperation in addressing the world’s most pressing challenges. We believe that by uniting diverse perspectives and fostering collaborative solutions, we can make significant strides towards a more peaceful, equitable, and sustainable future."
  };
  
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section with Slideshow */}
      <style>{`
        .hero-slide {
          position: absolute; inset: 0; background-size: cover; background-position: center;
          opacity: 0; will-change: opacity, transform;
          animation-name: kenBurns, fadeSlide; animation-timing-function: ease-in-out, linear; animation-iteration-count: infinite, infinite;
        }
        @keyframes kenBurns { 
          0% { transform: scale(1.05) translate(0, 0); } 
          100% { transform: scale(1.15) translate(-2%, 2%); } 
        }
        @keyframes fadeSlide { 
          0% { opacity: 0; } 5% { opacity: 1; } 30% { opacity: 1; } 35% { opacity: 0; } 100% { opacity: 0; } 
        }
      `}</style>
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        {heroImages.map((img, idx) => {
          const totalDuration = heroImages.length * 5; // 5s per slide
          const delay = `-${idx * 5}s`;
          return (
            <div key={idx} className="hero-slide" style={{
              backgroundImage: `url(${img})`,
              animationDuration: `${totalDuration}s, ${totalDuration}s`,
              animationDelay: `${delay}, ${delay}`
            }} />
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center p-4 animate-fade-in">
          <p className="text-lg md:text-xl text-white/90 tracking-wider mb-2">{theme.supertitle}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight shadow-lg">{theme.title}</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Theme Description */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-secondary mb-4">Exploring the Theme</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">{theme.description}</p>
        </div>

        {/* Fees Section */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-secondary mb-10">Conference Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fees.map((fee, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center animate-fade-in" style={{animationDelay: fee.delay}}>
                <div className="bg-primary/10 dark:bg-secondary/20 text-primary dark:text-secondary rounded-full p-4 mb-4">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{fee.category}</h3>
                <p className="text-4xl font-bold text-primary dark:text-secondary">{fee.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA and Dates Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 sm:p-12">
          <div className="animate-slide-in-up">
            <h3 className="text-3xl font-bold text-primary dark:text-secondary mb-4">Ready to Join?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Secure your spot at a conference that promises not just debates, but a transformative experience. Register now and be part of the change.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://bit.ly/ruimun26" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-primary hover:bg-opacity-80 text-white font-bold py-4 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105">
                Register as Delegate
              </a>
              <a href="https://bit.ly/ruimun26" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-primary dark:text-secondary font-bold py-4 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105">
                Register as Official
              </a>
            </div>
          </div>

          <div className="animate-slide-in-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Key Dates</h3>
            <ul className="space-y-4">
              {importantDates.map((item, index) => (
                <li key={index} className="flex items-center p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                  <span className="font-bold text-primary dark:text-secondary mr-3">{item.date}:</span>
                  <span className="text-gray-700 dark:text-gray-300">{item.event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enquiries Section */}
        <div className="text-center mt-16 sm:mt-20 pt-10 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Contact for Enquiries</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">Comms. & PI: +234 814 887 1390 | Admin Secretary: +234 813 560 3016</p>
          <p className="mt-2"><a href="mailto:ruimun@run.edu.ng" className="text-primary dark:text-secondary font-semibold hover:underline">ruimun@run.edu.ng</a></p>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
