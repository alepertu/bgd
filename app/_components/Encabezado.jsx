import './css/estiloencabezadob1.css';
import logo from '../../public/images/logobgdesarrollo.png';
import menu from '../../public/images/iconos/menu.svg';
import { useState } from 'react';
import Image from 'next/image';

function Encabezado() {
  let [opcion, setOpcion] = useState('inicio');
  let [mostrarMenu, setMostrarMenu] = useState(false);
  return (
    <header>
      <div className="logo">
        <a href="#inicio">
          <Image
            src={logo}
            alt="Logo de BD Desarrollo"
            width={300}
            height={200}
          />
        </a>
      </div>
      <Image
        onClick={() => setMostrarMenu(!mostrarMenu)}
        className="boton-menu"
        src={menu}
        alt="Botón para abrir menú"
        width={50}
        height={50}
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
