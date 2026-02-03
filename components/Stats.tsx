
import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { label: 'Años de Experiencia', value: '+15' },
  { label: 'Gestión Integral', value: '360º' },
  { label: 'Satisfacción Cliente', value: '100%' }
];

const Stats: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-stone-bg border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-16 md:space-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in">
              <div className="text-5xl md:text-7xl font-serif font-light mb-4">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-bronze-mute font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
