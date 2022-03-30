import './css/estiloencabezadob1.css';
import logo from '../images/logobgdesarrollo.png';
import menu from '../images/iconos/menu.svg';
import React, { useState } from 'react';

function Encabezado() {
  let [opcion, setOpcion] = useState('inicio');
  let [mostrarMenu, setMostrarMenu] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo de BD Desarrollo" />
      </div>
      <img
        onClick={() => setMostrarMenu(!mostrarMenu)}
        className="boton-menu"
        src={menu}
        alt="Botón para abrir menú"
      />
      <nav className={mostrarMenu ? 'menu-abierto' : null}>
        <a
          href="#inicio"
          onClick={() => {
            setOpcion('inicio');
            setMostrarMenu(false);
          }}
          className={opcion === 'inicio' ? 'activa' : null}>
          INICIO
        </a>
        <a
          href="#nosotros"
          onClick={() => {
            setOpcion('nosotros');
            setMostrarMenu(false);
          }}
          className={opcion === 'nosotros' ? 'activa' : null}>
          NOSOTROS
        </a>
        <a
          href="#proyectos"
          onClick={() => {
            setOpcion('proyectos');
            setMostrarMenu(false);
          }}
          className={opcion === 'proyectos' ? 'activa' : null}>
          PROYECTOS
        </a>
        <a
          href="#contacto"
          onClick={() => {
            setOpcion('contacto');
            setMostrarMenu(false);
          }}
          className={opcion === 'contacto' ? 'activa' : null}>
          CONTACTO
        </a>
      </nav>
    </header>
  );
}

export default Encabezado;
