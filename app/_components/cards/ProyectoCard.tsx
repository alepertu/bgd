"use client";


import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
// @ts-ignore
import ModalTecnologias from '../modals/ModalTecnologias';

interface Tecnologia {
  nombre: string;
  icono: string;
}

function Proyecto({
  img,
  nombre,
  descrip,
  link,
  tecnologias,
}: {
  img: StaticImageData;
  nombre: string;
  descrip: string;
  link: string;
  tecnologias: Tecnologia[];
}) {
  const [showTecnologias, setShowTecnologias] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full mb-12 bg-white rounded-2xl overflow-hidden border-2 border-[#543E27]">
        <div className="flex flex-col lg:flex-row">
          {/* Imagen del proyecto - Izquierda */}
          <div className="lg:w-1/4 aspect-[4/5] relative overflow-hidden">
            <Image
              src={img}
              alt={`Captura de pantalla de ${nombre}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Contenido del proyecto - Derecha */}
          <div className="lg:w-3/4 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Título arriba */}
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
                  {nombre}
                </h3>
              </div>

              {/* Descripción en el medio */}
              <div className="space-y-3 text-left">
                {descrip.split('\n').map((parrafo, index) => (
                  <p
                    key={index}
                    className="text-sm text-gray-600 md:text-lg leading-relaxed">
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>

            {/* Botones abajo */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-auto">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<FaExternalLinkAlt />}
                  iconPosition="left">
                  Visitar sitio
                </Button>
              </a>

              <Button
                onClick={() => setShowTecnologias(true)}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
                icon={<FaCode />}
                iconPosition="left">
                Ver tecnologías
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <ModalTecnologias
        open={showTecnologias}
        onClose={() => setShowTecnologias(false)}
        nombre={nombre}
        tecnologias={tecnologias}
      />
    </>
  );
}

export default Proyecto;
