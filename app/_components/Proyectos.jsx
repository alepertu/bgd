import Proyecto from './Proyecto';
import './css/proyectos.css';
import paseuy from '../../public/images/paseuy.jpeg';
import paseuyapp from '../../public/images/paseuyapp.jpeg';
import givt from '../../public/images/givt.jpeg';

function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos realizados</h2>
      <div className="proyectosreal">
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
