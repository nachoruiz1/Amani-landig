
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-bg/90 backdrop-blur-md border-b border-stone-200/50">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={scrollToTop} 
          className="text-2xl font-serif tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          Amani <span className="font-light">Asesores</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-widest font-sans font-light">
          <a 
            href="#filosofia" 
            className="hover:text-bronze-mute transition-colors duration-300"
          >
            Filosofía
          </a>
          <a 
            href="#servicios" 
            className="hover:text-bronze-mute transition-colors duration-300"
          >
            Servicios
          </a>
          <a 
            href="#contacto" 
            className="hover:text-bronze-mute transition-colors duration-300"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-charcoal focus:outline-none p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[81px] bg-stone-bg transition-all duration-500 ease-in-out z-40 md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12 text-sm uppercase tracking-[0.3em] font-sans font-light">
          <a href="#filosofia" onClick={closeMenu} className="hover:text-bronze-mute transition-colors">Filosofía</a>
          <a href="#servicios" onClick={closeMenu} className="hover:text-bronze-mute transition-colors">Servicios</a>
          <a href="#contacto" onClick={closeMenu} className="hover:text-bronze-mute transition-colors">Contacto</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
