"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './regitro.css';

const regitrotrabajador = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Elimina el token del almacenamiento local
    localStorage.removeItem("token");
    console.log("Cerrando sesión...");
    // Redirige al usuario a la página de inicio de sesión
    router.replace("/");
  };

  return (
    <div className="body">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link href="/roles/CH" className="navbar-brand">
        <img className="logo-img" src="../imagenes/f_derchos_logo.png" alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link" href="#">Perfil</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/registro_trabajador">Registrar</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Equipos</a>
          </li>
          <button onClick={handleLogout} className="btn btn-outline-success me-2" type="button">Cerrar Sesión</button>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar trabajador" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  <br />
  <h2>Formulario de Registro</h2>
  <div className="container login-card">
    <form className="form-register">
      <label htmlFor="nombre_completo">Nombre Completo</label>
      <input type="text" id="nombre_completo" name="nombre_completo" className="form-control" required />

      <label htmlFor="curp">CURP</label>
      <input type="text" id="curp" name="curp" className="form-control" required />

      <label htmlFor="rfc">RFC</label>
      <input type="text" id="rfc" name="rfc" className="form-control" />

      <label htmlFor="sexo">Sexo</label>
      <select id="sexo" name="sexo" className="form-control" required>
        <option value="">Seleccione una opción</option>
        <option value="Hombre">Hombre</option>
        <option value="Mujer">Mujer</option>
        <option value="Otro">Otro</option>
      </select>

      <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
      <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" className="form-control" required />

      <label htmlFor="contrasena">Contraseña</label>
      <input type="password" id="contrasena" name="contrasena" className="form-control" required />

      <label htmlFor="foto_perfil">Foto de Perfil (pendiente....)</label>
      {/* <input type="file" id="foto_perfil" name="foto_perfil" className="form-control" /> */}

      <label htmlFor="id_rol">Rol</label>
      <select id="id_rol" name="id_rol" className="form-control">
        <option value="">Seleccione una opción</option>
        <option value="1">Abogado</option>
        <option value="2">Médico</option>
        <option value="3">Psicólogo</option>
        <option value="4">Trabajador Social</option>
        <option value="5">Capital Humano</option>
        <option value="6">Director</option>
      </select>

      <label htmlFor="cedula_profesional">Cédula Profesional</label>
      <input type="text" id="cedula_profesional" name="cedula_profesional" className="form-control" />

      <label htmlFor="grado_estudios">Grado de Estudios</label>
      <input type="text" id="grado_estudios" name="grado_estudios" className="form-control" />

      <label htmlFor="titulo_obtenido">Título Obtenido</label>
      <input type="text" id="titulo_obtenido" name="titulo_obtenido" className="form-control" />

      <label htmlFor="id_celula">ID de Célula</label>
      <input type="number" id="id_celula" name="id_celula" className="form-control" />

      <br />
      <button className="btn-login" type="submit">Registrar</button>
    </form>
  </div>
</div>
  );
};

export default regitrotrabajador;
