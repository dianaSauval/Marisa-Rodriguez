import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import Header from './components/Header/Header';


function App() {
  const isLoggedIn = true;  // cambiar según estado real
  const isAdmin = true;     // cambiar según tipo de usuario
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <HomePage />
    </div>
  );
}

export default App;
