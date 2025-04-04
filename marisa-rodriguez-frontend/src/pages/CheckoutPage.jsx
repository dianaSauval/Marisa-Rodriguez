import { useCart } from "../context/CartContext";
import "../assets/styles/pages/CheckoutPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';

export default function CheckoutPage() {
  const { carrito, vaciarCarrito } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    dni: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
    tarjetaNumero: "",
    tarjetaNombre: "",
    tarjetaVencimiento: "",
    tarjetaCVV: "",
    focus: ""
  });

  const total = carrito.reduce((acc, curso) => {
    const precio = parseInt(curso.precio.replace(/\D/g, ""));
    return acc + (isNaN(precio) ? 0 : precio);
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "tarjetaNumero") newValue = value.replace(/[^0-9]/g, "").slice(0, 16);
    if (name === "tarjetaVencimiento") newValue = value.replace(/[^0-9]/g, "").slice(0, 4);
    if (name === "tarjetaCVV") newValue = value.replace(/[^0-9]/g, "").slice(0, 4);

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleFocus = (e) => {
    setFormData((prev) => ({ ...prev, focus: e.target.name }));
  };

  const formatExpiry = (raw) => {
    const val = raw.replace(/[^0-9]/g, "").slice(0, 4);
    if (val.length >= 3) return val.slice(0, 2) + "/" + val.slice(2);
    return val;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pedido confirmado:", { cursos: carrito, datos: formData });
    vaciarCarrito();
    alert("¡Gracias por tu compra! Simulamos un pago exitoso ✨");
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h1>✨ Confirmar Pedido</h1>

      <div className="checkout-resumen">
        <h2>Tu selección:</h2>
        <ul>
          {carrito.map((curso, index) => (
            <li key={index}>{curso.titulo} — <span>{curso.precio}</span></li>
          ))}
        </ul>
        <p className="checkout-total">💰 Total: ${total.toLocaleString("es-AR")} ARS</p>
      </div>

      <div className="checkout-main">
        <div className="formulario-y-tarjeta">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Datos personales</h3>
            <label>Nombre completo<input type="text" name="nombre" required value={formData.nombre} onChange={handleInputChange} /></label>
            <label>Email<input type="email" name="email" required value={formData.email} onChange={handleInputChange} /></label>
            <label>Teléfono<input type="tel" name="telefono" required value={formData.telefono} onChange={handleInputChange} /></label>
            <label>DNI / CUIT<input type="text" name="dni" required value={formData.dni} onChange={handleInputChange} /></label>

            <h3>Dirección</h3>
            <label>Calle y número<input type="text" name="direccion" required value={formData.direccion} onChange={handleInputChange} /></label>
            <label>Ciudad<input type="text" name="ciudad" required value={formData.ciudad} onChange={handleInputChange} /></label>
            <label>Provincia<input type="text" name="provincia" required value={formData.provincia} onChange={handleInputChange} /></label>
            <label>Código Postal<input type="text" name="codigoPostal" required value={formData.codigoPostal} onChange={handleInputChange} /></label>

            <h3>Pago con tarjeta (simulado)</h3>
            <label>Número de tarjeta
              <input
                type="text"
                name="tarjetaNumero"
                value={formData.tarjetaNumero}
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder="1234 5678 9012 3456"
                inputMode="numeric"
              />
            </label>

            <label>Nombre del titular
              <input
                type="text"
                name="tarjetaNombre"
                value={formData.tarjetaNombre}
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder="Nombre Apellido"
              />
            </label>

            <label>Vencimiento (MM/AA)
              <input
                type="text"
                name="tarjetaVencimiento"
                value={formatExpiry(formData.tarjetaVencimiento)}
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder="MM/AA"
              />
            </label>

            <label>CVV
              <input
                type="text"
                name="tarjetaCVV"
                value={formData.tarjetaCVV}
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder="123"
                inputMode="numeric"
              />
            </label>

            <button type="submit" className="boton-confirmar">Confirmar compra</button>
          </form>

          <div className="tarjeta-preview">
            <Cards
              number={formData.tarjetaNumero}
              name={formData.tarjetaNombre}
              expiry={formatExpiry(formData.tarjetaVencimiento)}
              cvc={formData.tarjetaCVV}
              focused={formData.focus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
