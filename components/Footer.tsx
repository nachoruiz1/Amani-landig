
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-stone-100 bg-stone-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-xl font-serif tracking-widest uppercase">
          Amani <span className="font-light">Asesores</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest font-sans font-light text-slate-deep">
          &copy; {new Date().getFullYear()} Amani Asesores. Todos los derechos reservados.
        </div>
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-sans">
          <a href="#" className="hover:text-bronze-mute transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-bronze-mute transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
