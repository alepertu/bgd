import "./css/nosotros.css";
import Presentacion from "./Presentacion";
import ale from "../../public/images/ale.jpeg";
import moi from "../../public/images/moi.jpeg";
import moia from "../../public/images/moia.jpeg";
import apache from "../../public/images/iconos/apache.svg";
import express from "../../public/images/iconos/express.svg";
import css from "../../public/images/iconos/css.svg";
import js from "../../public/images/iconos/js.svg";
import mongo from "../../public/images/iconos/mongo.svg";
import html from "../../public/images/iconos/html.svg";
import mysql from "../../public/images/iconos/mysql.svg";
import next from "../../public/images/iconos/next.svg";
import node from "../../public/images/iconos/node.svg";
import php from "../../public/images/iconos/php.svg";
import react from "../../public/images/iconos/react.svg";
import sass from "../../public/images/iconos/sass.svg";
import webpack from "../../public/images/iconos/webpack.svg";
import git from "../../public/images/iconos/git.svg";
import Image from "next/image";

function Nosotros() {
  return (
    <section id="nosotros">
      <h2>¡Hola!</h2>
      <p>
        Somos una empresa uruguaya que busca instalarse en el mercado del
        software. Nos caracterizamos por asumir nuevos desafíos, contando con
        las herramientas y el conocimiento para convertir tus ideas en
        realidades.
        <br />
        <br />
        Nos apasiona el emprendedurismo, el trabajo en equipo, y ejecutar
        proyectos de calidad para cada uno de nuestros clientes. ¿La clave? Una
        buena comunicación y correcta apreciación del trabajo que quiere
        realizarse.
      </p>
      <h3>Nuestras tecnologías</h3>
      <section className="tecnologias">
        <Image src={html} alt="Logo HTML" width={100} height={100} />
        <Image src={js} alt="Logo Javascript" width={100} height={100} />
        <Image src={react} alt="Logo React" width={100} height={100} />
        <Image src={express} alt="Logo Express.js" width={100} height={100} />
        <Image src={mysql} alt="Logo MySQL" width={100} height={100} />
        <Image src={next} alt="Logo Next.js" width={100} height={100} />
        <Image src={sass} alt="Logo SASS" width={100} height={100} />
        <Image src={css} alt="Logo CSS" width={100} height={100} />
        <Image src={php} alt="Logo PHP" width={100} height={100} />
        <Image src={node} alt="Logo Node.js" width={100} height={100} />
        <Image src={mongo} alt="Logo MongoDB" width={100} height={100} />
        <Image src={webpack} alt="Logo Webpack" width={100} height={100} />
        <Image src={git} alt="Logo Git" width={100} height={100} />
        <Image src={apache} alt="Logo Apache" width={100} height={100} />
      </section>

      <h3>Sobre nosotros</h3>
      <section className="presentaciones">
        <Presentacion
          persona="Alejandro Pertusatti"
          bio="Soy Ale, tengo 23 años. Me recibí de Diseñador Gráfico en 2019, y soy un apasionado de la programación. Soy estudiante avanzado de Químico Farmacéutico en UdelaR. Además, trabajo actualmente en Fraud Prevention de Mercado Libre. Me gusta conocer lugares nuevos, y disfruto del tiempo de calidad con mi familia."
          perfil={moi}
        />
        <Presentacion
          persona="María Pía Machado"
          bio="Soy Pía, tengo 23 años. Me titulé como Analista en Programación en 2020. Actualmente soy estudiante avanzada de Ingeniería Química en UdelaR. Además de programar, trabajo en Customer Service de Mercado Libre. Disfruto de mis trabajos, de la música, de viajar, y de pasar buenos momentos en familia."
          perfil={moia}
        />
        <Presentacion
          persona="Alejandro Bustamante"
          bio="Soy Ale, tengo 25 años, me apasiona el mundo del emprendimiento, por lo que inicié mi primer proyecto en 2018, el cual cuenta hoy con más de 2mil usuarios, desde entonces me he dedicado al desarrollo y organización de diferentes empresas. Actualmente soy el director de la empresa Bustamante Gascue Group. Me encanta viajar y conocer las distintas formas en que puede vivir una persona en el mundo."
          perfil={ale}
        />
      </section>
    </section>
  );
}

export default Nosotros;
