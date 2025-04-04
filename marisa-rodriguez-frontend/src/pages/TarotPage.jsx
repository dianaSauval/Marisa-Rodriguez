import { Link } from 'react-router-dom';
import '../assets/styles/pages/CursosPage.css'

const cursosTarot = [
  {
    titulo: "Tarot Evolutivo para Principiantes",
    descripcion: "Curso de 10 clases. Aprendé a leer el Tarot desde una mirada simbólica y transformadora. Incluye clases grabadas, material PDF y certificado.",
    modalidad: "vivo"
  },
  {
    titulo: "Tarot Avanzado",
    descripcion: "Curso de 4 clases. Para quienes ya tienen base y desean profundizar en combinaciones, arquetipos y lecturas complejas.",
    modalidad: "vivo"
  },
  {
    titulo: "Lecturas y Prácticas de Tarot",
    descripcion: "Espacio de práctica supervisada para afianzar la interpretación y el vínculo con las cartas.",
    modalidad: "grabado"
  },
  {
    titulo: "Tarot y Constelaciones Familiares",
    descripcion: "Curso de 6 clases. Abordaje integrador entre el Tarot y las dinámicas del árbol genealógico.",
    modalidad: "grabado"
  },
  {
    titulo: "Cartomancia Lenormand",
    descripcion: "Curso para aprender a leer la baraja Lenormand con enfoque predictivo y simbólico.",
    modalidad: "grabado"
  },
];

export default function TarotPage() {
  return (
    <div className="cursos-container">
      <section className="encabezado-cursos">
        <h1>Tarot</h1>
        <p>Explorá el Tarot como herramienta de autoconocimiento, sanación y guía espiritual. Conectá con el simbolismo y la sabiduría ancestral.</p>
      </section>

      <section className="grid-cursos">
        {cursosTarot.map((curso, index) => (
          <div key={index} className="curso-card tarot">
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
