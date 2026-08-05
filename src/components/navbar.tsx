import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('MEMBERS');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'MEMBERS', href: '#members' },
    { label: 'GIGS', href: '#gigs' },
    { label: 'STORY', href: '#story' },
    { label: 'JOIN', href: '#join' },
  ];

  // Efek bayangan saat halaman di-scroll agar tampak dinamis
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-1' : 'border-b border-gray-100 py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand di Pojok Kiri */}
          <div className="flex-shrink-0 z-20">
            <a
              href="#"
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase font-anton text-black"
            >
              Doctor Beat
            </a>
          </div>

          {/* Desktop Navigation Links (Hanya muncul di layar Medium ke atas) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`relative py-7 text-xs lg:text-sm font-bold font-anton tracking-widest transition-colors ${
                    isActive ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {item.label}
                  {/* Indikator Aktif Desktop */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hamburger Menu Button (Hanya muncul di Mobile/Tablet, tersembunyi di md ke atas) */}
          <div className="flex items-center md:hidden z-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black focus:outline-none hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="space-y-1.5 w-6">
                <span
                  className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white z-10 transition-all duration-300 ease-in-out flex flex-col justify-center px-8 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl font-black tracking-widest transition-colors ${
                  isActive ? 'text-black underline underline-offset-8' : 'text-gray-400 hover:text-black'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};