'use client';

import { FaCheckCircle } from 'react-icons/fa';
import Button from '../ui/Button';

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
      className="p-4 md:p-8 w-full md:w-1/3 flex flex-col text-left first:rounded-t-2xl first:md:rounded-tl-2xl first:md:rounded-tr-none first:md:rounded-l-2xl first:md:rounded-b-none last:rounded-b-2xl last:md:rounded-br-2xl last:md:rounded-bl-none last:md:rounded-tr-2xl last:md:rounded-t-none relative overflow-hidden"
      style={{ backgroundColor: bgColor, color: txtColor }}>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            {title}
          </h3>
          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold mb-1">
              {price ? `$${price}` : 'Consultar'}
            </div>
            {price && <div className="text-sm opacity-75">USD</div>}
          </div>
        </div>

        <p className="text-base md:text-lg mb-6 opacity-90 leading-relaxed">
          {description}
        </p>

        <ul className="flex-1 text-base md:text-lg space-y-4 mb-8">
          {bullets.map((bullet, index) => (
            <li className="flex items-start" key={index}>
              <FaCheckCircle
                className="mr-3 flex-shrink-0 mt-1 text-lg"
                style={{ color: txtColor }}
              />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <button
            className="w-full py-4 px-6 text-lg font-semibold rounded-2xl"
            style={{
              backgroundColor: txtColor,
              color: bgColor,
              borderColor: txtColor,
            }}
            onClick={() => {
              const event = new CustomEvent('prefill-contact', {
                detail: { planName: title },
              });

              window.dispatchEvent(event);
              document
                .getElementById('contacto')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
            ¡Lo quiero!
          </button>
        </div>
      </div>
    </div>
  );
}
