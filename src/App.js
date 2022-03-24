import './App.css';
import Encabezado from './Components/Encabezado.jsx';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Proyectos from './Components/Proyectos';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Inicio />
      <Nosotros />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
