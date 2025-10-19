import React from 'react';
import { siteConfig } from '../config/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

return (
    <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* About */}
                <div>
                    <h3 className="text-xl font-bold mb-4">RUIMUN'26</h3>
                    <p className="text-white/80 text-sm">
                        {siteConfig.description}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#home" className="text-white/80 hover:text-white transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-white/80 hover:text-white transition-colors">
                                About Conference
                            </a>
                        </li>
                        <li>
                            <a href="#apply" className="text-white/80 hover:text-white transition-colors">
                                Apply as Official
                            </a>
                        </li>
                        <li>
                            <a href="https://ruimun.org" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                Main RUIMUN Website
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>📧 {siteConfig.email}</li>
                        <li>📍 {siteConfig.conference.venue}</li>
                    </ul>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4 mt-4">
                        <a href={siteConfig.social.twitter} className="text-white/80 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href={siteConfig.social.instagram} className="text-white/80 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href={siteConfig.social.facebook} className="text-white/80 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
                <p>© {currentYear} RUIMUN. All rights reserved.</p>
                <p className="mt-2">
                    RUIMUN'26 Conference • Main site: <a href="https://ruimun.org" className="underline hover:text-white">ruimun.org</a>
                </p>
                <p className="mt-2">
                    Built <a href="https://johnjaylawal.site" className="underline hover:text-white">John J. Lawal</a>
                </p>
            </div>
        </div>
    </footer>
);
};

export default Footer;