
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/amaniasesores@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Consulta Web - Amani Asesores",
          _autoresponse: "Gracias por contactar con Amani Asesores. Hemos recibido su consulta y le responderemos a la mayor brevedad."
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  return (
    <section id="contacto" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="fade-in">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Inicie una<br /><span className="italic">Conversación</span></h2>
          <div className="space-y-8 font-sans font-light text-slate-deep">
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest w-24">Teléfono</span>
              <a href="tel:+34621335295" className="hover:text-charcoal transition-colors">+34 621 33 52 95</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest w-24">Email</span>
              <a href="mailto:amaniasesores@gmail.com" className="hover:text-charcoal transition-colors">amaniasesores@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest w-24">Sede</span>
              <span>Gipuzkoa, España</span>
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
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-sans font-medium">Dirección de Correo</label>
              <input
                type="email"
                required
                className="line-input"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-sans font-medium">Consulta</label>
              <textarea
                rows={1}
                className="line-input resize-none"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
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

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/10 backdrop-blur-sm transition-all duration-300"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-stone-bg border border-stone-200 w-full max-w-md shadow-2xl relative fade-in visible p-10 md:p-14 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6 text-bronze-mute">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 className="text-2xl font-serif mb-4 text-charcoal">
              Mensaje Enviado
            </h3>
            <p className="font-sans font-light text-slate-deep text-sm leading-relaxed mb-8">
              Su solicitud ha sido recibida correctamente. Nos pondremos en contacto con usted a la mayor brevedad posible.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="text-[10px] uppercase tracking-widest font-sans hover:text-bronze-mute transition-colors border-b border-transparent hover:border-bronze-mute pb-1"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
