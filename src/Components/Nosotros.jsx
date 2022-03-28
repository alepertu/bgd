import './css/nosotros.css';
import Presentacion from './Presentacion';
import ale from '../images/ale.jpeg';
import moi from '../images/moi.jpeg';
import moia from '../images/moia.jpeg';

function Nosotros() {
  return (
    <section id="nosotros">
      <h2>¡Hola!</h2>
      <p>
        Somos una empresa uruguaya que busca instalarse en el mercado del
        software. Nos gusta asumir nuevos desafíos y contamos con las
        herramientas y el conocimiento para poner en práctica todas tus ideas.
        <br />
        <br />
        Nos apasiona el emprendurismo, el trabajo en equipo, y nos esforzamos
        día a día para ejecutar proyectos con calidad y comunicación con
        nuestros clientes.
      </p>
      <h3>Nuestras tecnologías</h3>
      <Presentacion
        persona="Alejandro Pertusatti"
        bio="Soy Ale, tengo 23 años. Me recibí de Diseñador Gráfico en 2019, y soy un apasionado de la programación. Soy estudiante avanzado de Químico Farmacéutico en UdelaR. Además, trabajo actualmente en Customer Service de Mercado Libre."
        perfil={moi}
      />
      <Presentacion
        persona="María Pía Machado"
        bio="Soy Pía, tengo 23 años. Me titulé como Analista en Programación en 2020. Actualmente soy estudiante avanzada de Ingeniería Química en UdelaR. Además de programar, trabajo en Customer Service de Mercado Libre. Distrufo de mis trabajos y de los momentos en familia."
        perfil={moia}
      />
      <Presentacion
        persona="Alejandro Bustamante"
        bio="Soy Ale, tengo 25 años, me apasiona el mundo del emprendimiento, por lo que inicié mi primer proyecto en 2018, el cual cuenta hoy con más de 2mil usuarios, desde entonces me he dedicado al desarrollo y organización de diferentes empresas. Actualmente soy el director de la empresa Bustamante Gascue Group. Me encanta viajar y conocer las distintas formas en que puede vivir una persona en el mundo."
        perfil={ale}
      />
      <section></section>
    </section>
  );
}

export default Nosotros;
