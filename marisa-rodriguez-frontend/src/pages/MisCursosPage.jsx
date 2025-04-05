import "../assets/styles/pages/MisCursosPage.css";

export default function MisCursosPage() {
    // Simulación de datos
    const clasesEnVivo = [
      {
        titulo: "Práctica de Lectura de Tarot",
        fecha: "2025-04-12T19:00:00",
        linkWhatsapp: "https://wa.me/5491123456789?text=Hola,%20quiero%20sumarme%20a%20la%20clase%20de%20Tarot",
      },
      {
        titulo: "Reiki en Luna Nueva",
        fecha: "2025-04-02T20:30:00",
        linkWhatsapp: "https://wa.me/5491123456789?text=Hola,%20quiero%20sumarme%20a%20la%20clase%20de%20Reiki",
      },
    ];
  
    const cursosGrabados = [
      {
        titulo: "Reiki Usui - Nivel I y II",
        descripcion: "Canalizá energía para armonizar cuerpo, mente y espíritu.",
        categoria: "reiki",
      },
      {
        titulo: "Tarot Evolutivo para Principiantes",
        descripcion: "Lectura simbólica y transformadora del Tarot.",
        categoria: "tarot",
      },
    ];
  
    const ahora = new Date();
  
    const clasesProximas = clasesEnVivo.filter(
      (clase) => new Date(clase.fecha) > ahora
    );
  
    const clasesPasadas = clasesEnVivo.filter(
      (clase) => new Date(clase.fecha) <= ahora
    );
  
    const formatearFecha = (fechaISO) => {
      const opciones = { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" };
      return new Date(fechaISO).toLocaleDateString("es-AR", opciones);
    };
  
    return (
      <div className="mis-cursos-container">
        <h1 className="titulo-principal">🌟 Mis Cursos</h1>
  
        {/* Cursos grabados */}
        <section className="seccion-cursos">
          <h2 className="subtitulo-seccion">🎥 Cursos Grabados</h2>
          {cursosGrabados.length > 0 ? (
            <div className="grid-cursos">
              {cursosGrabados.map((curso, index) => (
                <div key={index} className={`curso-card ${curso.categoria}`}>
                  <h3>{curso.titulo}</h3>
                  <p>{curso.descripcion}</p>
                  <button className="boton-mistico">Acceder al curso</button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mensaje-vacio">Aún no compraste cursos grabados.</p>
          )}
        </section>
  
        {/* Clases en vivo próximas */}
        <section className="seccion-vivo">
          <h2 className="subtitulo-seccion">🔮 Próximas Clases en Vivo</h2>
          {clasesProximas.length > 0 ? (
            <ul className="lista-clases">
              {clasesProximas.map((clase, index) => (
                <li key={index} className="item-clase">
                  <span className="titulo-clase">{clase.titulo}</span>
                  <span className="fecha-clase">📅 {formatearFecha(clase.fecha)}</span>
                  <a
                    href={clase.linkWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-whatsapp"
                  >
                    Ir al grupo de WhatsApp
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mensaje-vacio">No hay clases en vivo próximas por ahora.</p>
          )}
        </section>
  
        {/* Clases en vivo pasadas */}
        <section className="seccion-vivo">
          <h2 className="subtitulo-seccion">📜 Clases Anteriores</h2>
          {clasesPasadas.length > 0 ? (
            <ul className="lista-clases">
              {clasesPasadas.map((clase, index) => (
                <li key={index} className="item-clase item-pasado">
                  <span className="titulo-clase">{clase.titulo}</span>
                  <span className="fecha-clase">🕓 {formatearFecha(clase.fecha)}</span>
                  <span className="estado-pasado">Finalizada</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mensaje-vacio">Todavía no participaste de ninguna clase en vivo.</p>
          )}
        </section>
      </div>
    );
  }