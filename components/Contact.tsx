
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="fade-in">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Inicie una<br/><span className="italic">Conversación</span></h2>
          <div className="space-y-8 font-sans font-light text-slate-deep">
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest w-24">Teléfono</span>
              <a href="tel:+34900000000" className="hover:text-charcoal transition-colors">+34 900 000 000</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest w-24">Email</span>
              <a href="mailto:amaniasesores@gmail.com" className="hover:text-charcoal transition-colors">amaniasesores@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest w-24">Sede</span>
              <span>Madrid, España</span>
            </div>
          </div>
        </div>

        <div className="fade-in">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-sans font-medium">Nombre Completo</label>
              <input 
                type="text" 
                required
                className="line-input"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-sans font-medium">Dirección de Correo</label>
              <input 
                type="email" 
                required
                className="line-input"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-sans font-medium">Consulta</label>
              <textarea 
                rows={1}
                className="line-input resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-charcoal text-stone-bg text-xs uppercase tracking-widest hover:bg-slate-deep transition-all duration-300"
            >
              {submitted ? 'Enviado Correctamente' : 'Enviar Solicitud'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
