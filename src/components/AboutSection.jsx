import React from 'react';
import { siteConfig } from '../config/site';
import about1 from '../assets/about1.jpg'; 
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import about5 from '../assets/about5.jpg';
import about6 from '../assets/about6.jpg';
import about7 from '../assets/about7.jpg';
import about8 from '../assets/about8.jpg';
import about9 from '../assets/about9.jpg';

const AboutSection = () => {
  const whyAttendReasons = [
    {
      icon: '🎤',
      title: 'World-Class Speakers & Skill-Building',
      description: 'Step into an environment dedicated to transforming your confidence and communication. RUIMUN brings together renowned experts, dynamic trainers, and MUN\'s best minds—helping you conquer the art of public speaking, sharpen your negotiation skills, and prepare to lead in any room.',
      gradient: 'from-yellow-600 to-gray-700'
    },
    {
      icon: '🌍',
      title: 'Unmatched Global Networking',
      description: 'Join exceptional youth leaders and innovators from across the globe. At RUIMUN, you\'ll collaborate with forward-thinking peers, forge life-long connections, and build solutions to the world\'s most pressing challenges—all while creating your own international network.',
      gradient: 'from-gray-500 to-yellow-700'
    },
    {
      icon: '✨',
      title: 'Meet Visionaries & Changemakers',
      description: 'Gain first-hand insights from international experts, diplomats, and headline-makers. Learn from UN officials and trailblazers who reveal the strategies and stories shaping tomorrow\'s world, and get inspired to become the next leader of change.',
      gradient: 'from-yellow-500 to-gray-600'
    },
    {
      icon: '🎉',
      title: 'Beyond Debate—Experience the Excitement',
      description: 'RUIMUN isn\'t just about committees and resolutions. Immerse yourself in vibrant social events, ambassadorial dinners, dramatic showcases, cultural displays, and memorable activities that capture the true spirit of international community—and make every moment unforgettable.',
      gradient: 'from-gray-500 to-yellow-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary animate-fade-in">
            About RUIMUN'26
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-12 animate-slide-in"></div>
          
          {/* Conference Introduction */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8 shadow animate-fade-in-up">
            <p className="text-lg leading-relaxed mb-4">
              RUIMUN (Redeemer's University International Model United Nations) is dedicated to empowering youth through global citizenship, leadership, and impactful diplomacy. With an innovative program of committees and events, RUIMUN'26 offers delegates a transformative platform to debate global issues, connect with future change-makers, and shape policy through simulation and collaboration.
            </p>
            <p className="text-lg leading-relaxed">
              The 2026 conference will gather <span className="font-semibold">hundreds of delegates</span> from around the world, featuring diverse committees such as UNSC, ICJ, UNECA, and more. This year's theme <span className="text-primary">[to be announced]</span>, will center on fostering inclusion, resilience, and creative diplomacy. Expect expert-led sessions, networking, and a dynamic social experience!
            </p>
          </div>
          
          {/* Four Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-primary/5 p-6 rounded-lg shadow animate-bounce-in">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Our Mission</h3>
              <p className="text-gray-700">
                RUIMUN seeks to nurture purposeful leaders and diplomats through a multicultural, academic, and innovative MUN program. Our mission is to inspire excellence, empower voices, and foster global understanding.
              </p>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-lg shadow animate-bounce-in">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Why Participate?</h3>
              <p className="text-gray-700">
                Delegates experience world-class committee simulations, expert mentorship, and networking. Develop negotiation, research, public speaking, and leadership—plus, join a vibrant global community!
              </p>
            </div>
            
            <div className="bg-accent/5 p-6 rounded-lg shadow animate-bounce-in">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Committees</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>UNSC (United Nations Security Council)</li>
                <li>ICJ (International Court of Justice)</li>
                <li>UNECA (Economic Commission for Africa)</li>
                <li>DISEC, ECOFIN, SOCHUM, SPECPOL, UNECE, UN LEGAL, PGA, VPGA</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg shadow animate-bounce-in">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Awards & Recognition</h3>
              <p className="text-gray-700">
                RUIMUN'26 celebrates outstanding diplomacy and leadership. Awards include Best Delegate, Outstanding Chair, and special recognition for innovation, teamwork, and impact.
              </p>
            </div>
          </div>

          {/* Why Attend RUIMUN Section - NEW */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Why Attend RUIMUN?
              </h2>
              <p className="text-2xl font-semibold text-gray-700 mb-2">
                Elevate Your Voice, Expand Your World
              </p>
              <div className="h-1 w-24 bg-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {whyAttendReasons.map((reason, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 text-white">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-4xl mx-auto">
                Secure your spot at RUIMUN and unlock a journey of growth, leadership, and global impact. 
                Experience the difference—where every delegate matters, every voice counts, and every story inspires.
              </p>
              <button className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                Registration Commences Soon
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary animate-fade-in">
              Highlights from Previous Conferences
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[about1, about2, about3, about4, about5, about6, about7, about8, about9].map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg animate-zoom-in"
                >
                  <img
                    src={image}
                    alt={`About RUIMUN ${index + 1}`}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;