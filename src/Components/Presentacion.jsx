import './css/presentacion.css';
function Presentacion({ persona, bio, perfil }) {
  return (
    <section className="tarjeta-presentacion">
      <img className="foto" src={perfil} alt={'Foto de ' + persona}></img>
      <h3 className="nombre-persona">{persona}</h3>
      <p className="descripcion-persona">{bio}</p>
    </section>
  );
}
export default Presentacion;
