import { useCart } from "../context/CartContext";
import "../assets/styles/pages/CarritoPage.css";
import { Link } from "react-router-dom";

export default function CarritoPage() {
  const { carrito, removerDelCarrito, vaciarCarrito } = useCart();

  const total = carrito.reduce((acc, curso) => {
    const numero = parseInt(curso.precio.replace(/\D/g, ""));
    return acc + (isNaN(numero) ? 0 : numero);
  }, 0);

  return (
    <div className="carrito-container">
      <h1>Tu Carrito</h1>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">Todavía no agregaste ningún curso 🌙</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map((curso, index) => (
              <li key={index} className="carrito-item">
                <div>
                  <h3>{curso.titulo}</h3>
                  <p>{curso.descripcion?.slice(0, 80)}...</p>
                </div>
                <div className="carrito-item-info">
                  <span className="carrito-precio">{curso.precio}</span>
                  <button
                    className="carrito-eliminar"
                    onClick={() => removerDelCarrito(curso.titulo)}
                  >
                    ✖
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="carrito-footer">
            <p className="carrito-total">💰 Total: ${total.toLocaleString("es-AR")} ARS</p>
            <div className="carrito-acciones">
              <button className="boton-vaciar" onClick={vaciarCarrito}>
                Vaciar Carrito
              </button>
              <Link to="/checkout" className="boton-pagar">Ir a Pagar</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
