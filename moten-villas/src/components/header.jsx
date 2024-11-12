import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/assets/motenVillas.png'; // Make sure this path is correct

const ResponsiveNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 300); // Duration for closing animation
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 300);
        }
    };

    return (
        <div>
            <nav className="navbar bg-white shadow-md fixed w-screen">
                <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} alt="Moten Villas Logo" className="h-8 md:h-10" />
                    </Link>
                    <div className="hidden md:flex space-x-4 mr-6">
                        {['Home', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="text-gray-800 hover:text-orange-500 transition duration-300"
                                onClick={handleLinkClick}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            id="mobile-menu-button"
                            className="text-gray-800 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="w-8 h-8 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div
                id="mobile-menu"
                className={`fixed right-0 bg-white shadow-md w-full transition-all duration-300 ease-linear ${
                    isMenuOpen ? 'transform translate-x-0 scale-100 opacity-100' : 'transform translate-x-full scale-100 opacity-0'
                }`}
                style={{ height: 'calc(100vh - 64px)', top: '64px' }}
            >
                <div className="flex flex-col items-center">
                    {['Home', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className="py-4 text-gray-800 hover:text-orange-500 transition duration-300 text-lg"
                            onClick={handleLinkClick}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNavbar;
