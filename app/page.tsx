import SectionProyectos from './_sections/SectionProyectos.tsx';
import SectionContacto from './_sections/SectionContacto.tsx';
import SectionQuienesSomos from './_sections/SectionQuienesSomos.tsx';
import SectionPlanes from './_sections/SectionPlanes.tsx';
import SectionPresentacion from './_sections/SectionPresentacion.tsx';
import SectionCallToAction from './_sections/SectionCallToAction.tsx';
import Footer from './_components/Footer.tsx';
import Header from './_components/Header.tsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <SectionPresentacion />
        <SectionProyectos />
        <SectionQuienesSomos />
        <SectionPlanes />
        <SectionContacto />
        <SectionCallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
