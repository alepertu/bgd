import Image from "next/image";
import ale from "../../public/images/moi.jpeg";
import pia from "../../public/images/moia.jpeg";

function QuienesSomos() {
  return (
    <section className="bg-white p-6 md:p-20 text-black flex flex-col items-center justify-center min-h-screen relative">
      <div className="mb-8 md:mb-12 text-center w-full">
        <h2 className="text-3xl md:text-6xl font-bold text-black">
          Pero... ¿Quiénes somos?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl justify-center mb-24">
        <div className="bg-gray-100 rounded-2xl w-full max-w-sm text-left flex flex-col items-start overflow-hidden">
          <Image
            src={ale}
            alt="Alejandro Pertusatti"
            className="w-full h-80 object-cover rounded-t-2xl"
            width={320}
            height={320}
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold uppercase">
              Desarrollador & Diseñador
            </h3>
            <h2 className="text-2xl font-bold mt-2">Alejandro Pertusatti</h2>
            <p className="mt-2 text-md">
              Soy Ale, tengo 23 años. Me recibí de Diseñador Gráfico en 2019, y
              soy un apasionado de la programación. Soy estudiante avanzado de
              Químico Farmacéutico en UdelaR. Además, trabajo actualmente en
              Fraud Prevention de Mercado Libre. Me gusta conocer lugares
              nuevos, y disfruto del tiempo de calidad con mi familia.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl w-full max-w-sm text-left flex flex-col items-start overflow-hidden">
          <Image
            src={pia}
            alt="María Pía Machado"
            className="w-full h-80 object-cover rounded-t-2xl"
            width={320}
            height={320}
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold uppercase">
              Analista & Ingeniera
            </h3>
            <h2 className="text-2xl font-bold mt-2">María Pía Machado</h2>
            <p className="mt-2 text-md">
              Soy Pía, tengo 23 años. Me titulé como Analista en Programación en
              2020. Actualmente soy estudiante avanzada de Ingeniería Química en
              UdelaR. Además de programar, trabajo en Customer Service de
              Mercado Libre. Disfruto de mis trabajos, de la música, de viajar,
              y de pasar buenos momentos en familia.
            </p>
          </div>
        </div>
      </div>

      {/* Versión MOBILE */}
      <svg
        className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#e1edf2" />
      </svg>

      {/* Versión DESKTOP */}
      <svg
        className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#e1edf2" />
      </svg>
    </section>
  );
}

export default QuienesSomos;
