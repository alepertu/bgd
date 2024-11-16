import { motion } from 'motion/react';
import { TiLightbulb } from 'react-icons/ti';

const animations = {
  initialRotation: ['-4deg', '2deg', '10deg'],
  initialPosition: [
    { left: '-2rem', top: '300px' },
    { left: '1rem', top: '350px' },
    { left: '4rem', top: '400px' },
  ],
  finalPosition: [
    { left: '-1rem', top: '10px' },
    { left: '1rem', top: '130px' },
    { left: '3rem', top: '250px' },
  ],
  colors: ['#BCC6FF', '#FFF9E0', '#FFD7AE'],
  hoverRotation: ['-3deg', '1deg', '9deg'],
  hoverPosition: [{ top: '-10px' }, { top: '100px' }, { top: '220px' }],
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
        left: animations.initialPosition[order - 1].left,
        top: animations.initialPosition[order - 1].top,
        backgroundColor: animations.colors[order - 1],
        color: 'black',
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
        backgroundColor: 'black',
        color: animations.colors[order - 1],
      }}
      whileTap={{
        scale: 1.05,
        rotate: animations.hoverRotation[order - 1],
        top: animations.hoverPosition[order - 1].top,
        backgroundColor: 'black',
        color: animations.colors[order - 1],
      }}
      className={`h-80 w-80 select-none rounded-3xl absolute flex flex-col p-6 text-left z-[${order}]`}>
      <h3 className="text-xl font-bold w-full text-inherit flex items-center">
        <TiLightbulb className="mr-1" /> {title}
      </h3>
      <span className="text-md mt-2 leading-5">{desc}</span>
    </motion.div>
  );
}
