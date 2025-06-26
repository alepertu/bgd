"use client";

import Proyectos from "./_components/Proyectos.jsx";
import Contacto from "./_components/Contacto.jsx";
import QuienesSomos from "./_components/QuienesSomos.jsx";
import Planes from "./_components/Planes.jsx";
import Footer from "./_components/Footer.jsx";

import React from "react";
import Header from "./_components/Header.tsx";
import MainCard from "./_components/MainCard.tsx";
import Section from "./_components/Section.tsx";

function App() {
  return (
    <div className="text-center">
      <Header />
      <main>
        <Section id="inicio">
          <div className="relative min-h-[100svh] md:min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col justify-center pt-20 md:pt-24 pb-8 md:pb-12">
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

              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold px-4 md:px-8 tracking-tight leading-tight">
                  Convertimos tu idea en realidad
                </h1>
                <p className="text-lg md:text-xl mt-6 mb-8 tracking-tight leading-relaxed text-balance max-w-2xl mx-auto px-4">
                  Desarrollamos aplicaciones web para emprendedores y start-ups.
                  <br />
                  <b>Creamos tu producto digital desde cero</b> o mejoramos el
                  que ya tenés.
                </p>
                <a
                  className="bg-black py-3 px-8 text-lg md:text-xl rounded-xl no-underline mx-auto text-white font-semibold border-2 border-transparent hover:text-black transition-all duration-300 hover:bg-transparent hover:border-black shadow-sm hover:shadow-md"
                  href="#form-contacto">
                  Contanos tu idea
                </a>
              </div>
            </div>

            <div className="flex-1 relative md:static flex items-end md:items-center justify-center px-4 md:px-12 pb-12 md:pb-0">
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
              <path d="M0,20 Q50,5 100,20 V20 H0 Z" fill="white" />
            </svg>

            {/* Versión DESKTOP */}
            <svg
              className="hidden md:block absolute bottom-0 left-0 w-full h-36 z-10 pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              aria-hidden="true">
              <path d="M0,40 Q50,-10 100,40 V40 H0 Z" fill="white" />
            </svg>
          </div>
        </Section>

        <Proyectos />
        <QuienesSomos />
        <Planes />
        <Contacto />
        <div className="bg-[#a5c8d8] text-center p-6 md:p-20">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
            Llevá tu idea al siguiente nivel.
          </h2>
          <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6 max-w-2xl mx-auto">
            Transformamos tu visión en una web que impacta. Empezá hoy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
