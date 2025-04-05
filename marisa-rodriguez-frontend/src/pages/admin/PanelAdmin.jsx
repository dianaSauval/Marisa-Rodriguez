import { useState } from "react";
import "../../assets/styles/pages/admin/PanelAdmin.css";
import EmptyState from "../../components/EmptyState/EmptyState";
import { FiEdit, FiEye, FiEyeOff, FiTrash2 } from "react-icons/fi";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function PanelAdmin({
  cursos,
  filtroTipo,
  filtroCategoria,
  setFiltroCategoria,
  onEditarCurso,
}) {
  const [listaCursos, setListaCursos] = useState(cursos);

  const categorias = [
    { key: "todas", label: "Todas ✨" },
    { key: "reiki", label: "Reiki 🕊️" },
    { key: "tarot", label: "Tarot 🔮" },
    { key: "luzYEnergia", label: "Terapias de Luz ✨" },
    { key: "terapiasIntegrativas", label: "Terapias Integrativas 🌿" },
  ];

  const toggleVisibilidad = (id) => {
    const actualizados = listaCursos.map((curso) =>
      curso.id === id ? { ...curso, visible: !curso.visible } : curso
    );
    setListaCursos(actualizados);
  };

  const eliminarCurso = (id) => {
    const actualizados = listaCursos.filter((curso) => curso.id !== id);
    setListaCursos(actualizados);
  };

  const cursosFiltrados = listaCursos.filter((curso) => {
    const tipoOk = filtroTipo === "todos" || curso.tipo === filtroTipo;
    const categoriaOk =
      filtroCategoria === "todas" || curso.categoria === filtroCategoria;
    return tipoOk && categoriaOk;
  });

  return (
    <div className="panel-admin">
      <h1 className="titulo-panel">📋 Panel de cursos ({filtroTipo})</h1>

      {/* Filtro por categoría */}
      <div className="filtros-admin">
        {categorias.map((cat) => (
          <button
            key={cat.key}
            className={`filtro-boton ${
              filtroCategoria === cat.key ? "activo" : ""
            }`}
            onClick={() => setFiltroCategoria(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="lista-cursos-admin">
        {cursosFiltrados.length === 0 ? (
          <EmptyState
            title="No hay cursos que coincidan con los filtros"
            subtitle=""
          />
        ) : (
          cursosFiltrados.map((curso) => (
            <div key={curso.id} className="item-admin">
              <div>
                <h3>{curso.titulo}</h3>
                <p>
                  Tipo: {curso.tipo === "grabado" ? "🎥 Grabado" : "🔮 En vivo"}
                </p>
                <p>Categoría: {curso.categoria}</p>
                <p> {curso.visible ? <HiOutlineEye  /> : <HiOutlineEyeOff />} {curso.visible ? "Visible" : "Oculto"}</p>
              </div>
              <div className="acciones">
                <button
                  className="boton-admin editar"
                  onClick={() => onEditarCurso(curso)}
                >
                  <FiEdit /> Editar
                </button>
                <button
                  className="boton-admin eliminar"
                  onClick={() => eliminarCurso(curso.id)}
                >
                  <FiTrash2 /> Eliminar
                </button>
                <button
                  className={`boton-admin visibilidad ${
                    curso.visible ? "ocultar" : "mostrar"
                  }`}
                  onClick={() => toggleVisibilidad(curso.id)}
                >
                  {curso.visible ? <FiEyeOff /> : <FiEye />}{" "}
                  {curso.visible ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
