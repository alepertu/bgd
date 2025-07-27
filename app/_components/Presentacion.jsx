import './css/presentacion.css';
import Image from 'next/image';

function Presentacion({ persona, bio, perfil }) {
  return (
    <section className="w-full flex flex-col">
      <Image
        className="w-full"
        src={perfil}
        alt={'Foto de ' + persona}
        width={100}
        height={500}
      />
      <h3 className="text-3xl">{persona}</h3>
      <p className="w-11/12 m-0 text-2xl">{bio}</p>
    </section>
  );
}
export default Presentacion;
