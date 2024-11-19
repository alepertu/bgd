'use client';

import Proyectos from './_components/Proyectos.jsx';
import Contacto from './_components/Contacto.jsx';

import React from 'react';
import Header from './_components/Header.tsx';
import MainCard from './_components/MainCard.tsx';
import Section from './_components/Section.tsx';

function App() {
  return (
    <div className="text-center">
      <Header />
      <main>
        <Section id="inicio">
          <div className="relative h-1/2 md:h-auto md:py-32 flex flex-col place-content-end md:place-content-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute top-36 -z-10 -left-8 md:-left-12 rotate-90 fill-uy-yellow-200 w-24">
              <path d="M360 240c-66.3 0-120-53.7-120-120a120 120 0 1 0-120 120c66.3 0 120 53.7 120 120a120 120 0 1 0 120-120Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute top-40 -z-10 rotate-12 -right-12 md:-right-16 fill-uy-blue-50 w-24">
              <path d="M240 0H0a240 240 0 0 0 240 240h240A240 240 0 0 0 240 0ZM240 240H0a240 240 0 0 0 240 240h240a240 240 0 0 0-240-240Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute top-72 md:top-56 -z-10 left-10 md:left-32 fill-uy-brown-50 w-24">
              <path d="M197.6 42.4 42.4 197.6a60 60 0 0 0 0 84.8l155.2 155.2a60 60 0 0 0 84.8 0l155.2-155.2a60 60 0 0 0 0-84.8L282.4 42.4a60 60 0 0 0-84.8 0Z"></path>
            </svg>
            <h1 className="text-3xl md:text-4xl font-bold px-8 tracking-tight">
              Convertimos tu idea en realidad
            </h1>
            <p className="text-lg mt-4 mb-6 tracking-tight leading-6 text-balance">
              Desarrollamos aplicaciones web para emprendedores y start-ups.{' '}
              <b>Creamos tu producto digital desde cero</b> o mejoramos el que
              ya tenés.
            </p>
            <a
              className="bg-black py-2 px-4 text-xl rounded no-underline mx-auto text-white font-semibold border-2 border-transparent hover:text-black transition-all hover:bg-transparent hover:border-black"
              href="#contacto">
              Contános tu idea
            </a>
          </div>
          <div className="relative h-1/2 md:h-96 top-10 md:top-0">
            <MainCard
              order={1}
              title="Tienda online"
              desc='"Quiero mi tienda online para potenciar mis ventas y llegar a más clientes."'
            />
            <MainCard
              order={2}
              title="Landing Page"
              desc='"Quiero una página donde presentar mi producto y mostrar todos los servicios que ofrezco."'
            />
            <MainCard
              order={3}
              title="Blog personal"
              desc='"Quiero un lugar donde poder expresarme y contarle a mis seguidores lo que pienso."'
            />
          </div>
          <span
            className="absolute bottom-0 left-0 w-full h-4 border-b-2 border-white bg-white rounded-t-full z-10"
            aria-hidden="true"></span>
        </Section>
        <Section id="nosotros">
          <h2>¡Hola!</h2>
          <p>
            Somos una empresa uruguaya que busca instalarse en el mercado del
            software. Nos caracterizamos por asumir nuevos desafíos, contando
            con las herramientas y el conocimiento para convertir tus ideas en
            realidades.
            <br />
            <br />
            Nos apasiona el emprendedurismo, el trabajo en equipo, y ejecutar
            proyectos de calidad para cada uno de nuestros clientes. ¿La clave?
            Una buena comunicación y correcta apreciación del trabajo que quiere
            realizarse.
          </p>
          <h3>Nuestras tecnologías</h3>
          <h3>Sobre nosotros</h3>
        </Section>
      </main>
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
