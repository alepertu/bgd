{
  /*
  import "./css/estiloproyectosb1.css";
  import external from "../../public/images/iconos/external.svg";
  */
}

import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

function Proyecto({ img, nombre, descrip, link }) {
  return (
    <div className="w-80 border-2 border-black rounded-xl overflow-hidden flex flex-col items-center p-4">
      <div className="w-full">
        <Image
          className="w-full h-auto object-cover rounded-xl"
          src={img}
          alt={`Captura de pantalla de ${nombre}`}
          layout="intrinsic"
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 flex items-center gap-2 text-black">
        {nombre}
        <a href={link} target="_blank" rel="noreferrer" className="text-black">
          <FaExternalLinkAlt size={20} />
        </a>
      </h2>
      <p className="text-gray-600 text-center mt-2 px-4">{descrip}</p>
    </div>
  );
}

export default Proyecto;
