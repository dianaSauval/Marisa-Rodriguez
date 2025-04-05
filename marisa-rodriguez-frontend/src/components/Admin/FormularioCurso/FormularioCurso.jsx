import "./FormularioCurso.css";

export default function FormularioCurso({ modo = "crear", curso = {}, onCancelar }) {
  return (
    <div className="formulario-curso">
      <h2>{modo === "crear" ? "➕ Estás creando un nuevo curso" : `✏️ Estás editando: ${curso.titulo}`}</h2>

      <form>
        {/* Título */}
        <label>
          Título del curso
          <input type="text" defaultValue={curso.titulo || ""} />
          <small className="ayuda-campo">Ej: Reiki Usui Nivel I</small>
        </label>

        {/* Descripción */}
        <label>
          Descripción
          <textarea rows="3" defaultValue={curso.descripcion || ""} />
          <small className="ayuda-campo">Una frase breve que describa el curso</small>
        </label>

        {/* Categoría */}
        <label>
          Categoría
          <select defaultValue={curso.categoria || ""}>
            <option value="">Seleccioná una opción</option>
            <option value="reiki">Reiki</option>
            <option value="tarot">Tarot</option>
            <option value="luzYEnergia">Terapias de Luz</option>
            <option value="terapiasIntegrativas">Terapias Integrativas</option>
          </select>
          <small className="ayuda-campo">A qué área pertenece el curso</small>
        </label>

        {/* Tipo de curso */}
        <label>
          Tipo de curso
          <select defaultValue={curso.tipo || ""}>
            <option value="">Seleccioná una opción</option>
            <option value="grabado">Grabado</option>
            <option value="vivo">En vivo</option>
          </select>
        </label>

        {/* Fecha (si es en vivo) */}
        <label>
          Fecha (solo si es clase en vivo)
          <input type="datetime-local" defaultValue={curso.fecha || ""} />
        </label>

        {/* Link WhatsApp */}
        <label>
          Link al grupo de WhatsApp (opcional)
          <input type="url" defaultValue={curso.linkWhatsapp || ""} />
        </label>

        {/* Visibilidad */}
        <label className="checkbox">
          <input type="checkbox" defaultChecked={curso.visible} />
          Mostrar este curso públicamente
        </label>

        {/* Botones */}
        <div className="botones-formulario">
          <button type="submit" className="boton-guardar">💾 Guardar</button>
          <button type="button" className="boton-cancelar" onClick={onCancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
