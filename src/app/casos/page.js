import React from 'react';
import './casos.css'; // Asegúrate de tener este archivo de estilos

export default function Casos() {
  return (
    <div className="body">
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">Gestión de Casos</div>
        <ul className="navbar-menu">
          <li><a href="usuarios">Usuarios</a></li>
          <li><a href="casos">Casos</a></li>
          <li><a href="diagnosticos">Diagnósticos</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1>Casos</h1>
        <table className="cases-table">
          <thead>
            <tr>
              <th>ID Caso</th>
              <th>Descripción del Caso</th>
              <th>Fecha de Creación</th>
              <th>Estado Orfandad</th>
              <th>Lugar de los Hechos</th>
              <th>Fecha de los Hechos</th>
              <th>Observaciones Preliminares</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Descripción del caso 1</td>
              <td>2023-01-15</td>
              <td>No</td>
              <td>Lugar 1</td>
              <td>2023-01-10</td>
              <td>Observaciones 1</td>
            </tr>
            {/* Puedes agregar más filas aquí */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
