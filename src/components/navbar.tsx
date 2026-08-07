import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('HISTORY');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Ditambahkan HISTORY ke dalam navigasi
  const navItems: NavItem[] = [
    { label: 'HISTORY', href: '#history' },
    { label: 'MEMBERS', href: '#members' },
    { label: 'RECAP', href: '#recap' },
    { label: 'SOCIAL', href: '#social' },
  ];

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo Brand */}
          <div className="shrink-0 z-20">
            <a
              href="#"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-[#F4F5F7] transition-all duration-300 ease-in-out select-none hover:text-[#9DB2C3]"
            >
              DOCTOR BEAT
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className={`relative py-2 text-sm lg:text-base tracking-[0.2em] uppercase transition-all duration-300 ${
                    isActive ? 'text-[#9DB2C3]' : 'text-zinc-400 hover:text-[#F4F5F7]'
                  }`}
                >
                  {item.label}
                  
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9DB2C3]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hamburger Button (Mobile) */}
          <div className="flex items-center md:hidden z-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F4F5F7] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="space-y-2 w-6">
                <span
                  className={`block h-0.5 w-full bg-[#9DB2C3] transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#F4F5F7] transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#9DB2C3] transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-zinc-950 z-10 transition-all duration-500 ease-in-out flex flex-col justify-between px-8 py-20 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col space-y-8 my-auto">
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
                style={{ fontFamily: "'Anton', sans-serif" }}
                className={`text-4xl sm:text-5xl tracking-wider uppercase transition-all border-b border-zinc-800/80 pb-4 ${
                  isActive ? 'text-[#9DB2C3] pl-2' : 'text-zinc-500 hover:text-[#F4F5F7]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Footer Stamp */}
        <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-sans tracking-widest text-zinc-500 uppercase">
          <span>AUTHENTIC VIBE</span>
          <span className="text-[#9DB2C3]">DOCTOR BEAT</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;