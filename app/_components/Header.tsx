import logo from '../../public/Logo.svg';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import { useState } from 'react';
import Image from 'next/image';

const navItems = ['inicio', 'nosotros', 'proyectos', 'contacto'];

export default function Header() {
  let [mostrarMenu, setMostrarMenu] = useState(false);
  return (
    <header className="flex h-20 w-full p-4 items-center fixed top-0 left-0 bg-white">
      <a href="#inicio">
        <Image src={logo} alt="PYA DEVS Logo" width={50} height={50} />
      </a>
      <div className="w-full flex flex-col items-end">
        <a
          className="bg-black py-1 px-3 rounded mr-3 no-underline text-white font-semibold hover:bg-blue"
          href="#contacto">
          Contáctanos
        </a>
      </div>
      <button
        onClick={() => setMostrarMenu(!mostrarMenu)}
        className={`mx-1 ml-auto md:hidden`}>
        {!mostrarMenu ? <TiThMenu size="24" /> : <TiTimes size="24" />}
      </button>
      <nav
        className={`${
          mostrarMenu
            ? 'flex flex-col absolute top-20 left-0 w-full h-screen bg-uy-blue-50 pt-4'
            : 'hidden'
        }`}>
        {navItems.map((item, index) => (
          <a
            key={`nav-item-${index}`}
            href={`#${item}`}
            onClick={() => {
              setMostrarMenu(false);
            }}
            className={`no-underline border-2 bg-white w-3/4 rounded-lg text-2xl mx-auto text-left my-3 px-4 py-3 hover:border-black`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
