import { motion } from "motion/react";
import { TiLightbulb } from "react-icons/ti";

const animations = {
  // Rotaciones para desktop: izquierda negativa, centro sin rotación, derecha positiva
  desktopRotation: ["-10deg", "0deg", "10deg"],
  desktopHoverRotation: ["-9deg", "0deg", "9deg"],
  // Posiciones para móvil: más separadas para que se vean las tres
  mobileInitialPosition: [{ top: "200px" }, { top: "280px" }, { top: "360px" }],
  mobileFinalPosition: [{ top: "-70px" }, { top: "5px" }, { top: "100px" }],
  mobileHoverPosition: [{ top: "-140px" }, { top: "-60px" }, { top: "70px" }],

  zIndex: [1, 5, 2],
  // Colores específicos para cada tarjeta
  backgroundColor: ["#BCC6FF", "#FCEEB3", "#FCDCBC"], // Fondo normal
  textColor: ["#1e293b", "#1e293b", "#1e293b"], // Texto normal
  hoverBackgroundColor: ["#A7B3FC", "#FFF0A3", "#FFCC96"], // Fondo hover
  hoverTextColor: ["#2B3259", "#544B27", "#543E27"], // Texto hover
};

export default function MainCard({
  title,
  desc,
  order,
}: {
  title: string;
  desc: string;
  order: number;
}) {
  return (
    <motion.div
      initial={{
        rotate: animations.desktopRotation[order - 1],
        top: animations.mobileInitialPosition[order - 1].top,
        backgroundColor: animations.backgroundColor[order - 1],
        color: animations.textColor[order - 1],
        opacity: 0,
      }}
      animate={{
        top: animations.mobileFinalPosition[order - 1].top,
        opacity: 1,
        transition: { delay: (order - 1) * 0.3 },
      }}
      whileHover={{
        scale: 1.05,
        rotate: animations.desktopHoverRotation[order - 1],
        top: animations.mobileHoverPosition[order - 1].top,
        backgroundColor: animations.hoverBackgroundColor[order - 1],
        color: animations.hoverTextColor[order - 1],
      }}
      whileTap={{
        scale: 1.05,
        rotate: animations.desktopHoverRotation[order - 1],
        top: animations.mobileHoverPosition[order - 1].top,
        backgroundColor: animations.hoverBackgroundColor[order - 1],
        color: animations.hoverTextColor[order - 1],
      }}
      className={`w-5/6 md:w-[25%] max-w-sm md:max-w-md aspect-[4/3] select-none rounded-2xl md:rounded-3xl absolute md:static flex flex-col p-4 md:p-6 text-left z-[${animations.zIndex[order - 1]}] ${order === 2 ? 'md:-mt-16' : (order === 1 || order === 3) ? 'md:mt-8' : ''}`}>
      <h3 className="text-lg md:text-2xl font-bold w-full text-inherit flex items-center">
        <TiLightbulb className="mr-1" /> {title}
      </h3>
      <h3 className="text-sm md:text-xl mt-2 leading-4 md:leading-5">{desc}</h3>
    </motion.div>
  );
}
