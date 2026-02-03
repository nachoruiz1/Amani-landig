
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Minimalist Architecture" 
          className="w-full h-full object-cover grayscale opacity-10"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl text-center fade-in">
        <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight mb-8">
          Excelencia en la Gestión.<br />
          <span className="italic">Tranquilidad en el Negocio.</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl font-sans font-light text-slate-deep mb-12">
          Soluciones fiscales, laborales y contables diseñadas con precisión quirúrgica para empresas exigentes.
        </p>
        <a 
          href="#contacto" 
          onClick={scrollToContact}
          className="inline-block px-12 py-4 border border-charcoal text-xs uppercase tracking-widest hover:bg-charcoal hover:text-stone-bg transition-all duration-500 ease-in-out"
        >
          Consultar
        </a>
      </div>
    </section>
  );
};

export default Hero;
