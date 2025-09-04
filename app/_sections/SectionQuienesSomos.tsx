import AlePertusatti from '../../public/images/nosotros/Alejandro Pertusatti.webp';
import PiaMachado from '../../public/images/nosotros/Pía Machado.webp';
import ThiagoSilveira from '../../public/images/nosotros/Thiago Silveira.webp';
import TeamCard from '../_components/cards/TeamCard';

function QuienesSomos() {
  return (
    <section id="nosotros" className="bg-[#FCDCBC] min-h-screen relative overflow-hidden">
      <div className="max-w-5xl mx-auto md:pb-32 pb-16 md:pt-12 pt-16 md:px-0 px-6">

        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-black">
            Pero... ¿Quiénes somos?
          </h2>
          <p className="text-lg md:text-xl text-gray-900 mt-4 md:mt-6 max-w-3xl mx-auto">
            Somos PYA, un equipo de desarrollo uruguayo que se especializa en crear sitios web y aplicaciones modernas.
            Trabajamos para hacer realidad tus ideas digitales.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-5 w-full max-w-5xl justify-center mb-12 ">
          <TeamCard
            image={AlePertusatti}
            name="Alejandro Pertusatti"
            role="Technical Leader"
            description="Soy Ale, tengo 26 años. Soy estudiante de Químico Farmacéutico en UdelaR. Me gusta conocer lugares nuevos, y disfruto del tiempo de calidad en familia."
            altText="Alejandro Pertusatti"
          />
          <TeamCard
            image={PiaMachado}
            name="Pía Machado"
            role="Project Leader"
            description="Soy Pía, tengo 26 años. Me titulé como Analista en Programación en 2020, y estudio Ingeniería Química en UdelaR. Además de programar, disfruto de la música y de viajar."
            altText="Pía Machado"
          />
          <TeamCard
            image={ThiagoSilveira}
            name="Thiago Silveira"
            role="Product Developer"
            description="Soy Thiago, tengo 18 años. Estudio Ingeniería Informática en UdelaR. Me apasiona aprender y crear cosas nuevas."
            altText="Thiago Silveira"
          />
        </div>


        {/* Versión MOBILE */}
        <svg
          className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#eff6ff" />
        </svg>

        {/* Versión DESKTOP */}
        <svg
          className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          aria-hidden="true">
          <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#eff6ff" />
        </svg>
      </div>
    </section>
  );
}

export default QuienesSomos;
