import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const NavLink = ({ to, children }) => (
        <Link 
            to={to} 
            className="block md:inline-block py-3 md:py-0 text-lg md:text-sm hover:text-secondary transition-colors duration-300"
        >
            {children}
        </Link>
    );

    return (
        <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                            <img src={logo} alt="Conference Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold leading-tight">Redeemer's University</h1>
                            <p className="text-xs text-white/80 leading-tight">International Model United Nations</p>
                        </div>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/theme">Theme</NavLink>
                        <NavLink to="/registration">Register</NavLink>
                        <NavLink to="/registration-success">Check Registration</NavLink>
                    </div>
                    
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden z-50 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`
                    md:hidden fixed inset-0 bg-primary/95 backdrop-blur-sm z-40 transition-opacity duration-300
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
            >
                <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center space-y-8 text-center">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/theme">Theme</NavLink>
                    <NavLink to="/registration">Register</NavLink>
                    <NavLink to="/registration-success">Check Registration</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
