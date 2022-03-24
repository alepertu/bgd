import './css/estiloproyectosb1.css';

function Proyecto({ img, nombre, descrip }) {
  return (
    <div class="borde">
      <img src={img} />
      <h2>{nombre}</h2>
      <p>{descrip}</p>
    </div>
  );
}

export default Proyecto;