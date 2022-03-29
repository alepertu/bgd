import './css/estiloencabezadob1.css';
import logo from '../images/logobgdesarrollo.png';
import React, { useState } from 'react';
function Encabezado() {
  let [opcion, setOpcion] = useState('inicio');
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo de BD Desarrollo"></img>
      </div>
      <nav>
        <a
          href="#inicio"
          onClick={() => setOpcion('inicio')}
          className={opcion === 'inicio' ? 'activa' : null}>
          INICIO
        </a>
        <a
          href="#nosotros"
          onClick={() => setOpcion('nosotros')}
          className={opcion === 'nosotros' ? 'activa' : null}>
          NOSOTROS
        </a>
        <a
          href="#proyectos"
          onClick={() => setOpcion('proyectos')}
          className={opcion === 'proyectos' ? 'activa' : null}>
          PROYECTOS
        </a>
        <a
          href="#contacto"
          onClick={() => setOpcion('contacto')}
          className={opcion === 'contacto' ? 'activa' : null}>
          CONTACTO
        </a>
      </nav>
    </header>
  );
}

export default Encabezado;
