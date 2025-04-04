import React from "react";
import "../assets/styles/pages/CursoDetallePage.css";
import { useCart } from "../context/CartContext";

// Simulación de datos que podrían venir del backend
const curso = {
  titulo: "Tarot Evolutivo para Principiantes",
  descripcionLarga: `El Tarot Evolutivo es mucho más que una herramienta predictiva: es un mapa simbólico del alma que nos invita a comprender nuestras emociones, decisiones, bloqueos y potenciales.

En este curso para principiantes, te propongo un viaje profundo a través de los Arcanos Mayores, donde cada carta funciona como un espejo interno y un portal de transformación.

Durante las clases, aprenderás a interpretar las cartas no desde el miedo ni el dogma, sino desde una mirada amorosa y reveladora que te permitirá conectar con tu intuición, tu sabiduría interna y la energía del momento presente.

Este curso es ideal para quienes desean iniciarse en el mundo del Tarot desde un enfoque terapéutico y espiritual. No necesitás tener experiencia previa: vamos a construir juntas/os una base sólida, comprensible y transformadora para que el Tarot sea una herramienta de sanación, guía y expansión en tu vida cotidiana.`,
  duracion: "10 horas",
  nivel: "Inicial",
  modalidad: "Online (grabado)",
  inicio: "Acceso inmediato",
  imagen:
    "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1743717077/Marisa%20Rodriguez/tarot-fondo-_v8owdy.png",
  contenido: [
    "Introducción al Tarot y su historia",
    "Significado de los Arcanos Mayores",
    "Prácticas de lectura intuitiva",
    "Ética y responsabilidad del lector de Tarot",
  ],
  beneficios: [
    "Material de lectura en PDF",
    "Acceso a foro exclusivo de estudiantes",
    "Certificado de finalización",
  ],
  precio: "$22.000 ARS",
  testimonio:
    '"Este curso me abrió las puertas al mundo del Tarot de una manera clara y profunda. ¡Muy recomendado!" - Ana G.',
};

const CursoDetallePage = () => {
  const { agregarAlCarrito } = useCart();

  return (
    <div className="curso-detalle-container">
      {/* Información del Curso */}
      <div className="curso-info">
        <div className="curso-detalle-portada">
          <div className="info-texto">
            <h1>{curso.titulo}</h1>
            <div className="descripcion-larga">
              {curso.descripcionLarga.split("\n").map((parrafo, index) => (
                <p key={index}>{parrafo.trim()}</p>
              ))}
            </div>

            {/* Detalles Clave */}
            <ul className="curso-detalles">
              <li>
                <strong>Duración:</strong> {curso.duracion}
              </li>
              <li>
                <strong>Nivel:</strong> {curso.nivel}
              </li>
              <li>
                <strong>Modalidad:</strong> {curso.modalidad}
              </li>
              <li>
                <strong>Inicio:</strong> {curso.inicio}
              </li>
            </ul>
          </div>

          {/* Imagen Destacada */}
          <div className="curso-imagen">
            <img src={curso.imagen} alt={`Imagen del curso ${curso.titulo}`} />
          </div>
        </div>

        {/* Contenido del Curso */}
        <div className="curso-contenido">
          <h2>Contenido del Curso</h2>
          <ul>
            {curso.content?.map((item, index) => (
              <li key={index}>{item}</li>
            )) || curso.contenido.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        {/* Beneficios Adicionales */}
        <div className="curso-beneficios">
          <h2>¿Qué incluye?</h2>
          <ul>
            {curso.beneficios.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Precio y Acciones */}
        <div className="curso-acciones">
          <p className="curso-precio">{curso.precio}</p>
          <button className="boton-agregar-carrito" onClick={() => agregarAlCarrito(curso)}>Agregar al Carrito</button>
          <a
            href="https://wa.me/1234567890"
            className="boton-consultar-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      {/* Testimonios */}
      <div className="curso-testimonios">
        <h2>Testimonios</h2>
        <blockquote>{curso.testimonio}</blockquote>
      </div>
    </div>
  );
};

export default CursoDetallePage;
