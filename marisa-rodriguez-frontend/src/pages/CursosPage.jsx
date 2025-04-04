import { useState } from "react";
import "../assets/styles/pages/AllCursosPage.css";
import { Link } from "react-router-dom";

const cursos = [
  {
    titulo: "Reiki Usui (Nivel I, II, III y Maestría)",
    descripcion: "Canalizá energía para armonizar cuerpo, mente y espíritu.",
    categoria: "reiki",
    modalidad: "grabado",
  },
  {
    titulo: "Tarot Evolutivo para Principiantes",
    descripcion:
      "Lectura simbólica y transformadora del Tarot. Incluye PDF, videos y certificado.",
    categoria: "tarot",
    modalidad: "grabado",
  },
  {
    titulo: "Curso de Runas",
    descripcion:
      "Iniciación en la sabiduría nórdica desde un enfoque terapéutico y simbólico.",
    categoria: "terapiasIntegrativas",
    modalidad: "grabado",
  },
  {
    titulo: "Registros Akáshicos Angélicos",
    descripcion: "Canalización de la sabiduría del alma con guía angelical.",
    categoria: "luzYEnergia",
    modalidad: "grabado",
  },
  {
    titulo: "Lecturas y Prácticas de Tarot",
    descripcion:
      "Espacio grabado para afianzar interpretación y vínculo con las cartas.",
    categoria: "terapiasIntegrativas",
    modalidad: "vivo", // este NO se mostrará
  },
];

const categorias = [
  { key: "todos", label: "Todos ✨" },
  { key: "tarot", label: "Tarot 🔮" },
  { key: "reiki", label: "Reiki 🕊️" },
  { key: "luzYEnergia", label: "Terapias de Luz ✨" },
  { key: "terapiasIntegrativas", label: "Terapias Integrativas 🌿" },
];

export default function CursosPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const cursosFiltrados = cursos.filter((curso) => {
    const esGrabado = curso.modalidad === "grabado";
    const coincideCategoria =
      categoriaSeleccionada === "todos" ||
      curso.categoria === categoriaSeleccionada;
    return esGrabado && coincideCategoria;
  });

  return (
    <div className="cursos-container">
      {/* 💬 Sección de explicación */}
      <section className="explicacion-cursos">
        <h1>Cursos Grabados</h1>
        <p>
          📚 Accedé a cursos grabados que podés ver a tu ritmo desde cualquier
          lugar.
        </p>
        <ul>
          <li>🧘‍♀️ Se acceden desde tu perfil, dentro de esta plataforma.</li>
          <li>🔐 Necesitás estar logueado para verlos.</li>
          <li>🕓 Una vez comprados, están disponibles durante 1 año.</li>
          <li>
            📦 Incluyen videos, PDFs descargables y acceso progresivo a medida
            que avanzás.
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

      {/* 🧿 Cursos */}
      <section className="grid-cursos">
        {cursosFiltrados.length > 0 ? (
          cursosFiltrados.map((curso, index) => (
            <div key={index} className={`curso-card ${curso.categoria}`}>
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              <Link to="/cursosDetalle">
                <button className="boton-mistico">Ver más</button>
              </Link>
              <span className="badge-modalidad grabado">🎥 Grabado</span>
            </div>
          ))
        ) : (
          <p className="mensaje-vacio">
            No hay cursos grabados en esta categoría aún.
          </p>
        )}
      </section>
    </div>
  );
}
