import Proyecto from './Proyecto';
import './css/proyectos.css';

function Proyectos() {
  return (
    <section>
      <h2>Proyectos realizados</h2>
      <Proyecto
        img=""
        nombre="PaseUy"
        descrip="Aplicación web dedicada a la compra y venta de entradas para diferentes eventos."
      />
      <Proyecto
        img=""
        nombre="PaseUy App"
        descrip="Aplicación mobile desarrollada para validar entradas adquiridas en PaseUy, mediante reconocimiento de código QR."
      />
      <Proyecto
        img=""
        nombre="Givt"
        descrip="Sitio web dedicado a la recaudación de dinero para diferentes eventos o causas, contribuyendo con ello a las ONGs asociadas."
      />
    </section>
  );
}

export default Proyectos;
