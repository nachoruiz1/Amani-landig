
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-charcoal selection:text-stone-bg">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Services />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
