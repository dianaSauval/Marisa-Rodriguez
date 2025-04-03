import '../assets/styles/pages/CursosPage.css';

const cursosReiki = [
  {
    titulo: "Reiki Usui (Nivel I, II, III y Maestría)",
    descripcion: "El sistema tradicional de Reiki japonés. Ideal para iniciarse en la canalización energética, armonizar chakras y desarrollar la sanación personal y a otros.",
  },
  {
    titulo: "Reiki con Ángeles",
    descripcion: "Conecta con la energía amorosa y elevada de los ángeles. Aporta guía, claridad espiritual y protección en los procesos de sanación.",
  },
  {
    titulo: "Reiki Lunar",
    descripcion: "Trabaja con los ciclos femeninos, la intuición, el linaje materno y la reconexión con la energía de la luna. Muy útil para sanar lo femenino y lo emocional.",
  },
  {
    titulo: "Reiki Celta",
    descripcion: "Inspirado en la sabiduría ancestral celta, este sistema integra los elementos de la naturaleza y los arquetipos sagrados para armonizar cuerpo y alma.",
  },
  {
    titulo: "Reiki Kármico",
    descripcion: "Permite trabajar bloqueos y memorias del alma vinculados a vidas pasadas. Ayuda a liberar pactos, lealtades y patrones que ya no tienen vigencia.",
  },
  {
    titulo: "Reiki Ganesh",
    descripcion: "Basado en la energía del dios Ganesh, este sistema facilita la remoción de obstáculos, aporta apertura de caminos y estabilidad en momentos de cambio.",
  },
  {
    titulo: "Reiki de la Llama Violeta",
    descripcion: "Canaliza el Rayo Violeta de Saint Germain para la transmutación energética, el perdón profundo y la elevación vibracional.",
  },
  {
    titulo: "Reiki del Amado Arcángel Miguel",
    descripcion: "Sistema canalizado de protección y liberación energética. Trabaja con la espada de luz del Arcángel Miguel para cortar lazos nocivos y fortalecer el aura.",
    esPropio: true,
  },
  {
    titulo: "Karuna Reiki",
    descripcion: "Sistema complementario al Reiki Usui, enfocado en la compasión, el perdón y la sanación profunda del alma. Ideal para terapeutas avanzados.",
  },
  {
    titulo: "Karuna Reiki Avanzado",
    descripcion: "Expansión del sistema Karuna. Trabaja con símbolos de alta frecuencia para una sanación más intensa, compasiva y multidimensional.",
  },
  {
    titulo: "Reiki de las Hadas",
    descripcion: "Sistema sutil y mágico que conecta con la energía del reino elemental. Sanación emocional, alegría, liviandad y conexión con la belleza de lo simple.",
  },
  {
    titulo: "Reiki de la Virgen",
    descripcion: "Reiki devocional guiado por la energía maternal de la Virgen María. Suaviza heridas del corazón, aporta contención, ternura y consuelo espiritual.",
  },
  {
    titulo: "Reiki Mariel",
    descripcion: "Canaliza la energía compasiva de la Madre María y el rayo rosa. Aporta sanación profunda al corazón y al cuerpo emocional.",
  },
];

export default function ReikiPage() {
  return (
    <div className="cursos-container">
      <section className="encabezado-cursos">
        <h1>Reiki</h1>
        <p>
          Sanación energética a través de la canalización universal. Explorá distintos sistemas que armonizan cuerpo, mente y alma.
        </p>
      </section>

      <section className="grid-cursos">
        {cursosReiki.map((curso, index) => (
         <div key={index} className={`curso-card reiki ${curso.esPropio ? 'canalizado' : ''}`}>

            <h3>
              {curso.titulo}              
            </h3>
            {curso.esPropio && <span className="badge-propio">Sistema Canalizado</span>}
            <p>{curso.descripcion}</p>
            <button className="boton-mistico">Ver más</button>
          </div>
        ))}
      </section>
    </div>
  );
}
