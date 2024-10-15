import React from 'react';
import './usuarios.css'; // Asegúrate de tener este archivo de estilos

export default function Usuarios() {
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
          <h1>Usuarios</h1>
          <table className="users-table">
            <thead>
              <tr>
                <th>ID Usuario</th>
                <th>Nombre Completo</th>
                <th>CURP</th>
                <th>RFC</th>
                <th>Sexo</th>
                <th>Fecha de Nacimiento</th>
                <th>Rol</th>
                <th>Célula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>JUAP800101HDFRRN07</td>
                <td>PEJ800101123</td>
                <td>Hombre</td>
                <td>1980-01-01</td>
                <td>Administrador</td>
                <td>Célula 1</td>
              </tr>
              {/* Agrega más filas aquí */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
