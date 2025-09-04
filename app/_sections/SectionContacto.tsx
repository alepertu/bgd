"use client";

import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

function Contacto() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !phone) {
      alert('Por favor, ingresa un email o un teléfono para contactarte.');
      return;
    }

    setIsSubmitting(true);
    fetch(e.target.action, {
      method: 'POST',
      body: new FormData(e.target),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, 'errors')) {
              alert(data['errors'].map((error) => error['message']).join(', '));
            } else {
              alert('¡Oops! Hubo un problema al enviar el formulario');
            }
          });
        }
      })
      .catch((error) => {
        alert('¡Oops! Hubo un problema al enviar el formulario');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contacto" className="bg-[#FCDCBC] min-h-screen relative overflow-hidden">
      <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
          <div className="w-full md:w-2/3">
            <div className="mb-6 md:mb-8 lg:mb-12 text-center w-full">
              <h2
                className="text-2xl md:text-3xl lg:text-6xl font-bold text-gray-900"
                id="contacto">
                ¡Contactanos!
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-3 md:mt-4 lg:mt-6 max-w-2xl mx-auto">
                Comparte tu idea con nosotros, queremos escucharte y ayudarte a convertirla en una realidad exitosa.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center p-8 bg-white/80 backdrop-blur rounded-2xl shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  ¡Gracias por contactarnos!
                </h3>
                <p className="text-gray-700">
                  Nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>
            ) : (
              <form
                className="w-full max-w-2xl mx-auto"
                action="https://formspree.io/f/xldnooqa"
                method="POST"
                onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border-2 border-[#543E27] rounded-2xl w-full placeholder-[#543E27] focus:outline-none focus:ring-2 focus:ring-[#1e293b]/20 focus:border-[#1e293b] transition-all duration-300"
                      />
                    </div>
                    <span className="text-gray-900 font-medium">ó</span>
                    <div className="w-full">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Tu teléfono"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-3 border-2 border-[#543E27] rounded-2xl w-full placeholder-[#543E27] focus:outline-none focus:ring-2 focus:ring-[#1e293b]/20 focus:border-[#1e293b] transition-all duration-300"
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Cuéntanos brevemente tu idea"
                    required
                    className="p-3 border-2 border-[#543E27] rounded-2xl w-full h-32 box-border placeholder-[#543E27] focus:outline-none focus:ring-2 focus:ring-[#1e293b]/20 focus:border-[#1e293b] transition-all duration-300 resize-none"></textarea>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || (!email && !phone)}
                    className="bg-gray-900 text-white py-2 md:py-3 px-8 md:px-12 rounded-2xl w-full md:w-auto hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Enviando...' : '¡Enviar idea!'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="w-full md:w-1/3 text-center md:text-left">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold mb-4 text-[#1e293b]">
                Contacto directo
              </h3>

              <p className="text-sm text-gray-700 mb-4">
                ¿Prefieres hablar directamente? Te respondemos rápido por cualquiera de estos canales.
              </p>

              <div className="space-y-3 flex flex-col items-center md:items-stretch w-full">
                <a
                  href="https://wa.me/+59897827767"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 py-3 px-4 rounded-xl border-2 border-[#543E27] bg-white hover:bg-gray-100 transition-colors duration-300 group w-full md:w-auto justify-center md:justify-start">
                  <FaWhatsapp className="text-xl text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-600">097 827 767</p>
                  </div>
                </a>

                <a
                  href="mailto:info@pya.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 py-3 px-4 rounded-xl border-2 border-[#543E27] bg-white hover:bg-gray-100 transition-colors duration-300 group w-full md:w-auto justify-center md:justify-start">
                  <FaEnvelope className="text-xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">info@pya.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/pya.devs"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 py-3 px-4 rounded-xl border-2 border-[#543E27] bg-white hover:bg-gray-100 transition-colors duration-300 group w-full md:w-auto justify-center md:justify-start">
                  <FaInstagram className="text-xl text-pink-600 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="font-medium text-gray-900">Instagram</p>
                    <p className="text-sm text-gray-600">@pya.devs</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Versión MOBILE */}
        <svg
          className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#FCEEB3" />
        </svg>

        {/* Versión DESKTOP */}
        <svg
          className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#FCEEB3" />
        </svg>
      </div>
    </section>
  );
}

export default Contacto;
