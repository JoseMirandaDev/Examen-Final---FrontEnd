import React, { createContext, useState, useEffect } from "react";

export const EstudiantesContext = createContext();

const STORAGE_KEY = "estudiantes";

export function EstudiantesProvider({ children }) {
  const [estudiantes, setEstudiantes] = useState(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data
      ? JSON.parse(data)
      : [
          {
            nombre: "Juan Pérez",
            correo: "juan.perez@email.com",
            carrera: "Ingeniería de Sistemas",
          },
          { nombre: "Ana López", correo: "ana.lopez@email.com", carrera: "Medicina" },
          { nombre: "Carlos Ruiz", correo: "carlos.ruiz@email.com", carrera: "Derecho" },
        ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estudiantes));
  }, [estudiantes]);

  const agregarEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  const eliminarEstudiante = (idx) => {
    setEstudiantes(estudiantes.filter((_, i) => i !== idx));
  };

  return (
    <EstudiantesContext.Provider
      value={{ estudiantes, agregarEstudiante, eliminarEstudiante }}
    >
      {children}
    </EstudiantesContext.Provider>
  );
}
