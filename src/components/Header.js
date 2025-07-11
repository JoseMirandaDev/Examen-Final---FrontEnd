import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>EDUCACIÓN</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/estadisticas">Estadísticas</Link>
      </nav>
    </header>
  );
}
