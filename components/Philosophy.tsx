
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-32 md:py-48 px-6 bg-stone-bg">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <span className="text-xs uppercase tracking-widest text-bronze-mute mb-8 block font-sans">Nuestra Filosofía</span>
        <h2 className="text-3xl md:text-5xl font-serif leading-snug mb-12">
          En Amani Asesores entendemos que detrás de cada cifra hay una decisión estratégica.
        </h2>
        <div className="w-20 h-px bg-charcoal mx-auto mb-12 opacity-30"></div>
        <p className="text-xl md:text-2xl font-serif italic text-slate-deep leading-relaxed max-w-2xl mx-auto">
          "No somos solo gestores; somos arquitectos de la estabilidad de su empresa."
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
