import './css/presentacion.css';
function Presentacion({ persona, bio, perfil }) {
  return (
    <section>
      <img className="foto" src={perfil} alt={'Foto de ' + persona}></img>
      <h3>{persona}</h3>
      <p>{bio}</p>
    </section>
  );
}
export default Presentacion;
