import AlePertusatti from '../../public/images/nosotros/Alejandro Pertusatti.webp';
import PiaMachado from '../../public/images/nosotros/Pía Machado.webp';
import ThiagoSilveira from '../../public/images/nosotros/Thiago Silveira.webp';
import GrupoPYA from '../../public/images/600x400.webp';
import TeamCard from '../_components/cards/TeamCard';
import Footer from '../_components/Footer.tsx';
import Header from '../_components/Header.tsx';
import Image from 'next/image';

function getAge(birthDateString: string): number {
  return Math.floor(
    (Date.now() - new Date(birthDateString).getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  );
}

export const metadata = {
  title: 'Sobre Nosotros | PYA DEVS - Equipo de Desarrollo Uruguay',
  description:
    'Conoce al equipo de PYA DEVS. Somos un grupo de desarrolladores uruguayos apasionados por crear soluciones digitales innovadoras y de calidad.',
  keywords: [
    'equipo desarrollo uruguay',
    'PYA DEVS equipo',
    'desarrolladores uruguay',
    'programadores montevideo',
    'nosotros PYA',
  ],
  alternates: {
    canonical: '/nosotros',
  },
  openGraph: {
    title: 'Sobre Nosotros | PYA DEVS - Equipo de Desarrollo Uruguay',
    description:
      'Conoce al equipo de PYA DEVS. Somos un grupo de desarrolladores uruguayos apasionados por crear soluciones digitales innovadoras.',
    url: 'https://pya.uy/nosotros',
    type: 'website',
  },
};

function Nosotros() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#FCDCBC] min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            {/* Título inicial */}
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black text-left">
                La historia de PYA
              </h2>
            </div>

            {/* Contenedor con imagen a la izquierda y contenido a la derecha */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Imagen a la izquierda */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={GrupoPYA}
                    alt="Equipo de PYA DEVs"
                    className="object-cover w-full h-full"
                    width={600}
                    height={450}
                  />
                </div>
              </div>

              {/* Contenido a la derecha */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-2xl md:text-4xl font-bold text-black mb-6">
                  Nuestra Historia
                </h3>
                <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-700">
                  <p>
                    PYA nació de la pasión por la tecnología y el deseo de crear
                    soluciones digitales que realmente marquen la diferencia. Somos
                    un equipo joven y dinámico, formado por profesionales que
                    combinan experiencia técnica con creatividad e innovación.
                  </p>

                  <p>
                    Nos especializamos en el desarrollo de sitios web, aplicaciones
                    móviles y sistemas personalizados. Trabajamos con tecnologías de
                    vanguardia para ofrecer productos de alta calidad que se adaptan
                    a las necesidades específicas de cada cliente.
                  </p>

                </div>
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

        {/* Propuesta de valor unica */}
        <section className="bg-[#EFF6FF] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            {/* Título inicial */}
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black text-right">
                Propuesta de valor
              </h2>
            </div>

            {/* Contenedor con contenido a la izquierda e imagen a la derecha */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Contenido a la izquierda */}
              <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
                <h3 className="text-2xl md:text-4xl font-bold text-black mb-6">
                  ¿Por qué elegir PYA?
                </h3>
                <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-700">
                  <p>
                    En PYA no solo desarrollamos código, creamos <strong className="text-black">soluciones que transforman negocios</strong>.
                    Nuestra propuesta de valor única radica en combinar la agilidad de un equipo joven
                    con la rigurosidad de profesionales multidisciplinarios.
                  </p>

                  <p>
                    A diferencia de agencias tradicionales, trabajamos <strong className="text-black">directamente contigo</strong>,
                    sin intermediarios. Esto nos permite entender profundamente tu visión y traducirla
                    en productos digitales que realmente funcionan.
                  </p>
                </div>
              </div>

              {/* Imagen a la derecha */}
              <div className="w-full md:w-1/2 flex-shrink-0 order-1 md:order-2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={GrupoPYA}
                    alt="Equipo de PYA DEVs"
                    className="object-cover w-full h-full"
                    width={600}
                    height={450}
                  />
                </div>
              </div>
            </div>

            {/* Wave SVG */}
            <svg
              className="absolute bottom-0 left-0 w-full h-20 md:h-36 z-10 pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              aria-hidden="true">
              <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#BCC6FF" />
            </svg>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="bg-[#BCC6FF] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Nuestro Equipo
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Conoce a las personas detrás de PYA. Un equipo multidisciplinario
                con diferentes perspectivas y habilidades complementarias.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-5 w-full max-w-5xl justify-center mb-12">
              <TeamCard
                image={AlePertusatti}
                name="Alejandro Pertusatti"
                role="Technical Leader"
                description={`Soy Ale, tengo ${getAge(
                  '1998-12-01'
                )} años. Soy estudiante de Químico Farmacéutico en UdelaR. Me gusta conocer lugares nuevos, y disfruto del tiempo de calidad en familia.`}
                altText="Alejandro Pertusatti"
              />
              <TeamCard
                image={PiaMachado}
                name="Pía Machado"
                role="Project Leader"
                description={`Soy Pía, tengo ${getAge(
                  '1998-12-27'
                )} años. Me titulé como Analista en Programación en 2020, y estudio Ingeniería Química en UdelaR. Además de programar, disfruto de la música y de viajar.`}
                altText="Pía Machado"
              />
              <TeamCard
                image={ThiagoSilveira}
                name="Thiago Silveira"
                role="Product Developer"
                description={`Soy Thiago, tengo ${getAge(
                  '2007-02-04'
                )} años. Estudio Ingeniería Informática en UdelaR. Me apasiona aprender y crear cosas nuevas.`}
                altText="Thiago Silveira"
              />
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

        {/* Nuestros Valores */}
        <section className="bg-[#FCEEB3] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Nuestros Valores
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Los principios que guían nuestro trabajo y nuestra relación con
                cada cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Calidad
                </h3>
                <p className="text-gray-700">
                  Nos comprometemos a entregar productos de la más alta calidad,
                  utilizando las mejores prácticas de desarrollo y tecnologías
                  modernas.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Transparencia
                </h3>
                <p className="text-gray-700">
                  Mantenemos una comunicación clara y honesta en cada etapa del
                  proyecto, desde la planificación hasta la entrega final.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Innovación
                </h3>
                <p className="text-gray-700">
                  Estamos siempre al día con las últimas tendencias tecnológicas
                  para ofrecer soluciones innovadoras y eficientes.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#543E27] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Compromiso
                </h3>
                <p className="text-gray-700">
                  Nos comprometemos con el éxito de cada proyecto y trabajamos
                  incansablemente para superar las expectativas de nuestros
                  clientes.
                </p>
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

        {/* Nuestra Misión y Visión */}
        <section className="bg-[#FCDCBC] min-h-screen relative overflow-hidden">
          <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-black">
                Nuestra Misión y Visión
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mt-4 md:mt-6 max-w-3xl mx-auto">
                Nuestro propósito actual y el camino que estamos trazando para el futuro de nuestra empresa.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12">
              {/* Misión */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl border-2 border-[#543E27] p-8 md:p-12 h-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-left ">
                    Nuestra Misión
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 text-left leading-relaxed">
                    Nuestra misión es democratizar el acceso a soluciones digitales
                    de calidad, ayudando a emprendedores, startups y empresas a
                    alcanzar sus objetivos en el mundo digital. Creemos que cada idea
                    merece una oportunidad de brillar, y trabajamos para hacer que
                    eso suceda.
                  </p>
                </div>
              </div>

              {/* Visión */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl border-2 border-[#543E27] p-8 md:p-12 h-full ">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-left">
                    Nuestra Visión
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 text-left leading-relaxed">
                    Ser reconocidos como el equipo de desarrollo líder en Uruguay,
                    destacándonos por nuestra innovación, calidad y compromiso con
                    el éxito de nuestros clientes. Aspiramos a ser el socio tecnológico
                    de confianza que transforma ideas en realidades digitales exitosas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Nosotros;

