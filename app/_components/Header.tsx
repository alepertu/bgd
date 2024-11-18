import { useState } from 'react';
import { TiThMenu, TiTimes } from 'react-icons/ti';

const Logo = () => {
  return (
    <svg
      className="h-full"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 281.95 281.95">
      <defs>
        <style>{`
          .cls-1 {
            fill: #fff;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 10px;
          }

          .cls-2 {
            stroke - width: 0px;
          }
        `}</style>
      </defs>
      <g id="Main">
        <g id="Logo">
          <rect className="cls-1" x="5" y="5" width="271.95" height="271.95" />
          <path
            className="cls-2"
            d="M65.72,24.15H24.5v87.15h17.41v-33.65h23.81c32.61.15,32.39-53.36,0-53.5ZM65.82,61.54h-23.9v-20.56h23.9c9.46,0,9.46,20.56,0,20.56Z"
          />
          <polygon
            className="cls-2"
            points="151.72 24.15 132.75 57.18 113.55 24.15 96.13 24.15 124.1 72.25 101.74 111.18 119.16 111.18 169.13 24.15 151.72 24.15"
          />
          <path
            className="cls-2"
            d="M188.86,24.09l-49.98,87.02h17.41l32.56-56.64,32.56,56.64h17.41l-49.98-87.02Z"
          />
          <path
            className="cls-2"
            d="M221.06,173.63c-5.47,0-9.95-1.42-13.43-4.25-3.48-2.83-5.61-6.6-6.37-11.3l10.08-2.52c.53,2.98,1.68,5.21,3.46,6.7,1.77,1.49,3.98,2.23,6.62,2.23,1.34,0,2.57-.23,3.67-.68,1.1-.46,1.97-1.12,2.59-1.98.62-.86.94-1.9.94-3.1,0-1.1-.32-2.08-.97-2.92s-1.67-1.62-3.06-2.34c-1.39-.72-3.17-1.49-5.33-2.3-3.26-1.3-5.98-2.67-8.14-4.14-2.16-1.46-3.76-3.16-4.79-5.08-1.03-1.92-1.55-4.15-1.55-6.7,0-2.74.67-5.16,2.02-7.27,1.34-2.11,3.23-3.77,5.65-4.97,2.42-1.2,5.24-1.8,8.46-1.8,3.46,0,6.5.79,9.14,2.38,2.64,1.58,4.78,3.96,6.41,7.13l-8.21,4.97c-.96-1.73-2.09-3.05-3.38-3.96-1.3-.91-2.74-1.37-4.32-1.37-1.01,0-1.92.19-2.74.58-.82.38-1.48.94-1.98,1.66-.5.72-.76,1.54-.76,2.45,0,.96.29,1.84.86,2.63s1.57,1.57,2.99,2.34c1.42.77,3.3,1.61,5.65,2.52,3.17,1.15,5.8,2.44,7.88,3.85,2.09,1.42,3.67,3.06,4.75,4.93,1.08,1.87,1.62,4.13,1.62,6.77,0,3.02-.75,5.71-2.23,8.06-1.49,2.35-3.56,4.19-6.23,5.51-2.66,1.32-5.77,1.98-9.32,1.98Z"
          />
          <path
            className="cls-2"
            d="M159.07,172.62l-20.16-50.18h11.38l14.33,37.51h-3.31l14.04-37.51h11.45l-20.09,50.18h-7.63Z"
          />
          <path
            className="cls-2"
            d="M87.21,172.62v-50.18h33.55v9.22h-23.26v10.58h21.89v9.22h-21.89v11.95h23.26v9.22h-33.55Z"
          />
          <path
            className="cls-2"
            d="M24.5,172.62v-50.18h14.9c8.35,0,14.82,2.21,19.4,6.62,4.58,4.42,6.88,10.7,6.88,18.86s-2.26,14.08-6.77,18.32c-4.51,4.25-11.04,6.37-19.58,6.37h-14.83ZM34.8,163.19h3.46c3.6,0,6.67-.44,9.22-1.33,2.54-.89,4.49-2.46,5.83-4.72,1.34-2.25,2.02-5.45,2.02-9.58s-.65-7.19-1.94-9.47c-1.3-2.28-3.14-3.89-5.54-4.82-2.4-.94-5.28-1.4-8.64-1.4h-4.39v31.32Z"
          />
        </g>
      </g>
    </svg>
  );
};

const navItems = ['inicio', 'nosotros', 'proyectos', 'contacto'];

export default function Header() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <header className="flex h-20 z-50 w-full p-4 items-center fixed top-0 left-0 bg-uy-blue-50">
      <a href="#inicio" className="h-full">
        <Logo />
      </a>
      <div className="w-full flex flex-col items-end">
        <a
          className="bg-black py-1 px-3 rounded mr-3 no-underline text-white font-semibold border-2 border-transparent hover:text-black transition-all hover:bg-transparent hover:border-black"
          href="#contacto">
          Contactanos
        </a>
      </div>
      <button
        onClick={() => setMostrarMenu(!mostrarMenu)}
        className="mx-1 ml-auto">
        {!mostrarMenu ? <TiThMenu size="24" /> : <TiTimes size="24" />}
      </button>

      {/* Navigation overlay */}
      <div
        className={`fixed inset-0 bg-uy-blue-50 top-20 ${
          mostrarMenu ? 'block' : 'hidden'
        }`}>
        <nav className="h-full overflow-y-auto px-4 pb-20">
          <div className="flex flex-col w-full max-h-full py-4">
            {navItems.map((item, index) => (
              <a
                key={`nav-item-${index}`}
                href={`#${item}`}
                onClick={() => setMostrarMenu(false)}
                className="no-underline border-2 border-transparent bg-white w-3/4 rounded-lg text-2xl mx-auto text-left my-2 px-4 py-3 hover:border-black">
                {item}
              </a>
            ))}
          </div>
          <div className="h-20" aria-hidden="true"></div>
        </nav>
      </div>
    </header>
  );
}
