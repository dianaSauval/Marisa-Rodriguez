import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (curso) => {
    if (!carrito.find((item) => item.titulo === curso.titulo)) {
      setCarrito([...carrito, curso]);
    }
  };

  const removerDelCarrito = (titulo) => {
    setCarrito(carrito.filter((item) => item.titulo !== titulo));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, removerDelCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
