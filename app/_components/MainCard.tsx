import { motion } from "motion/react";
import { TiLightbulb } from "react-icons/ti";

const customizations = ["left-0", "left-[10%]", "left-[20%]"];

const animations = {
  initialRotation: ["-4deg", "2deg", "10deg"],
  initialPosition: [{ top: "300px" }, { top: "350px" }, { top: "400px" }],
  finalPosition: [{ top: "10px" }, { top: "130px" }, { top: "250px" }],
  colors: ["#BCC6FF", "#FFF9E0", "#FFD7AE"],
  hoverRotation: ["-3deg", "1deg", "9deg"],
  hoverPosition: [{ top: "-10px" }, { top: "100px" }, { top: "220px" }],
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
        rotate: animations.initialRotation[order - 1],
        top: animations.initialPosition[order - 1].top,
        backgroundColor: animations.colors[order - 1],
        color: "black",
        opacity: 0,
      }}
      animate={{
        top: animations.finalPosition[order - 1].top,
        opacity: 1,
        transition: { delay: (order - 1) * 0.3 },
      }}
      whileHover={{
        scale: 1.05,
        rotate: animations.hoverRotation[order - 1],
        top: animations.hoverPosition[order - 1].top,
        backgroundColor: "black",
        color: animations.colors[order - 1],
      }}
      whileTap={{
        scale: 1.05,
        rotate: animations.hoverRotation[order - 1],
        top: animations.hoverPosition[order - 1].top,
        backgroundColor: "black",
        color: animations.colors[order - 1],
      }}
      className={`w-4/5 aspect-square ${
        customizations[order - 1]
      } -translate-x-1/2 select-none rounded-3xl absolute md:static flex flex-col p-6 text-left z-[${order}]`}
    >
      <h3 className="text-xl md:text-2xl font-bold w-full text-inherit flex items-center">
        <TiLightbulb className="mr-1" /> {title}
      </h3>
      <span className="text-md md:text-xl mt-2 leading-5">{desc}</span>
    </motion.div>
  );
}
