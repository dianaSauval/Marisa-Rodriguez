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
import { CartProvider } from "./context/CartContext";
import CarritoPage from "./pages/CarritoPage";
import CheckoutPage from "./pages/CheckoutPage";
import ClasesEnVivoPage from "./pages/ClasesEnVivoPage";
import ClaseVivoDetallePage from "./pages/ClaseVivoDetallePage";
import ContactoPage from "./pages/ContactoPage";
import MisCursosPage from "./pages/MisCursosPage";
import PanelAdmin from "./pages/admin/PanelAdmin";
import AdminLayout from "./pages/admin/AdminLayout";

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
            <Route path="/clases-en-vivo" element={<ClasesEnVivoPage />} />
            <Route path="/cursosDetalle" element={<CursoDetallePage />} />
            <Route path="/claseDetalle" element={<ClaseVivoDetallePage />} />
            <Route path="/carrito" element={<CarritoPage />} />           
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/misCursos" element={<MisCursosPage />} />
            <Route path="/admin" element={<AdminLayout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
