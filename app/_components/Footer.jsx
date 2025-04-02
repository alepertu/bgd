import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-uy-blue-50 p-10 text-center text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} PYA. Todos los derechos reservados.
        </p>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-lg hover:text-white">
            Términos
          </a>
          <a href="#" className="text-lg hover:text-white">
            Privacidad
          </a>
          <a href="#" className="text-lg hover:text-white">
            Contacto
          </a>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-2xl hover:text-white">
            <FaInstagram />
          </a>
          <a
            href="mailto:correo@example.com"
            className="text-2xl hover:text-white"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/123456789"
            className="text-2xl hover:text-white"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
