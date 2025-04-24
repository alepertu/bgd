import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";

function Planes() {
  return (
    <section className="bg-[#e1edf2] p-6 md:p-20 flex flex-col items-center min-h-screen relative">
      <div className="mb-8 md:mb-12 text-center w-full">
        <h2 className="text-3xl md:text-6xl font-bold text-black">
          Planes de Diseño y Desarrollo Web
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto">
          Elegí el tipo de web que mejor se adapte a tus necesidades y lo
          hacemos realidad.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-24">
        {/* Tier 1 */}
        <div className="p-10 w-full md:w-96 flex flex-col text-left bg-[#e39a4d] text-[#452623] rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-l-2xl md:rounded-b-none">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold">Básica</h3>
            <span className="text-2xl font-bold">USD 199</span>
          </div>
          <p className="text-lg mb-4">
            Ideal para blogs personales, pequeñas tiendas o landing pages.
          </p>
          <ul className="flex-1 text-lg">
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Basada en plantilla
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Hasta 5 secciones
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Diseño responsive
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Integración con redes sociales
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Formularios de contacto básicos
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Capacitación autogestión
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Entrega en 7 días hábiles
            </li>
          </ul>
          <button className="mt-6 bg-[#452623] text-[#e39a4d] text-lg py-3 rounded-xl w-full hover:opacity-80 transition">
            Ver detalles
          </button>
        </div>

        {/* Tier 2 */}
        <div className="p-10 w-full md:w-96 flex flex-col text-left bg-[#cbb0eb] text-[#1f1738]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold">Personalizada</h3>
            <span className="text-2xl font-bold">USD 399</span>
          </div>
          <p className="text-lg mb-4">
            Para marcas con identidad visual definida que buscan algo único.
          </p>
          <ul className="flex-1 text-lg">
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" />
              Todo lo de <span className="font-bold ml-1">Básica</span>
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Diseño desde cero
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Revisión UX
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Hasta 8 páginas
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Integraciones específicas
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Edición de imágenes ligera
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Dominio y hosting por 1 año
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Entrega en 10–14 días hábiles
            </li>
          </ul>
          <button className="mt-6 bg-[#1f1738] text-[#cbb0eb] text-lg py-3 rounded-xl w-full hover:opacity-80 transition">
            Ver detalles
          </button>
        </div>

        {/* Tier 3 */}
        <div className="p-10 w-full md:w-96 flex flex-col text-left bg-[#a5c8d8] text-[#10242f] rounded-b-2xl md:rounded-br-2xl md:rounded-bl-none md:rounded-tr-2xl md:rounded-t-none">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold">A Medida</h3>
            <span className="text-xl font-semibold">Sol. presupuesto</span>
          </div>
          <p className="text-lg mb-4">
            Para quienes necesitan más que una web: apps o sistemas únicos.
          </p>
          <ul className="flex-1 text-lg">
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Análisis de necesidades
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Desarrollo desde cero
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Integraciones complejas
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Diseño adaptado a tu flujo
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Soporte post-entrega extendido
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Entrega desde 3 semanas
            </li>
          </ul>
          <button className="mt-6 bg-[#10242f] text-[#a5c8d8] text-lg py-3 rounded-xl w-full hover:opacity-80 transition">
            Ver detalles
          </button>
        </div>
      </div>

      {/* Versión MOBILE */}
      <svg
        className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#a5c8d8" />
      </svg>

      {/* Versión DESKTOP */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#a5c8d8" />
      </svg>
    </section>
  );
}

export default Planes;
