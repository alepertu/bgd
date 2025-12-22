"use client";

import MainCard from '../_components/cards/MainCard';
import Button from '../_components/ui/Button';

function Presentacion() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProyectos = () => {
        const proyectosSection = document.getElementById('proyectos');
        if (proyectosSection) {
            proyectosSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
      <section
        id="presentación"
        className="text-center min-h-screen scroll-mt-[72px] md:scroll-mt-[88px]">
        <div className="relative min-h-[100svh] md:min-h-screen flex flex-col">
          {/* Contenedor para los SVGs de fondo */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute top-36 -z-10 -left-8 md:-left-12 rotate-90 fill-uy-yellow-200 w-24 opacity-80">
              <path d="M360 240c-66.3 0-120-53.7-120-120a120 120 0 1 0-120 120c66.3 0 120 53.7 120 120a120 120 0 1 0 120-120Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute top-40 -z-10 rotate-12 -right-12 md:-right-16 fill-uy-blue-50 w-24 opacity-80">
              <path d="M240 0H0a240 240 0 0 0 240 240h240A240 240 0 0 0 240 0ZM240 240H0a240 240 0 0 0 240 240h240a240 240 0 0 0-240-240Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute top-72 md:top-56 -z-10 left-10 md:left-32 fill-uy-brown-50 w-24 opacity-80">
              <path d="M197.6 42.4 42.4 197.6a60 60 0 0 0 0 84.8l155.2 155.2a60 60 0 0 0 84.8 0l155.2-155.2a60 60 0 0 0 0-84.8L282.4 42.4a60 60 0 0 0-84.8 0Z"></path>
            </svg>
          </div>

          <div className="flex-1 flex flex-col justify-center pt-16 md:pt-32 pb-6 md:pb-12 relative z-10">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-6xl font-bold px-4 md:px-8 tracking-tight leading-tight">
                Convertimos tu idea en realidad
              </h1>
              <p className="text-base md:text-xl mt-4 md:mt-6 mb-6 md:mb-8 tracking-tight leading-relaxed text-balance max-w-2xl mx-auto px-4">
                Desarrollamos aplicaciones web para emprendedores y start-ups.
                <br />
                <b>Creamos tu producto digital desde cero</b> o mejoramos el que
                ya tenés.
              </p>
              <div className="flex flex-row gap-3 justify-center items-center px-4">
                <Button
                  onClick={scrollToContact}
                  variant="primary"
                  size="md"
                  className="flex-1 sm:flex-none sm:px-6">
                  ¡Hablemos!
                </Button>
                <Button
                  onClick={scrollToProyectos}
                  variant="outline"
                  size="md"
                  className="flex-1 sm:flex-none sm:px-6">
                  Conocé más
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 relative md:static flex items-end md:items-center justify-center px-2 md:px-12 pb-8 md:pb-0">
            <MainCard
              order={1}
              title="Tienda online"
              desc='"Quiero mi tienda online para potenciar mis ventas y llegar a más clientes."'
            />
            <MainCard
              order={2}
              title="Landing page"
              desc='"Quiero una página donde presentar mi producto y mostrar todos los servicios que ofrezco."'
            />
            <MainCard
              order={3}
              title="Blog personal"
              desc='"Quiero un lugar donde poder expresarme y contarle a mis seguidores lo que pienso."'
            />
          </div>

          {/* Versión MOBILE */}
          <svg
            className="block md:hidden absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            aria-hidden="true">
            <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="#EFF6FF" />
          </svg>

          {/* Versión DESKTOP */}
          <svg
            className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            aria-hidden="true">
            <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="#EFF6FF" />
          </svg>
        </div>
      </section>
    );
}

export default Presentacion;
