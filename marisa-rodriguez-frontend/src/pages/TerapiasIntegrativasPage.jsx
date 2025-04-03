import '../assets/styles/pages/CursosPage.css';

const cursosIntegrativos = [
  {
    titulo: "Terapia Floral",
    descripcion: "Uso de esencias para equilibrar emociones y transformar estados internos.",
  },
  {
    titulo: "Terapia de Vidas Pasadas – Regresiones",
    descripcion: "Curso y sesiones para explorar memorias profundas y liberar cargas del alma.",
  },
  {
    titulo: "Curso de Runas",
    descripcion: "Iniciación en la sabiduría nórdica, con enfoque mágico, terapéutico y simbólico.",
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
            <button className="boton-mistico">Ver más</button>
          </div>
        ))}
      </section>
    </div>
  );
}
