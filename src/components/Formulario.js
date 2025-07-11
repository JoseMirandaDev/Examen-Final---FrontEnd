import React, { useState, useContext } from "react";
import { EstudiantesContext } from "../context/EstudiantesContext";
import "./Formulario.css";

export default function Formulario() {
  const { agregarEstudiante } = useContext(EstudiantesContext);
  const [form, setForm] = useState({ nombre: "", email: "", carrera: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.carrera) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Email no válido.");
      return;
    }
    agregarEstudiante(form);
    setForm({ nombre: "", email: "", carrera: "" });
    setError("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="carrera"
        placeholder="Carrera"
        value={form.carrera}
        onChange={handleChange}
        required
      />
      <button type="submit">Agregar</button>
      {error && <span className="error">{error}</span>}
    </form>
  );
}
