import { useState } from "react";
import "../../assets/styles/pages/admin/AdminLayout.css";
import PanelAdmin from "./PanelAdmin";
import FormularioCurso from "../../components/Admin/FormularioCurso/FormularioCurso";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const cursosSimulados = [
  {
    id: "curso-001",
    titulo: "Reiki Usui Nivel I",
    tipo: "grabado",
    visible: true,
    categoria: "reiki",
  },
  {
    id: "curso-002",
    titulo: "Tarot Evolutivo Inicial",
    tipo: "grabado",
    visible: false,
    categoria: "tarot",
  },
  {
    id: "curso-003",
    titulo: "Práctica de Reiki en vivo",
    tipo: "vivo",
    visible: true,
    categoria: "reiki",
  },
  {
    id: "curso-004",
    titulo: "Lecturas de Tarot en Zoom",
    tipo: "vivo",
    visible: true,
    categoria: "tarot",
  },
];

export default function AdminLayout() {
  const [vista, setVista] = useState("panel"); // 'panel' | 'formulario'
  const [menuAbierto, setMenuAbierto] = useState(true);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [filtroTipo, setFiltroTipo] = useState("todos"); // 'todos' | 'grabado' | 'vivo'
  const [filtroCategoria, setFiltroCategoria] = useState("todas");

  const mostrarMenu = vista !== "formulario" && menuAbierto;

  const cambiarAVistaPanel = () => {
    setVista("panel");
    setMenuAbierto(true);
    setCursoSeleccionado(null);
  };

  const editarCurso = (curso) => {
    setCursoSeleccionado(curso);
    setVista("formulario");
  };

  const cursosGrabados = cursosSimulados.filter((c) => c.tipo === "grabado");
  const cursosVivos = cursosSimulados.filter((c) => c.tipo === "vivo");

  const cursosFiltrados = cursosSimulados.filter((curso) => {
    const tipoOk = filtroTipo === "todos" || curso.tipo === filtroTipo;
    const categoriaOk =
      filtroCategoria === "todas" || curso.categoria === filtroCategoria;
    return tipoOk && categoriaOk;
  });

  const toggleVisibilidad = (id) => {
    const actualizados = cursosSimulados.map((curso) =>
      curso.id === id ? { ...curso, visible: !curso.visible } : curso
    );
    // Opcional: podrías guardarlo en un state si luego se hace persistente
    console.log("Cursos actualizados:", actualizados);
  };

  return (
    <div className="admin-layout">
      {/* Menú lateral */}
      <aside className={`menu-lateral ${mostrarMenu ? "abierto" : "cerrado"}`}>
        {vista !== "formulario" && (
          <button
            className="hamburguesa"
            onClick={() => setMenuAbierto(!menuAbierto)}
            title="Mostrar/Ocultar menú"
          >
            {menuAbierto ? "⇦" : "☰"}
          </button>
        )}

        {mostrarMenu && (
          <nav>
            <h2>📂 Opciones</h2>
            <button
              onClick={() => {
                cambiarAVistaPanel();
                setFiltroTipo("todos");
              }}
            >
              📋 Todos los cursos
            </button>
            <button onClick={() => setVista("formulario")}>
              ➕ Agregar nuevo curso
            </button>
            <button
              onClick={() => {
                cambiarAVistaPanel();
                setFiltroTipo("grabado");
              }}
            >
              🎥 Ver solo cursos grabados
            </button>
            <button
              onClick={() => {
                cambiarAVistaPanel();
                setFiltroTipo("vivo");
              }}
            >
              🔮 Ver solo clases en vivo
            </button>

            <div className="menu-cursos-lista">
              <h3>🎥 Cursos grabados</h3>
              <ul>
                {cursosGrabados.map((curso) => (
                  <li key={curso.id}>
                    <button
                      onClick={() => editarCurso(curso)}
                      className={`curso-link ${
                        curso.visible ? "visible" : "oculto"
                      }`}
                    >
                      <span className="curso-titulo">{curso.titulo}</span>
                      <span className="estado-curso">
                        {curso.visible ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                        {curso.visible ? "Visible" : "Oculto"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-cursos-lista">
              <h3>🔮 Clases en vivo</h3>
              <ul>
                {cursosVivos.map((curso) => (
                  <li key={curso.id}>
                    <button
                      onClick={() => editarCurso(curso)}
                      className={`curso-link ${
                        curso.visible ? "visible" : "oculto"
                      }`}
                    >
                      <span className="curso-titulo">{curso.titulo}</span>
                      <span className="estado-curso">
                        {curso.visible ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                        {curso.visible ? "Visible" : "Oculto"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </aside>

      {/* Contenido principal */}
      <main className="contenido-admin">
        {vista === "panel" && (
          <PanelAdmin
            cursos={cursosFiltrados}
            filtroTipo={filtroTipo}
            setFiltroCategoria={setFiltroCategoria}
            filtroCategoria={filtroCategoria}
            onToggleVisibilidad={toggleVisibilidad}
            onEditarCurso={(curso) => {
              setCursoSeleccionado(curso);
              setVista("formulario");
            }}
          />
        )}
        {vista === "formulario" && (
          <div className="formulario-wrapper">
            <button className="cerrar-formulario" onClick={cambiarAVistaPanel}>
              ❌
            </button>
            <FormularioCurso
              modo={cursoSeleccionado ? "editar" : "crear"}
              curso={cursoSeleccionado || {}}
              onCancelar={cambiarAVistaPanel}
            />
          </div>
        )}
      </main>
    </div>
  );
}
