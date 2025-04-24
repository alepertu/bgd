{
  /*
  import "./css/estiloproyectosb1.css";
  import external from "../../public/images/iconos/external.svg";
  */
}

import { useState } from "react";
import Image from "next/image";
import ModalProyecto from "./ModalProyecto";
import { motion } from "framer-motion";

function Proyecto({ img, nombre, descrip, link }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="relative w-80 h-96 overflow-hidden rounded-2xl group cursor-pointer"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src={img}
          alt={`Captura de pantalla de ${nombre}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300"
        />

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: hover ? 0 : "100%" }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-0 left-0 w-full h-28 bg-[#e1edf2] text-black flex items-center justify-center rounded-t-[100px] overflow-hidden"
        >
          <span className="text-xl font-semibold">Saber más</span>
        </motion.div>
      </div>

      <ModalProyecto
        open={open}
        onClose={() => setOpen(false)}
        nombre={nombre}
        descrip={descrip}
        link={link}
      />
    </>
  );
}

export default Proyecto;
