import React, { useContext } from 'react';
import './Matriculas.css';
import { EstudiantesContext } from '../context/EstudiantesContext';

const Matriculas = () => {
  const { estudiantes, eliminarEstudiante } = useContext(EstudiantesContext);

  return (
    <div className="matriculas-container">
      <h2>Estudiantes Registrados</h2>
      <table className="matriculas-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Carrera</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.length === 0 ? (
            <tr>
              <td data-label="Nombre"></td>
              <td data-label="Correo"></td>
              <td data-label="Carrera"></td>
              <td data-label="Acciones" style={{ textAlign: 'center', color: '#888' }}>
                No hay estudiantes registrados.
              </td>
            </tr>
          ) : (
            estudiantes.map((est, idx) => (
              <tr key={idx}>
                <td data-label="Nombre">{est.nombre}</td>
                <td data-label="Correo">{est.correo}</td>
                <td data-label="Carrera">{est.carrera}</td>
                <td data-label="Acciones">
                  <button onClick={() => eliminarEstudiante(idx)}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Matriculas;