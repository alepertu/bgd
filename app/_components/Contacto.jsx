import './css/estilo-contactanosb1.css';
import wpp from '../../public/images/iconos/whatsapp.svg';
import mail from '../../public/images/iconos/mail.svg';
import Image from 'next/image';

function Contacto() {
  return (
    <section id="contacto">
      <div id="todoformulario">
        <h2>¡Contáctanos!</h2>
        <form action="#" autoComplete="off">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" className="campo" />
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" className="campo" />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje"></textarea>
          <input
            type="submit"
            name="enviar"
            value="¡ENVIAR!"
            className="btn-enviar"
          />
        </form>
      </div>
      <div id="textoform">
        <p>
          ¡Estamos dispuestos a aclarar todas tus dudas!
          <br />
          <br />
          Nos pondremos en contacto contigo enseguida, a través del e-mail que
          ingreses.
          <br />
          <br />
          ¡Brindamos soluciones con la mejor experiencia!
        </p>
        <h3>También puedes...</h3>
        <div className="contactos">
          <span>
            <a href="https://wa.me/097827767" target="_blank" rel="noreferrer">
              <Image src={wpp} alt="Enviar Whatsapp" width={50} height={50} />
            </a>
            097 827 767
          </span>
          <span>
            <a
              href="mailto:bgdesarrollouy@gmail.com"
              target="_blank"
              rel="noreferrer">
              <Image src={mail} alt="Enviar Mail" width={50} height={50} />
            </a>
            bgdesarrollouy@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
