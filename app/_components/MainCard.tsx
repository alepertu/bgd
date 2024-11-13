import { TiLightbulb } from 'react-icons/ti';

const customizations = [
  'z-[1] -left-4 top-[10px] -rotate-[4deg] bg-uy-blue-50 hover:text-uy-blue-50',
  'z-[2] left-4 top-[130px] rotate-[2deg] bg-uy-yellow-50 hover:text-uy-yellow-50',
  'z-[3] left-12 top-[250px] rotate-[10deg] bg-uy-brown-50 hover:text-uy-brown-50',
];

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
    <div
      className={`h-80 w-80 rounded-3xl absolute flex flex-col p-6 text-black text-left hover:scale-110 hover:bg-black transition-all ${
        customizations[order - 1]
      }`}>
      <h3 className="text-3xl font-bold w-full text-inherit flex items-center">
        <TiLightbulb className="mr-1" /> {title}
      </h3>
      <span className="text-lg mt-2 leading-5">{desc}</span>
    </div>
  );
}
