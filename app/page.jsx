'use client';

import Encabezado from './_components/Encabezado.jsx';
import Inicio from './_components/Inicio.jsx';
import Nosotros from './_components/Nosotros.jsx';
import Proyectos from './_components/Proyectos.jsx';
import Contacto from './_components/Contacto.jsx';

function App() {
  return (
    <div className="text-center bg-no-repeat bg-fixed bg-cover App">
      <Encabezado />
      <Inicio />
      <Nosotros />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
