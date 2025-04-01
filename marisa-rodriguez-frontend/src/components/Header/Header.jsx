import React, { useState } from 'react';
import './Header.css';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/img/logo.jpg"

function Header({ isLoggedIn, isAdmin }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const enlaces = [
    { label: 'Inicio', href: '/' },
    { label: 'Cursos', href: '/cursos' },
    { label: 'Clases en vivo', href: '/vivo' },
    { label: 'Contacto', href: '/contacto' },
    ...(isLoggedIn ? [{ label: 'Mis cursos', href: '/mis-cursos' }] : []),
    ...(isLoggedIn && isAdmin ? [{ label: 'Panel Admin', href: '/admin' }] : []),
  ];

  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <img src={logo} alt="Marisa Rodríguez" />
      </div>

      {/* Menú Hamburguesa (mobile) */}
      <div className="header__menu-icon" onClick={toggleMenu}>
        {menuAbierto ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navegación - desktop */}
      <nav className="header__nav">
        {enlaces.map((link) => (
          <a key={link.href} href="#">
            {link.label}
          </a>
        ))}
      </nav>

      {/* Acciones a la derecha */}
      <div className="header__actions">
        <button className="carrito-btn">
          <FaShoppingCart />
        </button>
        {isLoggedIn ? (
          <button className="btn-sesion cerrar">Cerrar sesión</button>
        ) : (
          <button className="btn-sesion">Iniciar sesión</button>
        )}
      </div>

      {/* Navegación Mobile */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            {enlaces.map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu}>
                {link.label}
              </a>
            ))}
            <div className="mobile-actions">
              <button className="carrito-btn">
                <FaShoppingCart />
              </button>
              {isLoggedIn ? (
                <button className="btn-sesion cerrar">Cerrar sesión</button>
              ) : (
                <button className="btn-sesion">Iniciar sesión</button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
