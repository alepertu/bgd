import './css/estiloproyectosb1.css';
import external from '../images/iconos/external.svg';

function Proyecto({ img, nombre, descrip, link }) {
  return (
    <div class="borde">
      <img src={img} alt="Captura de pantalla del proyecto" />
      <h2>
        {nombre}{' '}
        <a href={link} target="_blank" rel="noreferrer">
          <img src={external} alt="Ir al sitio" />
        </a>
      </h2>
      <p>{descrip}</p>
    </div>
  );
}

export default Proyecto;
