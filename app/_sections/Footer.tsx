import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#a5c8d8] p-6 md:p-10 text-center text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-base md:text-lg font-semibold">
          &copy; {new Date().getFullYear()} PYA. Todos los derechos reservados.
        </p>
        {/* <nav className="flex space-x-4 md:space-x-6">
          <a
            href="#"
            className="text-base md:text-lg hover:text-white transition-colors">
            Términos
          </a>
          <a
            href="#"
            className="text-base md:text-lg hover:text-white transition-colors">
            Privacidad
          </a>
          <a
            href="#"
            className="text-base md:text-lg hover:text-white transition-colors">
            Contacto
          </a>
        </nav> */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/pya.devs"
            className="text-xl md:text-2xl hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a
            href="mailto:info@pya.uy"
            className="text-xl md:text-2xl hover:text-white transition-colors">
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/+59897827767"
            className="text-xl md:text-2xl hover:text-white transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
