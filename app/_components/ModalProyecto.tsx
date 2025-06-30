import { FaExternalLinkAlt } from 'react-icons/fa';

function ModalProyecto({
  open,
  onClose,
  nombre,
  lema,
  descrip,
  link,
}: {
  open: boolean;
  onClose: () => void;
  nombre: string;
  lema: string;
  descrip: string;
  link: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-3xl p-8 shadow-xl relative flex flex-col gap-6 text-xl md:text-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-black text-5xl">
          ×
        </button>

        <div className="flex flex-col justify-center text-left space-y-3">
          <h2 className="text-4xl font-extrabold text-gray-800">{nombre}</h2>
          <h3 className="text-2xl text-gray-600 italic">{lema}</h3>
          <p className="text-gray-700 text-lg">{descrip}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-green-600 font-bold hover:underline text-xl">
            Visitar sitio <FaExternalLinkAlt className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalProyecto;
