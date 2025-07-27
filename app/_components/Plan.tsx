import { FaCheckCircle } from 'react-icons/fa';

export default function Plan({
  title,
  description,
  price,
  bgColor,
  txtColor,
  bullets,
}: {
  title: string;
  description: string;
  price?: number;
  bgColor: string;
  txtColor: string;
  bullets: string[];
}) {
  return (
    <div
      className={`p-6 md:p-10 w-full md:w-1/3 flex flex-col text-left bg-[${bgColor}] text-[${txtColor}] first:rounded-t-2xl first:md:rounded-tl-2xl first:md:rounded-tr-none first:md:rounded-l-2xl first:md:rounded-b-none last:rounded-b-2xl last:md:rounded-br-2xl last:md:rounded-bl-none last:md:rounded-tr-2xl last:md:rounded-t-none shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <span
          className={`text-base md:text-lg font-bold bg-[${txtColor}]/10 py-1.5 px-4 rounded-xl`}>
          {price ? `USD ${price}` : 'Consultar'}
        </span>
      </div>
      <p className="text-base md:text-lg mb-3 md:mb-4 opacity-90">
        {description}
      </p>
      <ul className="flex-1 text-base md:text-lg space-y-3">
        {bullets.map((bullet, index) => (
          <li className="mb-3 flex items-center" key={index}>
            <FaCheckCircle className="mr-2 flex-shrink-0" /> {bullet}
          </li>
        ))}
      </ul>
      <button
        className={`mt-4 md:mt-6 bg-[${txtColor}] text-[${bgColor}] text-base md:text-lg py-2 md:py-3 rounded-xl w-full hover:opacity-90 transition-opacity duration-300 shadow-sm`}>
        Lo quiero!
      </button>
    </div>
  );
}
