
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'fiscal',
    title: 'Fiscal',
    description: 'Optimización tributaria y cumplimiento normativo riguroso.'
  },
  {
    id: 'laboral',
    title: 'Laboral',
    description: 'Gestión de capital humano y arquitectura contractual.'
  },
  {
    id: 'contable',
    title: 'Contable',
    description: 'Claridad financiera para la toma de decisiones informada.'
  },
  {
    id: 'juridico',
    title: 'Jurídico',
    description: 'Seguridad y respaldo absoluto ante la burocracia.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="fade-in flex flex-col"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="text-6xl font-serif font-light text-stone-200 mb-6" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-serif mb-4 tracking-wide">{service.title}</h3>
              <p className="font-sans font-light text-slate-deep leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
