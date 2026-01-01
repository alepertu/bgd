import Footer from '../_components/Footer.tsx';
import Header from '../_components/Header.tsx';

export const metadata = {
  title: 'Servicios de Desarrollo Web y Apps | PYA DEVS',
  description:
    'Ofrecemos servicios de desarrollo web, aplicaciones móviles, tiendas online y soluciones digitales personalizadas en Uruguay.',
  keywords: [
    'servicios desarrollo web uruguay',
    'desarrollo de aplicaciones',
    'tiendas online',
    'landing pages',
    'apps móviles',
    'PYA DEVS servicios',
    'programación uruguay',
  ],
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios de Desarrollo Web y Apps | PYA DEVS',
    description:
      'Ofrecemos servicios de desarrollo web, aplicaciones móviles, tiendas online y soluciones digitales personalizadas en Uruguay.',
    url: 'https://pya.uy/servicios',
    type: 'website',
  },
};

function Servicios() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#EFF6FF] min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 md:mb-8">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Soluciones digitales completas para hacer crecer tu negocio en
              línea
            </p>
          </div>

          {/* Wave SVG */}
          <svg
            className="absolute bottom-0 left-0 w-full h-20 md:h-36 z-10 pointer-events-none"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            aria-hidden="true">
            <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#BCC6FF" />
          </svg>
        </section>

        {/* Desarrollo Web */}
        <section className="bg-[#BCC6FF] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Desarrollo Web
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Creamos sitios web modernos, rápidos y optimizados para
                convertir visitantes en clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Sitios Web Corporativos
                </h3>
                <p className="text-gray-700 mb-4">
                  Diseñamos y desarrollamos sitios web profesionales que
                  representan tu marca y conectan con tu audiencia.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Diseño responsive y moderno</li>
                  <li>Optimización SEO</li>
                  <li>Integración con redes sociales</li>
                  <li>Panel de administración</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Landing Pages
                </h3>
                <p className="text-gray-700 mb-4">
                  Páginas de aterrizaje optimizadas para maximizar conversiones
                  y generar leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Diseño enfocado en conversión</li>
                  <li>Formularios de contacto</li>
                  <li>Integración con herramientas de marketing</li>
                  <li>Análisis y seguimiento</li>
                </ul>
              </div>
            </div>

            {/* Wave SVG */}
            <svg
              className="absolute bottom-0 left-0 w-full h-20 md:h-36 z-10 pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              aria-hidden="true">
              <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#FCEEB3" />
            </svg>
          </div>
        </section>

        {/* E-commerce */}
        <section className="bg-[#FCEEB3] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Tiendas Online
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Plataformas de e-commerce completas para vender tus productos
                en línea de forma segura y eficiente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Catálogo de Productos
                </h3>
                <p className="text-gray-700 mb-4">
                  Gestión completa de productos con imágenes, descripciones y
                  variantes.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gestión de inventario</li>
                  <li>Múltiples categorías</li>
                  <li>Búsqueda y filtros avanzados</li>
                  <li>Galería de imágenes</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Procesamiento de Pagos
                </h3>
                <p className="text-gray-700 mb-4">
                  Integración con pasarelas de pago seguras y confiables.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Múltiples métodos de pago</li>
                  <li>Procesamiento seguro</li>
                  <li>Facturación automática</li>
                  <li>Gestión de envíos</li>
                </ul>
              </div>
            </div>

            {/* Wave SVG */}
            <svg
              className="absolute bottom-0 left-0 w-full h-20 md:h-36 z-10 pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              aria-hidden="true">
              <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#FCDCBC" />
            </svg>
          </div>
        </section>

        {/* Aplicaciones */}
        <section className="bg-[#FCDCBC] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Aplicaciones Web y Móviles
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Desarrollamos aplicaciones personalizadas que se adaptan a las
                necesidades específicas de tu negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Aplicaciones Web
                </h3>
                <p className="text-gray-700 mb-4">
                  Sistemas web complejos con funcionalidades avanzadas y
                  personalizadas.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Interfaces intuitivas</li>
                  <li>APIs y integraciones</li>
                  <li>Bases de datos personalizadas</li>
                  <li>Autenticación y seguridad</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Aplicaciones Móviles
                </h3>
                <p className="text-gray-700 mb-4">
                  Apps nativas y multiplataforma para iOS y Android.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Diseño nativo</li>
                  <li>Alto rendimiento</li>
                  <li>Notificaciones push</li>
                  <li>Integración con servicios</li>
                </ul>
              </div>
            </div>

            {/* Wave SVG */}
            <svg
              className="absolute bottom-0 left-0 w-full h-20 md:h-36 z-10 pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              aria-hidden="true">
              <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#EFF6FF" />
            </svg>
          </div>
        </section>

        {/* Servicios Adicionales */}
        <section className="bg-[#EFF6FF] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Servicios Adicionales
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mt-4 md:mt-6 max-w-3xl mx-auto">
                Complementamos tu proyecto digital con servicios profesionales
                adicionales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  SEO y Marketing
                </h3>
                <p className="text-gray-700">
                  Optimización para motores de búsqueda y estrategias de
                  marketing digital.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Mantenimiento
                </h3>
                <p className="text-gray-700">
                  Soporte continuo, actualizaciones y mejoras para mantener tu
                  sitio funcionando perfectamente.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Hosting y Dominio
                </h3>
                <p className="text-gray-700">
                  Configuración y gestión de hosting, dominios y certificados
                  SSL.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Diseño Gráfico y Branding
                </h3>
                <p className="text-gray-700">
                  Creación de identidad visual, logos, material gráfico y
                  diseño de marca profesional.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Consultoría Tecnológica
                </h3>
                <p className="text-gray-700">
                  Asesoramiento estratégico para optimizar procesos y tomar
                  decisiones tecnológicas informadas.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  Integración de Sistemas
                </h3>
                <p className="text-gray-700">
                  Conexión de tu plataforma con APIs, servicios externos y
                  sistemas de terceros.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Servicios;

