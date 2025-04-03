import '../assets/styles/pages/CursosPage.css';

const cursosTerapias = [
  {
    titulo: "Registros Akáshicos Angélicos",
    descripcion: "Accedé a la sabiduría del alma y canalizá mensajes con guía angelical. Curso completo propio.",
  },
  {
    titulo: "Péndulo Hebreo",
    descripcion: "Sesiones y cursos. Diagnóstico energético, limpieza vibracional y activación espiritual.",
  },
  {
    titulo: "Mesas Radiónicas",
    descripcion: "Herramienta cuántica para armonización, desbloqueo y manifestación de objetivos.",
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
            <button className="boton-mistico">Ver más</button>
          </div>
        ))}
      </section>
    </div>
  );
}
