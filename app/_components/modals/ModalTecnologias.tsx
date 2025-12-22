import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaPhp,
  FaAws,
  FaBootstrap,
  FaSass,
  FaDocker,
  FaSymfony,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiApache,
  SiSupabase,
  SiAuth0,
  SiCloudinary,
  SiResend,
  SiVercel,
  SiPosthog,
} from 'react-icons/si';

interface Tecnologia {
  nombre: string;
  icono: string;
}

interface ModalTecnologiasProps {
  open: boolean;
  onClose: () => void;
  nombre: string;
  tecnologias: Tecnologia[];
}

// Mapeo de tecnologías a iconos de React Icons
const getIcon = (nombre: string) => {
  const iconMap: { [key: string]: any } = {
    React: FaReact,
    'React Native': FaReact,
    'Next.js': SiNextdotjs,
    'Node.js': FaNodeJs,
    JavaScript: FaJs,
    TypeScript: SiTypescript,
    CSS3: FaCss3Alt,
    'Tailwind CSS': SiTailwindcss,
    HTML: FaHtml5,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    Express: SiExpress,
    Git: FaGitAlt,
    PHP: FaPhp,
    Sass: FaSass,
    Webpack: FaJs, // Usar JS como fallback para Webpack
    Apache: SiApache,
    Docker: FaDocker,
    'QR Scanner': FaJs, // Usar JS como fallback
    Supabase: SiSupabase,
    'Auth.js': SiAuth0, // Usar Auth0 como representación de Auth.js
    Cloudinary: SiCloudinary,
    Resend: SiResend,
    Vercel: SiVercel,
    PostHog: SiPosthog,
    AWS: FaAws,
    Bootstrap: FaBootstrap,
    Symfony: FaSymfony,
  };

  return iconMap[nombre] || FaJs;
};

// Color base y hover
const color = { base: '#BCC6FF', hover: '#A7B3FC' };

function ModalTecnologias({
  open,
  onClose,
  nombre,
  tecnologias,
}: ModalTecnologiasProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            marginTop: 0,
          }}
          onClick={onClose}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="bg-white rounded-xl w-full max-w-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                Tecnologías de {nombre}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors">
                ×
              </button>
            </div>

            {/* Contenido */}
            <div className="p-6">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {tecnologias.map((tecnologia, index) => {
                  const IconComponent = getIcon(tecnologia.nombre);

                  return (
                    <motion.div
                      key={tecnologia.nombre}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex flex-col items-center p-4 rounded-lg transition-all duration-200 hover:scale-105"
                      style={
                        {
                          backgroundColor: color.base,
                          '--hover-color': color.hover,
                        } as React.CSSProperties
                      }
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = color.hover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = color.base;
                      }}>
                      <IconComponent className="text-2xl mb-2 text-gray-700" />
                      <span className="text-xs font-medium text-gray-700 text-center">
                        {tecnologia.nombre}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalTecnologias;
