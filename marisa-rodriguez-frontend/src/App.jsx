import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ReikiPage from "./pages/ReikiPage"; // Agregá esta línea
import TarotPage from "./pages/TarotPage";
import TerapiasPage from "./pages/TerapiasPage";
import TerapiasIntegrativasPage from "./pages/TerapiasIntegrativasPage";

function App() {
  const isLoggedIn = true;
  const isAdmin = true;

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reiki" element={<ReikiPage />} />
          <Route path="/tarot" element={<TarotPage />} />
          <Route path="/terapias-de-luz" element={<TerapiasPage />} />TerapiasIntegrativasPage
          <Route path="/terapias-integrativas" element={<TerapiasIntegrativasPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
