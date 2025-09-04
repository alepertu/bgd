import Image from 'next/image';

export default function TeamCard({
  image,
  name,
  role,
  description,
  altText,
  isEmpty = false,
}) {
  if (isEmpty) {
    return (
      <div className="bg-gray-100 rounded-2xl w-full max-w-sm text-left flex flex-col items-start overflow-hidden group duration-300">
        <div className="w-full h-64 md:h-80 bg-gray-200 rounded-t-2xl flex items-center justify-center">
          <span className="text-gray-400 text-lg">Próximamente</span>
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-xs md:text-sm font-semibold uppercase text-gray-400">
            Nuevo integrante
          </h3>
          <h2 className="text-xl md:text-2xl font-bold mt-2 text-gray-400">
            Únete a nuestro equipo
          </h2>
          <p className="mt-2 text-sm md:text-md text-gray-400">
            Estamos buscando personas apasionadas por la tecnología y el diseño
            para seguir creciendo juntos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-[#543E27] w-full max-w-sm text-left flex flex-col items-start overflow-hidden group duration-300">
      <Image
        src={image}
        alt={altText}
        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        width={320}
        height={320}
      />
      <div className="p-4 md:p-6">
        <h3 className="text-xs md:text-sm font-semibold uppercase">{role}</h3>
        <h2 className="text-xl md:text-2xl font-bold mt-2">{name}</h2>
        <p className="mt-2 text-sm md:text-md">{description}</p>
      </div>
    </div>
  );
}
