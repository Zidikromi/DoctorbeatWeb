import React, { useState, useEffect } from 'react';
import logo from '../assets/logohitam.png';

interface NavItem {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('HISTORY');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Menu dibagi 2 untuk posisi kiri dan kanan logo
  const leftNavItems: NavItem[] = [
    { label: 'HISTORY', href: '#history' },
    { label: 'MEMBERS', href: '#members' },
  ];

  const rightNavItems: NavItem[] = [
    { label: 'RECAP', href: '#recap' },
    { label: 'SOCIAL', href: '#social' },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-3 items-center h-12">
          
          {/* Menu Kiri (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 justify-start">
            {leftNavItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className={`text-xs lg:text-sm tracking-[0.15em] uppercase transition-opacity duration-200 ${
                    isActive ? 'text-black opacity-100 font-bold' : 'text-black/80 hover:opacity-60'
                  }`}
                >
                  /{item.label}
                </a>
              );
            })}
          </nav>

          {/* Logo Tengah */}
          <div className="flex justify-start md:justify-center items-center col-span-2 md:col-span-1">
            <a href="#" className="block transition-transform duration-300 hover:scale-105">
              <img
                src={logo}
                alt="Doctor Beat Logo"
                className="h-8 sm:h-10 w-auto object-contain select-none"
              />
            </a>
          </div>

          {/* Menu Kanan (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 justify-end">
            {rightNavItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className={`text-xs lg:text-sm tracking-[0.15em] uppercase transition-opacity duration-200 ${
                    isActive ? 'text-black opacity-100 font-bold' : 'text-black/80 hover:opacity-60'
                  }`}
                >
                  /{item.label}
                </a>
              );
            })}
          </nav>

          {/* Hamburger Button (Mobile) */}
          <div className="flex justify-end items-center md:hidden col-span-1 z-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="space-y-1.5 w-6">
                <span
                  className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Fullscreen Overlay Menu (Mobile) */}
      <div
        className={`fixed inset-0 bg-white z-10 transition-all duration-500 ease-in-out flex flex-col justify-between px-8 py-20 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col space-y-6 my-auto">
          {allNavItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMobileMenuOpen(false);
                }}
                style={{ fontFamily: "'Anton', sans-serif" }}
                className={`text-3xl tracking-wider uppercase transition-all border-b border-black/10 pb-4 ${
                  isActive ? 'text-black pl-2' : 'text-black/50 hover:text-black'
                }`}
              >
                /{item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Footer Stamp (Tetap Pakai Original Data) */}
        <div className="pt-6 border-t border-black/10 flex items-center justify-between text-xs font-sans tracking-widest text-black/60 uppercase">
          <span>AUTHENTIC VIBE</span>
          <span className="text-black font-semibold">DOCTOR BEAT</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;