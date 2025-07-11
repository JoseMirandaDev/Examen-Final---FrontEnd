import React, { useState, useContext } from "react";
import { EstudiantesContext } from "../context/EstudiantesContext";
import "./Home.css";
import escudo from "../assets/Escudo_Universidad_Autónoma_Tomás_Frías.png";

export default function Home() {
  const { agregarEstudiante } = useContext(EstudiantesContext);
  const [nuevoEstudiante, setNuevoEstudiante] = useState({
    nombre: "",
    correo: "",
    carrera: "",
  });

  const handleChange = (e) => {
    setNuevoEstudiante({
      ...nuevoEstudiante,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (
      nuevoEstudiante.nombre.trim() &&
      nuevoEstudiante.correo.trim() &&
      nuevoEstudiante.carrera.trim()
    ) {
      agregarEstudiante(nuevoEstudiante);
      setNuevoEstudiante({ nombre: "", correo: "", carrera: "" });
    }
  };

  return (
    <div className="home-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "2rem 0",
        }}
      >
        <img
          src={escudo}
          alt="Escudo UATF"
          style={{ maxWidth: 350, width: "100%" }}
        />
      </div>
      <h2>Registrar Estudiante</h2>
      <form className="home-form" onSubmit={handleAgregar}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoEstudiante.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={nuevoEstudiante.correo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="carrera"
          placeholder="Carrera"
          value={nuevoEstudiante.carrera}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

