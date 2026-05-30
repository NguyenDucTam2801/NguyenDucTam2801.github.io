import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
    // State to toggle the mobile menu drawer
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        // { name: 'Work', href: '/work', label: 'View my featured projects' },
        { name: 'About', href: '/about', label: 'Learn more about me' },
        // { name: 'Contact', href: '/contact', label: 'Get in touch with me' }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 z-[100] px-6 md:px-10 w-full h-20 flex items-center justify-between bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10">

            {/* Logo */}
            <a className="relative flex items-center gap-0 font-normal font-bebas text-gray-300 hover:text-white 
                 transition-all duration-300 group hover:scale-110 z-50" href="/">
                <span className="text-4xl">TAMU</span>
                <FontAwesomeIcon icon={faArrowRight} size="xl" className="
                opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2
                transition-all duration-300 ml-2
                " />
                <span className="absolute inset-0 bg-white/50 scale-95 opacity-0 
                       group-hover:opacity-100 group-hover:scale-100 
                       blur-xl transition-all duration-500 -z-10">
                </span>
            </a>

            {/* Desktop Navigation Link Menu (Hidden on Mobile) */}
            <div className="hidden md:flex items-center space-x-10 text-white font-bebas text-2xl">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href} // 👈 Changed from href to to
                        aria-label={link.label}
                        className="relative tracking-wider text-gray-300 hover:text-white transition-all duration-300 group hover:scale-110"
                    >
                        {link.name}
                        {/* Glow span elements remain the same */}
                    </Link>
                ))}
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href} // 👈 Changed from href to to
                        onClick={() => setIsOpen(false)}
                        className="text-gray-300 hover:text-white tracking-widest hover:scale-110 transition-all duration-300 py-2"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Icon Toggle Button */}
            <button
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-gray-300 hover:text-white transition-all text-2xl focus:outline-none z-50 p-2"
            >
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>

            {/* Vertical Mobile Drawer Overlay */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[#0a0a0a]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 font-bebas text-4xl transition-all duration-500 ease-in-out md:hidden z-40 ${isOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-full pointer-events-none'
                }`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                        className="text-gray-300 hover:text-white tracking-widest hover:scale-110 transition-all duration-300 py-2"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

        </nav>
    );
};

export default NavBar;