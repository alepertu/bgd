function Inicio() {
  return (
    <main className="pt-12 text-left ml-2 md:pt-3 h-svh" id="inicio">
      <h1 className="text-4xl md:text-6xl text-white pt-20 font-bold w-11/12">
        Soluciones en tecnología
        <br />
        al alcance de un clic.
      </h1>
      <p className="w-11/12 text-2xl md:w-3/4 mb-14 text-white">
        Nos dedicamos al diseño, desarrollo y mantenimiento de páginas webs y
        aplicaciones móviles, implementando tecnologías modernas y con
        soluciones que se adaptan a las necesidades de tu compañía o
        emprendimiento.
      </p>
      <a
        className="p-4 text-2xl no-underline bg-yellow-600 text-black font-semibold hover:bg-white"
        href="#contacto">
        Solicita tu presupuesto
      </a>
    </main>
  );
}

export default Inicio;
