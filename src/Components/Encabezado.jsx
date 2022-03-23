import './css/estiloencabezadob1.css';
import logo from '../Images/logobgdesarrollo.png';
function Encabezado() {
  return (
    <header>
      <div class="logo">
        <img src={logo} alt="Logo de BD Desarrollo"></img>
      </div>
      <nav>
        <a href="nav-lin">INICIO</a>
        <a href="nav-link">NOSOTROS</a>
        <a href="nav-link">PROYECTOS</a>
        <a href="nav-link">CONTACTO</a>
      </nav>
    </header>
  );
}

export default Encabezado;
