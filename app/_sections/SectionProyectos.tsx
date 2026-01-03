import Proyecto from '../_components/cards/ProyectoCard';
import CampoNorte from '../../public/images/proyectos/CampoNorte.webp';
import Givt from '../../public/images/proyectos/Givt.webp';
import Norkent from '../../public/images/proyectos/Norkent.webp';

function Proyectos() {
  return (
    <section
      id="proyectos"
      className="bg-blue-50 min-h-screen relative overflow-hidden scroll-mt-[72px] md:scroll-mt-[88px]">
      <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-black">
            Ellos confiaron en nosotros,
            <br />
            ¿vos qué esperás?
          </h2>
          <h3 className="text-lg md:text-xl text-gray-600 mt-4 md:mt-6 max-w-3xl mx-auto">
          Diseño de <strong>páginas web</strong> pensado para potenciar tu negocio. Creamos el <strong>presupuesto para página web</strong> que tu <strong>emprendimiento</strong> necesita.
          </h3>
        </div>

        <div className="mt-12 space-y-8 md:space-y-12">
          <Proyecto
            img={Givt}
            nombre="Givt - Plataforma de Donaciones"
            descrip="Como desarrolladores de sitios webs en Uruguay, creamos junto al equipo de Givt una plataforma de recaudación de fondos para ONGs. Esta página web para vender productos solidarios y gestionar donaciones seguras es un ejemplo de nuestro servicio de diseño y desarrollo web en Uruguay para emprendimientos sociales."
            link="https://givt.uy/"
            tecnologias={[
              { nombre: 'PHP', icono: 'php.svg' },
              { nombre: 'Symfony', icono: 'symfony.svg' },
              { nombre: 'MySQL', icono: 'mysql.svg' },
              { nombre: 'Bootstrap', icono: 'bootstrap.svg' },
              { nombre: 'AWS', icono: 'aws.svg' },
              { nombre: 'JavaScript', icono: 'js.svg' },
            ]}
          />

          <Proyecto
            img={Norkent}
            nombre="Norkent - Gestión de asistencia y turnos"
            descrip="Especializados en desarrollo web, diseñamos este sistema SaaS para optimizar la gestión de asistencia. Si buscás cuánto cuesta una página web de gestión o necesitás hacer una página web rápido y eficiente, este proyecto refleja nuestra capacidad técnica como diseñadores web expertos."
            link="https://norkent.com/es"
            tecnologias={[
              { nombre: 'Next.js', icono: 'next.svg' },
              { nombre: 'Tailwind CSS', icono: 'css.svg' },
              { nombre: 'Supabase', icono: 'js.svg' },
              { nombre: 'Auth.js', icono: 'js.svg' },
              { nombre: 'Cloudinary', icono: 'js.svg' },
              { nombre: 'Resend', icono: 'js.svg' },
              { nombre: 'Vercel', icono: 'js.svg' },
              { nombre: 'PostHog', icono: 'next.svg' },
            ]}
          />

          <Proyecto
            img={CampoNorte}
            nombre="CampoNorte - Landing Page"
            descrip="Desarrollamos esta página web para una empresa agropecuaria enfocada en captar clientes en Uruguay. Como empresa de diseño web, trabajamos con pequeñas y medianas empresas, priorizando una estética profesional y funcional, ideal para quienes buscan un presupuesto para página web con resultados reales."
            link="https://camponorte.uy/"
            tecnologias={[
              { nombre: 'React', icono: 'react.svg' },
              { nombre: 'Next.js', icono: 'next.svg' },
              { nombre: 'TypeScript', icono: 'js.svg' },
              { nombre: 'Tailwind CSS', icono: 'css.svg' },
              { nombre: 'Node.js', icono: 'node.svg' },
            ]}
          />
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

export default Proyectos;
