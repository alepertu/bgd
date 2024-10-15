import './css/presentacion.css';
import Image from 'next/image';

function Presentacion({ persona, bio, perfil }) {
  return (
    <section className="tarjeta-presentacion">
      <Image
        className="foto"
        src={perfil}
        alt={'Foto de ' + persona}
        width={100}
        height={500}
      />
      <h3 className="nombre-persona">{persona}</h3>
      <p className="descripcion-persona">{bio}</p>
    </section>
  );
}
export default Presentacion;
