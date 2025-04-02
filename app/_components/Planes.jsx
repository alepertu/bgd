import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";

function Planes() {
  return (
    <section className="bg-white p-6 md:p-20 flex flex-col items-center min-h-screen">
      <div className="mb-8 md:mb-12 text-center w-full">
        <h2 className="text-3xl md:text-6xl font-bold text-black">
          Planes de Diseño y Desarrollo Web
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Plan 1 */}
        <div className="p-10 w-full md:w-96 flex flex-col text-left bg-[#e39a4d] text-[#452623] rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-l-2xl md:rounded-b-none">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-4xl font-bold">Básico</h3>
            <span className="text-3xl font-bold">$50</span>
          </div>
          <p className="text-lg mb-4">
            Ideal para pequeñas empresas y emprendedores.
          </p>
          <ul className="flex-1 text-lg">
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Diseño web responsive
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Hasta 3 páginas
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Hosting incluido
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Dominio gratuito (1 año)
            </li>
            <li className="mb-3 flex items-center opacity-50">
              <FaTimesCircle className="mr-2" /> Tienda en línea
            </li>
            <li className="mb-3 flex items-center opacity-50">
              <FaTimesCircle className="mr-2" /> SEO avanzado
            </li>
            <li className="mb-3 flex items-center opacity-50">
              <FaTimesCircle className="mr-2" /> Integraciones personalizadas
            </li>
          </ul>
          <button className="mt-6 bg-[#452623] text-[#e39a4d] text-lg py-3 rounded-xl w-full hover:opacity-80 transition">
            Ver detalles
          </button>
        </div>

        {/* Plan 2 */}
        <div className="p-10 w-full md:w-96 flex flex-col text-left bg-[#cbb0eb] text-[#1f1738]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-4xl font-bold">Profesional</h3>
            <span className="text-3xl font-bold">$100</span>
          </div>
          <p className="text-lg mb-4">
            Para negocios en crecimiento que necesitan más funciones.
          </p>
          <ul className="flex-1 text-lg">
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Diseño web personalizado
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Hasta 10 páginas
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Optimización SEO básica
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Soporte técnico 24/7
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Tienda en línea
            </li>
            <li className="mb-3 flex items-center opacity-50">
              <FaTimesCircle className="mr-2" /> SEO avanzado
            </li>
            <li className="mb-3 flex items-center opacity-50">
              <FaTimesCircle className="mr-2" /> Integraciones personalizadas
            </li>
          </ul>
          <button className="mt-6 bg-[#1f1738] text-[#cbb0eb] text-lg py-3 rounded-xl w-full hover:opacity-80 transition">
            Ver detalles
          </button>
        </div>

        {/* Plan 3 */}
        <div className="p-10 w-full md:w-96 flex flex-col text-left bg-[#a5c8d8] text-[#10242f] rounded-b-2xl md:rounded-br-2xl md:rounded-bl-none md:rounded-tr-2xl md:rounded-t-none">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-4xl font-bold">Empresarial</h3>
            <span className="text-3xl font-bold">$200</span>
          </div>
          <p className="text-lg mb-4">
            Para empresas consolidadas que necesitan soluciones avanzadas.
          </p>
          <ul className="flex-1 text-lg">
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Diseño web premium
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Páginas ilimitadas
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> SEO avanzado
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Tienda en línea
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Integraciones personalizadas
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Analítica avanzada
            </li>
            <li className="mb-3 flex items-center">
              <FaCheckCircle className="mr-2" /> Soporte VIP 24/7
            </li>
          </ul>
          <button className="mt-6 bg-[#10242f] text-[#a5c8d8] text-lg py-3 rounded-xl w-full hover:opacity-80 transition">
            Ver detalles
          </button>
        </div>
      </div>
    </section>
  );
}

export default Planes;
