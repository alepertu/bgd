import Proyecto from "./Proyecto";
{
  /*import "./css/proyectos.css";*/
}
import paseuy from "../../public/images/paseuy.jpeg";
import paseuyapp from "../../public/images/paseuyapp.jpeg";
import givt from "../../public/images/givt.jpeg";

function Proyectos() {
  return (
    <section
      id="proyectos"
      className="text-center p-6 md:p-20 bg-white min-h-screen"
    >
      <div className="mb-8 md:mb-12 text-center w-full">
        <h2 className="text-3xl md:text-6xl font-bold text-black">
          Ellos confiaron en nosotros
          <br />
          ¿Vos qué estás esperando?
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto">
          Hace crecer tu negocio, mostrá tu producto, o contá tu historia.
          Nosotros te ayudamos.
        </p>
      </div>

      <div className="flex justify-center gap-8 mt-12 flex-wrap">
        <Proyecto
          img={paseuy}
          nombre="PaseUy"
          descrip="Aplicación web dedicada a la compra y venta de entradas para diferentes eventos."
          link="https://paseuy.com/"
        />
        <Proyecto
          img={paseuyapp}
          nombre="PaseUy App"
          descrip="Aplicación mobile desarrollada para validar entradas adquiridas en PaseUy, mediante reconocimiento de código QR."
          link="https://play.google.com/store/apps/details?id=com.bggroup.paseuy&hl=es"
        />
        <Proyecto
          img={givt}
          nombre="Givt"
          descrip="Sitio web dedicado a la recaudación de dinero para diferentes eventos o causas, contribuyendo con ello a las ONGs asociadas."
          link="https://givt.uy/"
        />
      </div>
    </section>
  );
}

export default Proyectos;
