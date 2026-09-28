'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import './HeaderNav.css';

export default function HeaderNav({ forceVisible = false, isHeroPassed = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isVisible = forceVisible || isHeroPassed || scrolled;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Sister Concerns', href: '/#sister-concerns' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Upcoming Events', href: '/#events' },
    { name: 'Investment', href: '/#investment' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header className={`header-nav ${isVisible ? 'is-visible' : ''}`}>
        <div className="header-backdrop">
          <div className="header-container">
            <Link href="/" className="header-brand" aria-label="Spectrum EduCare Home">
              <img
                src="/logo main.png"
                alt="Spectrum EduCare Limited"
                className="header-logo"
              />
            </Link>

            <nav aria-label="Main Navigation">
              <ul className="header-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="header-link-item">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <Link href="/#investment" className="header-cta-btn">
                <span>Apply for Investment</span>
                <FiArrowRight />
              </Link>
            </div>

            <button
              className="mobile-toggle-btn"
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={isOpen}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-header">
            <img
              src="/logo main.png"
              alt="Spectrum EduCare Limited"
              style={{ height: '36px', width: 'auto' }}
            />
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile navigation menu"
            >
              <FiX />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  <FiArrowRight size={16} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <Link
              href="/#investment"
              className="header-cta-btn"
              style={{ justifyContent: 'center' }}
              onClick={() => setIsOpen(false)}
            >
              <span>Apply for Investment</span>
              <FiArrowRight />
            </Link>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textAlign: 'center' }}>
              &copy; {new Date().getFullYear()} Spectrum EduCare Limited
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
