'use client';

import Inicio from './_components/Inicio.jsx';
import Nosotros from './_components/Nosotros.jsx';
import Proyectos from './_components/Proyectos.jsx';
import Contacto from './_components/Contacto.jsx';
import React from 'react';
import Header from './_components/Header.tsx';

function App() {
  return (
    <div className="text-center">
      <Header />
      <Inicio />
      <Nosotros />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
