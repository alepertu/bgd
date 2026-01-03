import Footer from '../_components/Footer.tsx';
import Header from '../_components/Header.tsx';

export const metadata = {
  title: 'Diseño Web y Desarrollo Web en Uruguay | PYA DEVS',
  description:
    'Somos diseñadores web y desarrolladores web en Uruguay. Creamos páginas web para emprendimientos, empresas y tiendas online. Solicita tu presupuesto página web.',
  keywords: [
    'diseño web',
    'desarrollo web',
    'diseñadores web',
    'desarrolladores web',
    'páginas web',
    'empresas de paginas web en uruguay',
    'desarrolladores de sitios webs en uruguay',
    'página web para emprendimiento',
    'página web para vender productos',
    'hacer página web en Uruguay',
    'cuánto cuesta una página web',
    'presupuesto página web',
    'hacer página web rápido',
    'diseño y desarrollo web en Uruguay para emprendimientos',
    'cuánto cuesta hacer una página web en Uruguay',
    'empresa de diseño web en Uruguay para pequeñas empresas',
    'hacer página web para emprendimiento en Uruguay',
    'presupuesto para página web en Uruguay',
  ],
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Diseño Web y Desarrollo Web | PYA DEVS',
    description:
      'Somos diseñadores web y desarrolladores web uruguayos. Creamos páginas web para emprendimientos, empresas y tiendas online. Solicita tu presupuesto página web.',
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
            Diseño y desarrollo web profesional para empresas y emprendimientos. Páginas web modernas que hacen crecer tu negocio.
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
                Desarrollo Web y Diseño Web Profesional
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Nuestro equipo de desarrolladores y diseñadores crea sitios modernos, rápidos y optimizados para convertir visitantes en clientes. Especialistas en diseño y desarrollo web en Uruguay para empresas y emprendimientos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                <strong>Sitios Web</strong> Corporativos
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestros diseñadores y desarrolladores crean sitios profesionales que representan tu marca y conectan con tu audiencia. Diseño web personalizado para empresas en Uruguay.
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
                  <strong>Páginas Web</strong> para <strong>Emprendimientos</strong>
                </h3>
                <p className="text-gray-700 mb-4">
                  Creamos páginas web para emprendimiento con diseño optimizado para maximizar conversiones y generar leads. Ideal para hacer página web para emprendimiento en Uruguay de forma rápida y profesional.
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
                Páginas Web para Vender Productos
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Creamos páginas web para vender productos con diseño profesional. Nuestros desarrolladores construyen tiendas online completas para vender tus productos en línea de forma segura y eficiente en cualquier parte.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Catálogo de <strong>Productos</strong>
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
                  Procesamiento de <strong>Pagos</strong>
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
                Aplicaciones Web y Desarrollo Web Avanzado
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Nuestros desarrolladores crean aplicaciones personalizadas y sitios complejos que se adaptan a las necesidades específicas de tu negocio. Diseño y desarrollo web de alto nivel en Uruguay.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  <strong>Aplicaciones Web</strong>
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
                  <strong>Aplicaciones Móviles</strong>
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
                Servicios Adicionales de Diseño Web
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mt-4 md:mt-6 max-w-3xl mx-auto">
                Como empresa de diseño y desarrollo web para emprendedores y empresas, complementamos tu proyecto digital con servicios profesionales adicionales. Nuestros diseñadores y desarrolladores ofrecen soluciones completas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  <strong>Hosting</strong> y <strong>Dominio</strong>
                </h3>
                <p className="text-gray-700">
                  Configuración y gestión completa de hosting, dominios y certificados SSL. Te ayudamos a elegir el mejor plan y mantener tu sitio web funcionando de forma segura y estable.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  <strong>SEO</strong> y <strong>Marketing</strong>
                </h3>
                <p className="text-gray-700">
                  Optimización para motores de búsqueda y estrategias de marketing digital. Mejoramos tu visibilidad online y ayudamos a atraer más clientes potenciales a tu sitio web.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  <strong>Analítica Web</strong>
                </h3>
                <p className="text-gray-700">
                  Implementación de herramientas de análisis y seguimiento de métricas. Te ayudamos a entender el comportamiento de tus visitantes y optimizar tu sitio para mejorar conversiones.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  <strong>Mantenimiento</strong>
                </h3>
                <p className="text-gray-700">
                  Soporte continuo, actualizaciones de seguridad y mejoras regulares. Mantenemos tu sitio funcionando perfectamente y protegido contra amenazas y errores técnicos.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  <strong>Rediseño Web</strong>
                </h3>
                <p className="text-gray-700">
                  Modernización y actualización de sitios web existentes. Transformamos tu sitio actual en una plataforma moderna, rápida y optimizada para mejorar tu presencia digital.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  <strong>Consultoría</strong>
                </h3>
                <p className="text-gray-700">
                  Asesoramiento estratégico para optimizar procesos y tomar decisiones tecnológicas informadas. Te guiamos en la elección de las mejores soluciones para tu negocio digital.
                </p>
              </div>
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full h-20 md:h-36 z-10 pointer-events-none"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            aria-hidden="true">
            <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#BCC6FF" />
          </svg>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="bg-[#BCC6FF] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestros servicios de diseño y desarrollo web
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Cuánto cuesta una <strong>página web</strong>?
                </h3>
                <p className="text-gray-700">
                  El presupuesto página web varía según las necesidades de cada proyecto. Factores como el tipo de sitio (corporativo, e-commerce, landing page), funcionalidades requeridas, diseño personalizado y tiempo de desarrollo influyen en el costo. Ofrecemos presupuesto personalizado sin compromiso. Contáctanos para conocer cuánto cuesta hacer una página web en Uruguay según tu proyecto específico.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Cuánto tiempo tarda hacer <strong>página web</strong> en <strong>Uruguay</strong>?
                </h3>
                <p className="text-gray-700">
                  El tiempo de desarrollo depende de la complejidad del proyecto. Una página web para emprendimiento simple puede estar lista en 2-4 semanas, mientras que sitios más complejos o tiendas online pueden tomar 6-12 semanas. Si necesitas hacer página web rápido, trabajamos con metodologías ágiles para optimizar los tiempos sin comprometer la calidad.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Qué incluye el servicio de <strong>diseño web</strong>?
                </h3>
                <p className="text-gray-700">
                  Nuestros servicios de diseño y desarrollo web incluyen: diseño responsive adaptado a todos los dispositivos, optimización SEO básica, integración con redes sociales, panel de administración para gestionar contenido, certificado SSL, y capacitación para usar tu sitio. También ofrecemos servicios adicionales como hosting, mantenimiento y actualizaciones.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Ofrecen <strong>páginas web</strong> para <strong>emprendimientos</strong>?
                </h3>
                <p className="text-gray-700">
                  Sí, somos especialistas en diseño y desarrollo web en Uruguay para emprendimientos. Creamos páginas web para emprendimiento optimizadas para presupuestos ajustados y tiempos de entrega rápidos. Nuestros diseñadores y desarrolladores entienden las necesidades específicas de los emprendedores y ofrecen soluciones escalables que crecen con tu negocio.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Pueden crear una <strong>página web</strong> para vender <strong>productos</strong>?
                </h3>
                <p className="text-gray-700">
                  Absolutamente. Desarrollamos páginas web para vender productos con todas las funcionalidades necesarias: catálogo de productos, carrito de compras, procesamiento de pagos seguros, gestión de inventario, y sistema de envíos. Nuestros desarrolladores construyen tiendas online completas y funcionales para que puedas vender tus productos en línea de forma profesional.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Cómo funciona el proceso de <strong>desarrollo</strong>?
                </h3>
                <p className="text-gray-700">
                  Nuestro proceso incluye: consulta inicial para entender tus necesidades, propuesta y presupuesto página web personalizado, diseño de mockups para aprobación, desarrollo del sitio, pruebas y ajustes, y finalmente la entrega con capacitación. Mantenemos comunicación constante durante todo el proceso para asegurar que el resultado final cumpla con tus expectativas.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Ofrecen <strong>mantenimiento</strong> después del <strong>lanzamiento</strong>?
                </h3>
                <p className="text-gray-700">
                  Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, backups regulares, soporte técnico, y mejoras continuas. También podemos ayudarte con actualizaciones de contenido, optimizaciones SEO, y nuevas funcionalidades según las necesidades de tu negocio.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Trabajan con <strong>empresas pequeñas</strong> en <strong>Uruguay</strong>?
                </h3>
                <p className="text-gray-700">
                  Como empresa de diseño y desarrollo web para emprendedores y empresas, entendemos los desafíos y presupuestos de los negocios locales. Ofrecemos soluciones adaptadas a las necesidades y recursos de pequeñas empresas, con presupuestos flexibles y planes de pago que se ajustan a tu situación. Nuestros desarrolladores de sitios webs en Uruguay tienen experiencia trabajando con empresas de todos los tamaños.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Trabajan con <strong>empresas</strong> fuera de <strong>Uruguay</strong>?
                </h3>
                <p className="text-gray-700">
                  Sí, trabajamos con empresas y clientes de todo el mundo. Aunque estamos ubicados en Uruguay, nuestros servicios de diseño y desarrollo web están disponibles para empresas internacionales. Trabajamos de forma remota con clientes de diferentes países, adaptándonos a diferentes zonas horarias y métodos de comunicación. Ofrecemos la misma calidad y profesionalismo sin importar la ubicación de nuestros clientes.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  ¿Qué <strong>métodos de pago</strong> aceptan?
                </h3>
                <p className="text-gray-700">
                  Aceptamos diversos métodos de pago para facilitar la contratación de nuestros servicios. Trabajamos con transferencias bancarias, tarjetas de crédito y débito, y otros métodos de pago digitales. Ofrecemos planes de pago flexibles que se adaptan a tu presupuesto, incluyendo opciones de pago en cuotas para proyectos más grandes. Puedes consultar las opciones disponibles al solicitar tu presupuesto página web.
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

