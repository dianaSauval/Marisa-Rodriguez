import { useCart } from "../context/CartContext";
import "../assets/styles/pages/CheckoutPage.css";
import { useState } from "react";
import useModalMensaje from "../hooks/useModalMensaje";

export default function CheckoutPage() {
  const { carrito, vaciarCarrito } = useCart();
  const { Modal, openModal } = useModalMensaje();


  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    dni: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    vaciarCarrito();
  
    openModal({
      titulo: "¡Gracias por tu compra!",
      subtitulo: "En breve recibirás un correo con acceso a tu curso ✨",
    });
  
  };
  
  const total = carrito.reduce((acc, curso) => {
    const precio = parseInt(curso.precio.replace(/\D/g, ""));
    return acc + (isNaN(precio) ? 0 : precio);
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "number") newValue = value.replace(/[^0-9]/g, "").slice(0, 16);
    else if (name === "name") newValue = value.replace(/[^a-zA-Z\s]/g, "");
    else if (name === "expiry")
      newValue = value.replace(/[^0-9]/g, "").slice(0, 4);
    else if (name === "cvc")
      newValue = value.replace(/[^0-9]/g, "").slice(0, 3);

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleFocus = (e) => {
    setFormData((prev) => ({ ...prev, focus: e.target.name }));
  };

/*   const formatExpiry = (raw = "") => {
    const val = raw.replace(/[^0-9]/g, "").slice(0, 4);
    if (val.length >= 3) return val.slice(0, 2) + "/" + val.slice(2);
    return val;
  }; */

  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "Este campo es obligatorio.";
    });

    if (formData.number.length < 13)
      newErrors.number = "El número debe tener entre 13 y 16 dígitos.";
    if (!/^[a-zA-Z\s]+$/.test(formData.name))
      newErrors.name = "El nombre solo debe contener letras y espacios.";
    if (formData.cvc.length !== 3)
      newErrors.cvc = "El CVV debe tener exactamente 3 números.";

    return newErrors;
  };

  const renderInput = (label, name, type = "text", placeholder = "") => (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onFocus={handleFocus}
        className={errors[name] ? "input-error" : ""}
        placeholder={placeholder}
      />
      {errors[name] && <div className="error-msg">{errors[name]}</div>}
    </label>
  );

  return (
    <div className="checkout-container">
      <h1>✨ Confirmar Pedido</h1>

      <div className="checkout-resumen">
        <h2>Tu selección:</h2>
        <ul>
          {carrito.map((curso, index) => (
            <li key={index}>
              {curso.titulo} — <span>{curso.precio}</span>
            </li>
          ))}
        </ul>
        <p className="checkout-total">
          💰 Total: ${total.toLocaleString("es-AR")} ARS
        </p>
      </div>

      <div className="checkout-main">
        <div className="formulario-y-tarjeta">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Datos personales</h3>
            {renderInput("Nombre completo", "nombre")}
            {renderInput("Email", "email", "email")}
            {renderInput("Teléfono", "telefono", "tel")}
            {renderInput("DNI / CUIT", "dni")}

            <h3>Dirección</h3>
            {renderInput("Calle y número", "direccion")}
            {renderInput("Ciudad", "ciudad")}
            {renderInput("Provincia", "provincia")}
            {renderInput("Código Postal", "codigoPostal")}

            <div className="form-pago-tarjeta">
              <div>
                <h3>Pago con tarjeta (simulado)</h3>
                {renderInput(
                  "Número de tarjeta",
                  "number",
                  "text",
                  "1234 5678 9012 3456"
                )}
                {renderInput(
                  "Nombre del titular",
                  "name",
                  "text",
                  "Nombre Apellido"
                )}
                {renderInput("Vencimiento (MM/AA)", "expiry", "text", "MM/AA")}
                {renderInput("CVV", "cvc", "text", "123")}
              </div>

              <div className="tarjeta-preview">
 {/*                <CreditCard
                  number={formData.number}
                  name={formData.name}
                  expiry={formatExpiry(formData.expiry)}
                  cvc={formData.cvc}
                  focused={formData.focus}
                /> */}
              </div>
            </div>

            <button type="submit" className="boton-confirmar">
              Confirmar compra
            </button>
          </form>
          {Modal}

        </div>
      </div>
    </div>
  );
}
