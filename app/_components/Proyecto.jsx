import './css/estiloproyectosb1.css';
import external from '../../public/images/iconos/external.svg';
import Image from 'next/image';

function Proyecto({ img, nombre, descrip, link }) {
  return (
    <div className="borde">
      <Image
        className="captura"
        src={img}
        alt="Captura de pantalla del proyecto"
        width={150}
        height={550}
      />
      <h2>
        {nombre}
        <a href={link} target="_blank" rel="noreferrer">
          <Image src={external} alt="Ir al sitio" width={30} height={30} />
        </a>
      </h2>
      <p>{descrip}</p>
    </div>
  );
}

export default Proyecto;
