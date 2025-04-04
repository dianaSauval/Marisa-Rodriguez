import "../assets/styles/pages/ClaseVivoDetallePage.css";
import { Link } from "react-router-dom";

export default function ClaseVivoDetallePage() {
  // En el futuro podrías traer esta info por ID desde una base de datos o prop
  const clase = {
    titulo: "Reiki en Vivo: Sanación de Luna Nueva",
    descripcion:
      "Clase especial para conectar con la energía de la luna nueva. Vamos a canalizar reiki en grupo, con ejercicios guiados y meditación. Ideal para quienes ya estén iniciados en Reiki y quieran una práctica en comunidad.",
    fecha: "17 de abril, 20:30 hs (ARG)",
    cupos: 30,
    imagen:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1743717077/Marisa%20Rodriguez/tarot-fondo-_v8owdy.png",
    linkWhatsApp:
      "https://wa.me/5491112345678?text=Hola!%20Quiero%20sumarme%20a%20la%20clase%20de%20Reiki%20en%20vivo.",
  };

  return (
    <div className="clase-detalle-container">
      <section className="detalle-header">
        <h1>{clase.titulo}</h1>        
      </section>

      <section className="detalle-info">
        <div>
        <span className="badge-vivo">🟣 En Vivo</span>
          <p className="descripcion">{clase.descripcion}</p>
          <p className="detalle-fecha">📅 Fecha: {clase.fecha}</p>
          <p className="detalle-cupos">👥 Cupos disponibles: {clase.cupos}</p>

          <div className="detalle-beneficios">
            <h3>✨ ¿Qué incluye esta clase?</h3>
            <ul>
              <li>✔️ Clase en vivo vía Zoom</li>
              <li>✔️ Acceso a grupo exclusivo de WhatsApp</li>
              <li>✔️ Material complementario después del encuentro</li>
              <li>✔️ Espacio para consultas y comunidad</li>
            </ul>
          </div>
        </div>
        {/* Imagen Destacada */}
        <div className="curso-imagen">
          <img src={clase.imagen} alt={`Imagen del curso ${clase.titulo}`} />
        </div>
      </section>
      <div className="buttonsClaseDetalle">
        <a href={clase.linkWhatsApp} target="_blank" rel="noopener noreferrer">
          <button className="boton-inscripcion">Quiero inscribirme</button>
        </a>

        <Link to="/clases-en-vivo" className="volver-link">
          ← Volver a clases en vivo
        </Link>
      </div>
    </div>
  );
}
