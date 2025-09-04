import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#FCEEB3] p-6 md:p-10 text-center text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-base md:text-lg font-semibold">
          &copy; {new Date().getFullYear()} PYA. Todos los derechos reservados.
        </p>
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
