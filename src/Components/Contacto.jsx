import './css/estilo-contactanosb1.css';
import wpp from '../images/iconos/whatsapp.svg';
import mail from '../images/iconos/mail.svg';

function Contacto() {
  return (
    <section id="contacto">
      <div id="todoformulario">
        <h2>¡Contáctanos!</h2>
        <form action="#" autocomplete="off">
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
            <a
              href="https://wa.me/59898381512"
              target="_blank"
              rel="noreferrer">
              <img src={wpp} alt="Enviar Whatsapp" />
            </a>
            +598 98 381 512
          </span>
          <span>
            <a
              href="mailto:bgdesarrollo@gmail.com"
              target="_blank"
              rel="noreferrer">
              <img src={mail} alt="Enviar Mail" />
            </a>
            bgdesarrollo@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
 
export default Contacto;
 
