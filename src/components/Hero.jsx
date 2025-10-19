import React from 'react';
import { siteConfig } from '../config/site';
import logo from '../assets/logo.png';
/* import images to use in the hero section as background images slideshow with kens burns effect*/
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';
import hero6 from '../assets/hero6.jpg';
import hero7 from '../assets/hero7.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary min-h-screen flex items-center">
      {/* Background slideshow with Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <style>{`
          .hero-slide {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            opacity: 0;
            will-change: opacity, transform;
            /* two animations: kenBurns for scale/movement and fadeSlide for sequencing opacity */
            animation-name: kenBurns, fadeSlide;
            animation-timing-function: ease-in-out, linear;
            animation-iteration-count: infinite, infinite;
            animation-fill-mode: both, both;
          }

          @keyframes kenBurns {
            0% { transform: scale(1) translateY(0); }
            100% { transform: scale(1.08) translateY(-3%); }
          }

          @keyframes fadeSlide {
            0% { opacity: 0; }
            5% { opacity: 1; }
            25% { opacity: 1; }
            30% { opacity: 0; }
            100% { opacity: 0; }
          }
        `}</style>

        {[
          hero1,
          hero2,
          hero3,
          hero4,
          hero5,
          hero6,
          hero7
        ].map((img, idx) => {
          const slides = 7;
          const slideDuration = 6; // seconds each slide is visible within the cycle
          const totalDuration = slides * slideDuration; // total loop time
          const kenDuration = `${totalDuration}s`;
          const fadeDuration = `${totalDuration}s`;
          const delay = `-${idx * slideDuration}s`; // negative offset so each slide starts at its slot

          return (
            <div
              key={idx}
              className="hero-slide"
              style={{
                backgroundImage: `url(${img})`,
                animationDuration: `${kenDuration}, ${fadeDuration}`,
                animationDelay: `${delay}, ${delay}`
              }}
            />
          );
        })}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            {/* Placeholder for conference logo */}
            <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
              <img src={logo} alt="Conference Logo" className="w-24 h-24 object-cover" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {siteConfig.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            {siteConfig.conference.theme}
          </p>
          
          <div className="mb-8 text-lg text-white/80">
            <p className="mb-2">📅 {siteConfig.conference.date}</p>
            <p>📍 {siteConfig.conference.venue}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="btn-primary bg-primary hover:bg-primary/90">
              Apply as Official
            </a>
            <a href="#about" className="btn-secondary bg-accent/20 hover:bg-accent/30 backdrop-blur-sm">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;