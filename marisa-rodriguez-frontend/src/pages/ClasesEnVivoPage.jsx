import { useState } from "react";
import "../assets/styles/pages/AllCursosPage.css";
import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState/EmptyState";

// 🔮 Datos simulados
const clasesEnVivo = [
  {
    titulo: "Prácticas de Lectura de Tarot (Nivel Abierto)",
    descripcion:
      "Sesión en vivo para practicar lecturas y compartir interpretaciones.",
    categoria: "tarot",
    modalidad: "vivo",
    fecha: "12 de abril, 19:00 hs (ARG)",
    cupos: 20,
  },
  {
    titulo: "Reiki en Vivo: Sanación de Luna Nueva",
    descripcion:
      "Conectá con la energía lunar y activá tu canal reiki en grupo.",
    categoria: "reiki",
    modalidad: "vivo",
    fecha: "17 de abril, 20:30 hs (ARG)",
    cupos: 30,
  },
  {
    titulo: "Taller de Registros Akáshicos",
    descripcion:
      "Clase introductoria a la lectura de Registros, con ejercicios guiados.",
    categoria: "luzYEnergia",
    modalidad: "vivo",
    fecha: "20 de abril, 18:00 hs (ARG)",
    cupos: 25,
  },
];

const categorias = [
  { key: "todos", label: "Todos ✨" },
  { key: "tarot", label: "Tarot 🔮" },
  { key: "reiki", label: "Reiki 🕊️" },
  { key: "luzYEnergia", label: "Terapias de Luz ✨" },
  { key: "terapiasIntegrativas", label: "Terapias Integrativas 🌿" },
];

export default function ClasesEnVivoPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const clasesFiltradas = clasesEnVivo.filter((clase) => {
    const esVivo = clase.modalidad === "vivo";
    const coincideCategoria =
      categoriaSeleccionada === "todos" ||
      clase.categoria === categoriaSeleccionada;
    return esVivo && coincideCategoria;
  });

  return (
    <div className="cursos-container">
      {/* 💬 Sección de explicación */}
      <section className="explicacion-cursos">
        <h1>Clases en Vivo</h1>
        <p>
          💫 Participá en clases virtuales en tiempo real, desde cualquier parte
          del mundo.
        </p>
        <ul>
          <li>🗓️ Cada clase tiene una fecha y horario específico.</li>
          <li>
            🧑‍🏫 Se dictan por Zoom y se organizan desde un grupo de WhatsApp
            exclusivo.
          </li>
          <li>
            📲 Una vez te inscribís, accedés al grupo donde se comparte el link
            y el material necesario.
          </li>
          <li>
            🛒 Al comprar tu clase, vas a recibir el acceso al grupo y toda la
            info.
          </li>
        </ul>
      </section>

      {/* 🎛️ Filtros */}
      <section className="filtros-categorias">
        {categorias.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategoriaSeleccionada(cat.key)}
            className={`filtro-boton ${
              categoriaSeleccionada === cat.key ? "activo" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* 🔮 Clases */}
      <section className="grid-cursos">
        {clasesFiltradas.length > 0 ? (
          clasesFiltradas.map((clase, index) => (
            <div key={index} className={`curso-card ${clase.categoria}`}>
              <h3>{clase.titulo}</h3>
              <p>{clase.descripcion}</p>
              <p className="fecha-clase">📅 {clase.fecha}</p>
              <p className="cupos-clase">👥 Cupos disponibles: {clase.cupos}</p>
              <Link to="/claseDetalle">
                <button className="boton-mistico">Quiero participar</button>
              </Link>
              <span className="badge-modalidad vivo">🟣 En Vivo</span>
            </div>
          ))
        ) : (
          <EmptyState
            title="No hay cursos disponibles"
            subtitle="Estamos trabajando para traerte contenido mágico muy pronto."
          />
        )}
      </section>
    </div>
  );
}
