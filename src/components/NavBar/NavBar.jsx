import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 8C17 10.76 14.76 13 12 13C9.24 13 7 10.76 7 8H8.5C8.5 9.93 10.07 11.5 12 11.5C13.93 11.5 15.5 9.93 15.5 8H17Z" fill="currentColor"/>
              <path d="M18.5 3H5.5C4.67 3 4 3.67 4 4.5V5.5C4 6.33 4.67 7 5.5 7H18.5C19.33 7 20 6.33 20 5.5V4.5C20 3.67 19.33 3 18.5 3Z" fill="currentColor"/>
              <path d="M9.5 16C9.5 16.83 8.83 17.5 8 17.5C7.17 17.5 6.5 16.83 6.5 16H5C5 17.66 6.34 19 8 19C9.66 19 11 17.66 11 16H9.5Z" fill="currentColor"/>
              <path d="M16 17.5C15.17 17.5 14.5 16.83 14.5 16H13C13 17.66 14.34 19 16 19C17.66 19 19 17.66 19 16H17.5C17.5 16.83 16.83 17.5 16 17.5Z" fill="currentColor"/>
              <path d="M20 9H4V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V9Z" fill="currentColor" fillOpacity="0.3"/>
            </svg>
          </div>
          <span className="logo-text">NH's Cafe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{ '--index': index }}
            >
              {item.label}
              <span className="nav-link-underline"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="navbar-cta">
          <Link to="/contact" className="cta-button">
            <span className="cta-text">Reserve a Table</span>
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-items">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{ '--index': index }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mobile-cta-button"
            onClick={() => setMenuOpen(false)}
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;