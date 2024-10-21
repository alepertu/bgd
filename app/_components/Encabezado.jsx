import logo from '../../public/images/logobgdesarrollo.png';
import menu from '../../public/images/iconos/menu.svg';
import { useState } from 'react';
import Image from 'next/image';

const navItems = ['inicio', 'nosotros', 'proyectos', 'contacto'];

function Encabezado() {
  let [opcion, setOpcion] = useState('inicio');
  let [mostrarMenu, setMostrarMenu] = useState(false);
  return (
    <header className="flex h-24 box-border w-full bg-black items-center fixed top-0 left-0">
      <div className="mx-0 my-auto md:ml-2">
        <a href="#inicio">
          <Image
            src={logo}
            alt="Logo de BD Desarrollo"
            width={300}
            height={200}
            className="h-24"
          />
        </a>
      </div>
      <Image
        onClick={() => setMostrarMenu(!mostrarMenu)}
        className="mr-1 h-2/5 md:hidden"
        src={menu}
        alt="Botón para abrir menú"
        width={50}
        height={50}
      />
      <nav
        className={`${
          mostrarMenu ? 'flex flex-col absolute top-24 w-11/12' : 'hidden'
        } md:ml-1 md:w-full md:flex md:justify-evenly`}>
        {navItems.map((item, index) => (
          <a
            key={`nav-item-${index}`}
            href={`#${item}`}
            onClick={() => {
              setOpcion(item);
              setMostrarMenu(false);
            }}
            className={`no-underline bg-black font-normal	text-white text-lg p-1 md:p-0 md:pb-1 md:font-light hover:border-0 hover:bg-yellow-600 hover:text-black md:hover:text-white md:hover:bg-black md:hover:border-b-4 hover:border-yellow-600 ${
              opcion === item
                ? 'border-0 bg-yellow-600 text-black md:text-white md:bg-black md:border-b-4 md:border-yellow-600'
                : null
            }`}>
            {item.toLocaleUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Encabezado;
