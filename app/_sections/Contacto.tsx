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
    <section className="bg-[#a5c8d8] p-4 md:p-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
        <div className="w-full md:w-2/3">
          <div className="mb-6 md:mb-8 lg:mb-12 text-center w-full">
            <h2
              className="text-2xl md:text-3xl lg:text-6xl font-bold text-gray-900"
              id="contacto">
              ¡Contactanos!
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-3 md:mt-4 lg:mt-6 max-w-2xl mx-auto">
              Comparte tu idea con nosotros, queremos escucharte.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center p-8 bg-white/80 backdrop-blur rounded-3xl shadow-sm">
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
                      className="p-3 border rounded-3xl w-full placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300"
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
                      className="p-3 border rounded-3xl w-full placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300"
                    />
                  </div>
                </div>
                <textarea
                  name="message"
                  placeholder="Cuéntanos brevemente tu idea"
                  required
                  className="p-3 border rounded-3xl w-full h-32 box-border placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300 resize-none"></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || (!email && !phone)}
                className="bg-gray-900 text-white py-2 md:py-3 px-8 md:px-12 rounded-3xl mt-6 w-full md:w-auto hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Enviando...' : '¡Enviar idea!'}
              </button>
            </form>
          )}
        </div>

        <div className="w-full md:w-1/3 text-gray-900 text-left">
          <p className="mb-4 md:mb-6 text-base md:text-xl leading-relaxed">
            ¡Estamos dispuestos a aclarar todas tus dudas!
            <br />
            <br />
            Nos pondremos en contacto contigo enseguida.
          </p>
          <h3 className="text-2xl font-bold mb-6">También puedes...</h3>
          <div className="contactos flex flex-col gap-6">
            <span className="flex items-center gap-4 text-lg group">
              <a
                href="https://wa.me/+59897827767"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110">
                <FaWhatsapp className="text-4xl text-gray-900 group-hover:text-gray-700" />
              </a>
              097 827 767
            </span>
            <span className="flex items-center gap-4 text-lg group">
              <a
                href="mailto:info@pya.com"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110">
                <FaEnvelope className="text-4xl text-gray-900 group-hover:text-gray-700" />
              </a>
              info@pya.com
            </span>
            <span className="flex items-center gap-4 text-lg group">
              <a
                href="https://instagram.com/pya.devs"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110">
                <FaInstagram className="text-4xl text-gray-900 group-hover:text-gray-700" />
              </a>
              @pya.devs
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#a5c8d8] text-center p-6 md:p-20">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
          Llevá tu idea al siguiente nivel.
        </h2>
        <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6 max-w-2xl mx-auto">
          Transformamos tu visión en una web que impacta. Empezá hoy.
        </p>
      </div>
    </section>
  );
}

export default Contacto;
