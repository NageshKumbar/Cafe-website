import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenByStory, setHiddenByStory] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Observe the story section
    const storySection = document.querySelector('.story');
    
    if (storySection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Hide navbar when story section is in view
            setHiddenByStory(entry.isIntersecting);
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of the section is visible
          rootMargin: '-80px 0px 0px 0px' // Account for navbar height
        }
      );

      observer.observe(storySection);

      return () => {
        observer.disconnect();
      };
    }
  }, [location.pathname]); // Re-run when route changes

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hiddenByStory ? 'hidden-by-story' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img 
            src="/src/assets/logo_wo_bg.png" 
            alt="NH's Cafe Logo" 
            className="logo-image"
          />
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
        <div className={`navbar-cta ${location.pathname === '/contact' ? 'hidden' : ''}`}>
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