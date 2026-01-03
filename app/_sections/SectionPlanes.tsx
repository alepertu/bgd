"use client";

import { useRouter } from 'next/navigation';
import Plan from '../_components/cards/PlanCard';
import Button from '../_components/ui/Button';

function Planes() {
  const router = useRouter();

  const handleNavigateToServicios = () => {
    router.push('/servicios');
  };
  return (
    <section id="planes" className="bg-blue-50 min-h-screen relative overflow-hidden">
      <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-black">
            Planes de Diseño y
            Desarrollo Web
          </h2>
          <h3 className="text-lg md:text-xl text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto">
          Elegí el tipo de <strong>página web</strong> que mejor se adapte a tus necesidades y la hacemos realidad con un <strong>diseño web profesional</strong>.
          </h3>
        </div>

        <div className="flex flex-col md:flex-row mb-12">
          {/* Plan Starter */}
          <Plan
            title="Starter"
            description="Perfecto para blogs, tiendas pequeñas o landing pages con presencia online profesional."
            price={449}
            bgColor="#BCC6FF"
            txtColor="#1e293b"
            bullets={[
              'Plantilla profesional',
              'Hasta 4 secciones',
              'Redes sociales integradas',
              'Entrega en 7 días',
              'Soporte 30 días',
            ]}
          />

          {/* Plan Pro */}
          <Plan
            title="Pro"
            description="Para marcas que buscan diseño único y personalizado para destacar online."
            price={999}
            bgColor="#FCEEB3"
            txtColor="#1e293b"
            bullets={[
              'Todo lo de Starter',
              'Diseño multipágina desde cero',
              'Dominio y hosting 1 año',
              'Entrega 10-14 días',
              'Soporte 90 días',
              'SEO básico incluido',
            ]}
          />

          {/* Plan A Medida */}
          <Plan
            title="A Medida"
            description="Para aplicaciones web complejas y sistemas únicos desarrollados a medida."
            bgColor="#FCDCBC"
            txtColor="#1e293b"
            bullets={[
              'Análisis detallado',
              'Desarrollo desde cero',
              'Entrega desde 3 semanas',
              'Soporte 6 meses',
              'SEO avanzado',
              'APIs externas',
            ]}
          />
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Button
            onClick={handleNavigateToServicios}
            variant="primary"
            size="md"
            className="px-8">
            Conocé nuestros servicios
          </Button>
        </div>

        {/* Versión MOBILE */}
        <svg
          className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#FCDCBC" />
        </svg>

        {/* Versión DESKTOP */}
        <svg
          className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#FCDCBC" />
        </svg>
      </div>
    </section>
  );
}

export default Planes;
