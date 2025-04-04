import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/styles/variables.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ReikiPage from "./pages/ReikiPage";
import TarotPage from "./pages/TarotPage";
import TerapiasPage from "./pages/TerapiasPage";
import TerapiasIntegrativasPage from "./pages/TerapiasIntegrativasPage";
import CursosPage from "./pages/CursosPage";
import CursoDetallePage from "./pages/CursoDetallePage";

// ⬇️ Importá el contexto del carrito
import { CartProvider } from "./context/CartContext";
import CarritoPage from "./pages/CarritoPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const isLoggedIn = true;
  const isAdmin = true;

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reiki" element={<ReikiPage />} />
            <Route path="/tarot" element={<TarotPage />} />
            <Route path="/terapias-de-luz" element={<TerapiasPage />} />
            <Route path="/terapias-integrativas" element={<TerapiasIntegrativasPage />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/cursosDetalle" element={<CursoDetallePage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
