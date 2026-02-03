
import React, { useState, useEffect } from 'react';

type LegalKey = 'aviso' | 'privacidad' | 'cookies' | null;

const Footer: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<LegalKey>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeLegal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeLegal]);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegal = (key: LegalKey) => setActiveLegal(key);
  const closeLegal = () => setActiveLegal(null);

  const legalContent = {
    aviso: {
      title: "Aviso Legal",
      text: "Amani Asesores, con domicilio social en Madrid, cumple con las normativas de servicios de la sociedad de la información. Este sitio tiene un propósito exclusivamente informativo sobre nuestros servicios de consultoría y gestión estratégica. La propiedad intelectual de los contenidos pertenece a Amani Asesores."
    },
    privacidad: {
      title: "Política de Privacidad",
      text: "Tratamos sus datos con la máxima confidencialidad. Los datos recogidos a través de nuestro formulario de contacto se utilizan exclusivamente para responder a sus solicitudes de consultoría. No cedemos datos a terceros y garantizamos sus derechos de acceso, rectificación y supresión según el RGPD."
    },
    cookies: {
      title: "Política de Cookies",
      text: "Utilizamos cookies técnicas esenciales para el funcionamiento de la web y analíticas anónimas para mejorar su experiencia de navegación. No utilizamos cookies de rastreo publicitario. Al navegar por nuestro sitio, usted acepta el uso de estas herramientas de precisión."
    }
  };

  return (
    <footer className="py-24 px-6 border-t border-stone-200 bg-stone-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Branding */}
          <div className="space-y-6">
            <a 
              href="#" 
              onClick={scrollToTop}
              className="text-2xl font-serif tracking-widest uppercase inline-block hover:opacity-70 transition-opacity"
            >
              Amani <span className="font-light">Asesores</span>
            </a>
            <p className="font-sans font-light text-slate-deep text-sm leading-relaxed max-w-xs">
              Arquitectos de la estabilidad empresarial. Gestión integral con un enfoque en la precisión y la discreción.
            </p>
          </div>
          
          {/* Main Navigation */}
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-bronze-mute mb-2">Navegación</span>
            <a href="#filosofia" className="text-xs uppercase tracking-widest hover:text-bronze-mute transition-colors w-fit">Filosofía</a>
            <a href="#servicios" className="text-xs uppercase tracking-widest hover:text-bronze-mute transition-colors w-fit">Servicios</a>
            <a href="#contacto" className="text-xs uppercase tracking-widest hover:text-bronze-mute transition-colors w-fit">Contacto</a>
          </div>

          {/* Legal Navigation */}
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-bronze-mute mb-2">Legal</span>
            <button 
              onClick={() => openLegal('aviso')}
              className="text-xs uppercase tracking-widest text-left hover:text-bronze-mute transition-colors w-fit"
            >
              Aviso Legal
            </button>
            <button 
              onClick={() => openLegal('privacidad')}
              className="text-xs uppercase tracking-widest text-left hover:text-bronze-mute transition-colors w-fit"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => openLegal('cookies')}
              className="text-xs uppercase tracking-widest text-left hover:text-bronze-mute transition-colors w-fit"
            >
              Cookies
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-200 space-y-4 md:space-y-0">
          <div className="text-[10px] uppercase tracking-widest font-sans font-light text-slate-deep opacity-60">
            &copy; {new Date().getFullYear()} Amani Asesores. Todos los derechos reservados.
          </div>
          <div className="text-[10px] uppercase tracking-widest font-sans font-light text-slate-deep opacity-40">
            Excelencia en Consultoría
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeLegal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/10 backdrop-blur-sm transition-all duration-300"
          onClick={closeLegal}
        >
          <div 
            className="bg-stone-bg border border-stone-200 w-full max-w-lg shadow-2xl relative fade-in visible"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeLegal}
              className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-10 md:p-14">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-8 text-bronze-mute font-sans">
                Información Legal
              </h4>
              <h3 className="text-3xl font-serif mb-8 text-charcoal">
                {legalContent[activeLegal].title}
              </h3>
              <p className="font-sans font-light text-slate-deep text-base leading-relaxed">
                {legalContent[activeLegal].text}
              </p>
              <div className="mt-12 pt-8 border-t border-stone-100">
                <button 
                  onClick={closeLegal}
                  className="text-[10px] uppercase tracking-widest font-sans hover:text-bronze-mute transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
