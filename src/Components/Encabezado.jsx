import './css/estiloencabezadob1.css';
import logo from '../images/logobgdesarrollo.png';
function Encabezado() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo de BD Desarrollo"></img>
      </div>
      <nav>
        <a href="#inicio">INICIO</a>
        <a href="#nosotros">NOSOTROS</a>
        <a href="#proyectos">PROYECTOS</a>
        <a href="#contacto">CONTACTO</a>
      </nav>
    </header>
  );
}

export default Encabezado;
