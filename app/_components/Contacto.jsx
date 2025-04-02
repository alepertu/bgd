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
    <section className="bg-[#9CA7E6] p-6 py-12 md:p-20">
      <div className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-5xl mx-auto">
        <div className="w-full md:w-2/3">
          <div className="mb-8 md:mb-12 text-center w-full">
            <h2 className="text-3xl md:text-6xl font-bold text-white">
              ¡Contáctanos!
            </h2>
            <p className="text-base md:text-lg text-white mt-4 md:mt-6 max-w-2xl mx-auto">
              Comparte tu idea con nosotros, queremos escucharte.
            </p>
          </div>
          <form className="w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="flex flex-col gap-4 md:col-span-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="p-3 border rounded-3xl w-full placeholder-[#9CA7E6]"
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="p-3 border rounded-3xl w-full placeholder-[#9CA7E6]"
                />
                <input
                  type="text"
                  placeholder="Nombre del proyecto"
                  className="p-3 border rounded-3xl w-full placeholder-[#9CA7E6]"
                />
                <select className="p-3 border rounded-3xl w-full text-[#9CA7E6]">
                  <option className="text-[#9CA7E6]">Plan deseado</option>
                </select>
              </div>
              <div className="flex flex-col gap-4 h-full flex-1 md:col-span-3">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="p-3 border rounded-3xl w-full placeholder-[#9CA7E6]"
                />
                <textarea
                  placeholder="Cuéntanos tu idea"
                  className="p-3 border rounded-3xl w-full h-40 md:h-32 box-border placeholder-[#9CA7E6]"
                ></textarea>
              </div>
            </div>
            <button className="bg-[#343854] text-white py-3 px-12 rounded-3xl mt-4 w-full md:w-auto">
              ¡Enviar idea!
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/3 text-white text-left">
          <p className="mb-6 text-xl">
            ¡Estamos dispuestos a aclarar todas tus dudas!
            <br />
            <br />
            Nos pondremos en contacto contigo enseguida, a través del e-mail que
            ingreses.
            <br />
          </p>
          <h3 className="text-2xl font-bold mb-6">También puedes...</h3>
          <div className="contactos flex flex-col gap-6">
            <span className="flex items-center gap-4 text-lg">
              <a
                href="https://wa.me/097827767"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-4xl text-white" />
              </a>
              097 827 767
            </span>
            <span className="flex items-center gap-4 text-lg">
              <a
                href="mailto:bgdesarrollouy@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="text-4xl text-white" />
              </a>
              bgdesarrollouy@gmail.com
            </span>
            <span className="flex items-center gap-4 text-lg">
              <a
                href="https://instagram.com/pya.dev"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-4xl text-white" />
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
