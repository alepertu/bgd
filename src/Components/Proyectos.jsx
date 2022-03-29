import Proyecto from './Proyecto';
import './css/proyectos.css';
import paseuy from '../images/paseuy.jpeg';
import paseuyapp from '../images/paseuyapp.jpeg';
import givt from '../images/givt.jpeg';

function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Proyectos realizados</h2>
      <div className="proyectosreal">
        <Proyecto
          img={paseuy}
          nombre="PaseUy"
          descrip="Aplicación web dedicada a la compra y venta de entradas para diferentes eventos."
        />
        <Proyecto
          img={paseuyapp}
          nombre="PaseUy App"
          descrip="Aplicación mobile desarrollada para validar entradas adquiridas en PaseUy, mediante reconocimiento de código QR."
        />
        <Proyecto
          img={givt}
          nombre="Givt"
          descrip="Sitio web dedicado a la recaudación de dinero para diferentes eventos o causas, contribuyendo con ello a las ONGs asociadas."
        />
      </div>
    </section>
  );
}

export default Proyectos;
