'use client';

import Nosotros from './_components/Nosotros.jsx';
import Proyectos from './_components/Proyectos.jsx';
import Contacto from './_components/Contacto.jsx';

import React from 'react';
import Header from './_components/Header.tsx';

function App() {
  return (
    <div className="text-center">
      <Header />
      <main
        className="text-center relative overflow-hidden w-full flex-col place-content-center h-svh px-6"
        id="inicio">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className="absolute top-36 -left-8 rotate-90 fill-uy-yellow-200 w-3/12">
          <path d="M360 240c-66.3 0-120-53.7-120-120a120 120 0 1 0-120 120c66.3 0 120 53.7 120 120a120 120 0 1 0 120-120Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className="absolute top-40 rotate-12 -right-12 fill-uy-blue-50 w-3/12">
          <path d="M240 0H0a240 240 0 0 0 240 240h240A240 240 0 0 0 240 0ZM240 240H0a240 240 0 0 0 240 240h240a240 240 0 0 0-240-240Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className="absolute top-72 -z-10 left-10 fill-uy-brown-50 w-3/12">
          <path d="M197.6 42.4 42.4 197.6a60 60 0 0 0 0 84.8l155.2 155.2a60 60 0 0 0 84.8 0l155.2-155.2a60 60 0 0 0 0-84.8L282.4 42.4a60 60 0 0 0-84.8 0Z"></path>
        </svg>
        <h1 className="text-3xl font-bold px-8 tracking-tight">
          Convertimos tu idea en realidad
        </h1>
        <p className="text-lg mt-6 mb-10 tracking-tight text-balance">
          Desarrollamos aplicaciones web para emprendedores y start-ups.{' '}
          <b>Creamos tu producto digital desde cero</b> o mejoramos el que ya
          tenés.
        </p>
        <a
          className="bg-black py-2 px-4 text-xl rounded no-underline text-white font-semibold border-2 border-transparent hover:text-black transition-all hover:bg-transparent hover:border-black"
          href="#contacto">
          Contános tu idea
        </a>
      </main>
      <Nosotros />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
