import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const specialties = [
    {
      icon: '☕',
      title: 'Artisan Coffee',
      description: 'Hand-crafted espresso drinks made from single-origin beans roasted to perfection.'
    },
    {
      icon: '🥐',
      title: 'Fresh Pastries',
      description: 'Baked daily in-house, our pastries are the perfect companion to your morning coffee.'
    },
    {
      icon: '🍰',
      title: 'Homemade Desserts',
      description: 'Indulge in our selection of cakes, tarts, and sweet treats made with love.'
    },
    {
      icon: '🥗',
      title: 'Healthy Brunch',
      description: 'Wholesome, fresh ingredients come together in our signature brunch menu.'
    }
  ];

  const features = [
    {
      number: '01',
      title: 'Cozy Atmosphere',
      description: 'A warm, inviting space designed for coffee lovers, remote workers, and friends gathering.'
    },
    {
      number: '02',
      title: 'Premium Quality',
      description: 'We source the finest ingredients and craft everything with attention to detail.'
    },
    {
      number: '03',
      title: 'Community Hub',
      description: 'More than a cafe - we\'re a neighborhood gathering place where memories are made.'
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="coffee-steam steam-1"></div>
          <div className="coffee-steam steam-2"></div>
          <div className="coffee-steam steam-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Freshly Brewed Daily
            </span>
            <h1 className="hero-title">
              Where Every Cup
              <span className="hero-title-highlight"> Tells a Story</span>
            </h1>
            <p className="hero-description">
              Experience the perfect blend of exceptional coffee, warm hospitality, 
              and a welcoming atmosphere. Your neighborhood cafe awaits.
            </p>
            <div className="hero-buttons">
              <Link to="/gallery" className="hero-btn-primary">
                <span>Explore Menu</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/contact" className="hero-btn-secondary">
                <span>Visit Us</span>
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-card">
              <div className="image-placeholder">
                <div className="coffee-illustration">
                  <div className="coffee-cup">
                    <div className="cup-handle"></div>
                    <div className="coffee-liquid"></div>
                    <div className="coffee-foam"></div>
                  </div>
                </div>
              </div>
              <div className="image-accent accent-1"></div>
              <div className="image-accent accent-2"></div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties fade-in-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Specialties</h2>
            <p className="section-description">
              Every item on our menu is crafted with passion and precision
            </p>
          </div>

          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className="specialty-card"
                style={{ '--index': index }}
              >
                <div className="specialty-icon">{specialty.icon}</div>
                <h3 className="specialty-title">{specialty.title}</h3>
                <p className="specialty-description">{specialty.description}</p>
                <div className="specialty-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="story fade-in-section">
        <div className="story-container">
          <div className="story-image-section">
            <div className="story-image-wrapper">
              <div className="story-image-placeholder">
                <div className="beans-illustration">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="coffee-bean"
                      style={{ 
                        '--delay': `${i * 0.1}s`,
                        '--x': `${Math.random() * 100}%`,
                        '--y': `${Math.random() * 100}%`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="story-accent-circle"></div>
            </div>
          </div>

          <div className="story-content">
            <span className="section-label">Our Story</span>
            <h2 className="story-title">Crafted with Passion, Served with Love</h2>
            <p className="story-text">
              NH's Cafe began with a simple dream: to create a space where exceptional coffee 
              meets genuine warmth. Every morning, we pour our hearts into crafting the perfect 
              cup, selecting the finest beans, and baking fresh pastries that fill our cafe with 
              irresistible aromas.
            </p>
            <p className="story-text">
              We believe that coffee is more than just a beverage—it's a ritual, a moment of peace, 
              a reason to gather with friends. That's why we've created a space that feels like home.
            </p>
            <Link to="/about" className="story-link">
              Learn More About Us
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features fade-in-section" ref={featuresRef}>
        <div className="section-container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ '--index': index }}
              >
                <div className="feature-number">{feature.number}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section fade-in-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience<br />Our Signature Brew?</h2>
            <p className="cta-description">
              Join us for a coffee that's worth savoring. Reserve your table today.
            </p>
            <Link to="/contact" className="cta-button">
              <span>Reserve a Table</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="cta-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;