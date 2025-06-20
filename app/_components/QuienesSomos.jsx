import ale from '../../public/images/ale.jpg';
import pia from '../../public/images/pia.jpeg';
import thiago from '../../public/images/thiago.jpg';
import TeamCard from './TeamCard';

function QuienesSomos() {
  const teamMembers = [
    {
      image: ale,
      name: 'Alejandro Pertusatti',
      role: 'Technical Leader',
      description:
        'Soy Ale, tengo 26 años. Soy estudiante de Químico Farmacéutico en UdelaR. Me gusta conocer lugares nuevos, y disfruto del tiempo de calidad en familia.',
      altText: 'Alejandro Pertusatti',
    },
    {
      image: pia,
      name: 'Pía Machado',
      role: 'Project Leader',
      description:
        'Soy Pía, tengo 26 años. Me titulé como Analista en Programación en 2020, y estudio Ingeniería Química en UdelaR. Además de programar, disfruto de la música y de viajar.',
      altText: 'Pía Machado',
    },
    {
      image: thiago,
      name: 'Thiago Silveira',
      role: 'Product Developer',
      description:
        'Soy Thiago, tengo 18 años. Estudio Ingeniería Informática en UdelaR. Me apasiona aprender y crear cosas nuevas.',
      altText: 'Thiago Silveira',
    },
  ];

  return (
    <section className="bg-white p-4 md:p-6 lg:p-20 text-black flex flex-col items-center justify-center min-h-screen relative">
      <div className="mb-6 md:mb-8 lg:mb-12 text-center w-full">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-black">
          Pero... ¿Quiénes somos?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-5xl justify-center mb-24">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>

      {/* Versión MOBILE */}
      <svg
        className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#e1edf2" />
      </svg>

      {/* Versión DESKTOP */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#e1edf2" />
      </svg>
    </section>
  );
}

export default QuienesSomos;
