import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

{
  /*
  import "./css/estilo-contactanosb1.css";
  import wpp from "../../public/images/iconos/whatsapp.svg";
  import mail from "../../public/images/iconos/mail.svg";
  import Image from "next/image";
  */
}

function Contacto() {
  return (
    <section className="bg-[#a5c8d8] p-4 md:p-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
        <div className="w-full md:w-2/3">
          <div className="mb-6 md:mb-8 lg:mb-12 text-center w-full">
            <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-gray-900">
              ¡Contáctanos!
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-3 md:mt-4 lg:mt-6 max-w-2xl mx-auto">
              Comparte tu idea con nosotros, queremos escucharte.
            </p>
          </div>
          <form className="w-full max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="flex flex-col gap-4 md:col-span-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="p-3 border rounded-3xl w-full placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300"
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="p-3 border rounded-3xl w-full placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300"
                />
                <input
                  type="text"
                  placeholder="Nombre del proyecto"
                  className="p-3 border rounded-3xl w-full placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300"
                />
                <select className="p-3 border rounded-3xl w-full text-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300">
                  <option className="text-[#a5c8d8]">Plan deseado</option>
                </select>
              </div>
              <div className="flex flex-col gap-4 h-full flex-1 md:col-span-3">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="p-3 border rounded-3xl w-full placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300"
                />
                <textarea
                  placeholder="Cuéntanos tu idea"
                  className="p-3 border rounded-3xl w-full h-40 md:h-32 box-border placeholder-[#a5c8d8] focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-transparent transition-shadow duration-300 resize-none"></textarea>
              </div>
            </div>
            <button className="bg-gray-900 text-white py-2 md:py-3 px-8 md:px-12 rounded-3xl mt-6 w-full md:w-auto hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md">
              ¡Enviar idea!
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/3 text-gray-900 text-left">
          <p className="mb-4 md:mb-6 text-base md:text-xl leading-relaxed">
            ¡Estamos dispuestos a aclarar todas tus dudas!
            <br />
            <br />
            Nos pondremos en contacto contigo enseguida, a través del e-mail que
            ingreses.
            <br />
          </p>
          <h3 className="text-2xl font-bold mb-6">También puedes...</h3>
          <div className="contactos flex flex-col gap-6">
            <span className="flex items-center gap-4 text-lg group">
              <a
                href="https://wa.me/097827767"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110">
                <FaWhatsapp className="text-4xl text-gray-900 group-hover:text-gray-700" />
              </a>
              097 827 767
            </span>
            <span className="flex items-center gap-4 text-lg group">
              <a
                href="mailto:bgdesarrollouy@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110">
                <FaEnvelope className="text-4xl text-gray-900 group-hover:text-gray-700" />
              </a>
              bgdesarrollouy@gmail.com
            </span>
            <span className="flex items-center gap-4 text-lg group">
              <a
                href="https://instagram.com/pya.dev"
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-110">
                <FaInstagram className="text-4xl text-gray-900 group-hover:text-gray-700" />
              </a>
              @pya.dev
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
