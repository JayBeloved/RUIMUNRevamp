import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import logo from '../assets/logo.png';

const Header = () => {
return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                        {/* Adjusted logo styling */}
                        <img src={logo} alt="Conference Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Redeemer's University </h1>
                        <p className="text-xs text-white/80">International Model United Nations</p>
                    </div>
                </div>
                
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                    <Link to="/theme" className="hover:text-secondary transition-colors">Theme</Link>
                    <Link to="/registration" className="hover:text-secondary transition-colors">Register</Link>
                    <Link to="/registration-success" className="hover:text-secondary transition-colors">Check Registration</Link>
                    {/* <a href="#apply" className="hover:text-secondary transition-colors">Apply</a> */}
                </div>
                
                {/* Mobile menu button */}
                <button className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>
);
};

export default Header;
