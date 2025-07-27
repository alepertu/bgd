import { FaCheckCircle } from 'react-icons/fa';
import Plan from '../_components/Plan';

function Planes() {
  return (
    <section className="bg-[#e1edf2] p-4 md:p-6 lg:p-20 flex flex-col items-center min-h-screen relative">
      <div className="mb-6 md:mb-8 lg:mb-12 text-center w-full max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-black">
          Planes de Diseño y Desarrollo Web
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-3 md:mt-4 lg:mt-6 mx-auto">
          Elegí el tipo de web que mejor se adapte a tus necesidades y lo
          hacemos realidad.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto mb-24">
        {/* Tier 1 */}
        <Plan
          title="Starter"
          description="Ideal para blogs personales, pequeñas tiendas o landing pages."
          price={449}
          bgColor="#e39a4d"
          txtColor="#452623"
          bullets={[
            'Basado en una plantilla profesional',
            'Hasta 4 secciones de contenido',
            'Integración con redes sociales',
            'Entrega en 7 días hábiles',
          ]}
        />

        <Plan
          title="Pro"
          description="Para marcas con identidad visual definida que buscan algo único."
          price={999}
          bgColor="#cbb0eb"
          txtColor="#1f1738"
          bullets={[
            'Todo lo de Starter',
            'Diseño multipágina desde cero',
            'Dominio y hosting por 1 año',
            'Entrega en 10-14 días hábiles',
          ]}
        />

        <Plan
          title="A Medida"
          description="Para quienes necesitan más que una web: apps o sistemas únicos."
          bgColor="#a5c8d8"
          txtColor="#10242f"
          bullets={[
            'Análisis de necesidades',
            'Desarrollo desde cero',
            'Soporte post-entrega extendido',
            'Entrega desde 3 semanas',
          ]}
        />
      </div>

      {/* Versión MOBILE */}
      <svg
        className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#a5c8d8" />
      </svg>

      {/* Versión DESKTOP */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#a5c8d8" />
      </svg>
    </section>
  );
}

export default Planes;
