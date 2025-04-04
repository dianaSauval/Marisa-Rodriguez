import { Link } from 'react-router-dom';
import '../assets/styles/pages/CursosPage.css';

const cursosIntegrativos = [
  {
    titulo: "Terapia Floral",
    descripcion: "Uso de esencias para equilibrar emociones y transformar estados internos.",
     modalidad: "grabado"
  },
  {
    titulo: "Terapia de Vidas Pasadas – Regresiones",
    descripcion: "Curso y sesiones para explorar memorias profundas y liberar cargas del alma.",
     modalidad: "grabado"
  },
  {
    titulo: "Curso de Runas",
    descripcion: "Iniciación en la sabiduría nórdica, con enfoque mágico, terapéutico y simbólico.",
     modalidad: "grabado"
  },
];

export default function TerapiasIntegrativasPage() {
  return (
    <div className="cursos-container">
      <section className="encabezado-cursos">
        <h1>Terapias Integrativas</h1>
        <p>
          Espacios de sanación que fusionan sabiduría ancestral y herramientas contemporáneas para acompañar procesos emocionales, espirituales y energéticos.
        </p>
      </section>

      <section className="grid-cursos">
        {cursosIntegrativos.map((curso, index) => (
          <div key={index} className="curso-card terapiasIntegrativas">
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <Link to="/cursosDetalle">
            <button className="boton-mistico">Ver más</button></Link>
            {curso.modalidad === "vivo" && <span className="badge-modalidad vivo">En vivo</span>}
{curso.modalidad === "grabado" && <span className="badge-modalidad grabado">Grabado</span>}

          </div>
        ))}
      </section>
    </div>
  );
}
