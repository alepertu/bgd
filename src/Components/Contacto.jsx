import './css/estilo-contactanosb1.css';
//import wpp
//import mail
function Contacto() {
  return (
    <section id="contacto">
      <h2>¡Contáctanos!</h2>
      <div className="cosa">
        <p>Nombre</p>
        <p>e-mail</p>
        <p>Mensaje</p>
      </div>
 
      <div className="container-form">
        <form action="#" autocomplete="off">
          <input
            type="text"
            name="nombre"
            className="campo"
            style={{ width: '314px', heigth: '1px' }}
          />
          <input
            type="emal"
            name="email"
            className="campo"
            style={{ width: '314px', heigth: '1px' }}
          />
          <textarea name="mensaje"></textarea>
          <input
            type="submit"
            name="enviar"
            value="¡Enviar Mensaje!"
            className="btn-enviar"
          />
        </form>
      </div>
      <p>
        ¡Estamos dispuestos a aclarar todas tus dudas!
        <br />
        <br />
        Nos pondremos en contacto contigo enseguida, a través del e-mail que
        ingreses.
        <br />
        ¡Brindamos soluciones con la mejor experiencia!
      </p>
      <h3>También puedes...</h3>
      <span>
        +598 98 381 512
        <br />
        <br />
        bgdesarrollo@gmail.com
      </span>
    </section>
  );
}
 
export default Contacto;
 
