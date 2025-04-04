import { Link } from 'react-router-dom';
import '../assets/styles/pages/CursosPage.css';

const cursosTerapias = [
  {
    titulo: "Registros Akáshicos Angélicos",
    descripcion: "Accedé a la sabiduría del alma y canalizá mensajes con guía angelical. Curso completo propio.",
     modalidad: "vivo"
  },
  {
    titulo: "Péndulo Hebreo",
    descripcion: "Sesiones y cursos. Diagnóstico energético, limpieza vibracional y activación espiritual.",
     modalidad: "vivo"
  },
  {
    titulo: "Mesas Radiónicas",
    descripcion: "Herramienta cuántica para armonización, desbloqueo y manifestación de objetivos.",
     modalidad: "grabado"
  },
];

export default function TerapiasPage() {
  return (
    <div className="cursos-container">
      <section className="encabezado-cursos">
        <h1>Terapias de Luz y Energía</h1>
        <p>Técnicas sutiles que armonizan tu energía y te conectan con planos más elevados de conciencia. Un viaje hacia tu luz interior.</p>
      </section>

      <section className="grid-cursos">
        {cursosTerapias.map((curso, index) => (
          <div key={index} className="curso-card luzYEnergia">
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
