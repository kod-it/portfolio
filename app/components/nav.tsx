'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
  '/theories': {
    name: 'theories',
  },
  '/about': {
    name: 'about',
  },
  '/contact': {
    name: 'contact',
  }
}

export function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(savedTheme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex items-center justify-between px-4 py-4 md:overflow-auto scroll-pr-6 md:relative">
          {/* Logo */}
          <div className="flex items-center">
            <a href='/'>
            <img
              src={theme === 'dark' ? '/logo-white.png' : '/logo-black.png'}
              alt="Logo"
              className="w-30 h-10"
            /></a>
          </div>

          {/* Navigation links for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Right-side controls (Theme and Hamburger menu for mobile) */}
          <div className="flex items-center space-x-4">
            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 text-white rounded-lg transition-all duration-300 ease-in-out transform"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <img
                  src="/moon.png"
                  alt="theme-moon"
                  className="w-6 h-6 transform transition-all duration-300 ease-in-out"
                />
              ) : (
                <img
                  src="/sun.png"
                  alt="theme-sun"
                  className="w-6 h-6 opacity-80 rotate-180 transition-all duration-300 ease-in-out"
                />
              )}
            </button>

            {/* Hamburger Menu Button (only visible on mobile) */}
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <img
                src={theme === 'dark' ? '/menu-white.png' : '/menu-black.png'}
                alt="menu-icon"
                className="w-6 h-6"
              />
            </button>
          </div>
        </nav>

        {/* Full-Screen Menu (for mobile only) */}
        {isMenuOpen && (
          <div
            className={`fixed inset-0 ${
              theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
            } z-50 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden`}
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-xl focus:outline-none"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Navigation Items */}
            <div className="flex flex-col items-center space-y-6">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="text-xl  transition-all"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
