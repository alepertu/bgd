"use client";

import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaEnvelope, FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function Footer() {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMostrarDropdown(false);
      }
    };

    if (mostrarDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mostrarDropdown]);

  return (
    <footer className="bg-[#FCEEB3] p-6 md:p-10 text-center text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-base md:text-lg font-semibold">
          &copy; {new Date().getFullYear()} PYA. Todos los derechos reservados.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://instagram.com/pya.devs"
            className="text-xl md:text-2xl hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a
            href="mailto:info@pya.uy"
            className="text-xl md:text-2xl hover:text-white transition-colors">
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/+59897827767"
            className="text-xl md:text-2xl hover:text-white transition-colors">
            <FaWhatsapp />
          </a>
          
          {/* Botón Más con Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMostrarDropdown(!mostrarDropdown)}
              className="flex items-center space-x-1 text-base md:text-lg font-semibold hover:text-white transition-colors px-3 py-2 rounded">
              <span>Más</span>
              <FaChevronDown 
                className={`transition-transform duration-200 ${mostrarDropdown ? 'rotate-180' : ''}`}
                size={14}
              />
            </button>
            
            <AnimatePresence>
              {mostrarDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full right-0 mb-2 bg-[#1e293b] rounded-lg shadow-lg overflow-hidden min-w-[150px] z-50">
                  <button
                    onClick={() => {
                      router.push('/nosotros');
                      setMostrarDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 text-[#FCEEB3] hover:bg-slate-700 transition-colors">
                    Nosotros
                  </button>
                  <button
                    onClick={() => {
                      router.push('/servicios');
                      setMostrarDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 text-[#FCEEB3] hover:bg-slate-700 transition-colors border-t border-slate-600">
                    Servicios
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
