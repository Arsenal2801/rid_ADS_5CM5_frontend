"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './perfil.css';

const perfiltrabajador = () => {
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
    <h2>Perfil del Trabajador</h2>
      <div className="container profile-card">
        <form className="form-profile">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" name="id" className="form-control" disabled />

          <label htmlFor="nombre_completo">Nombre Completo</label>
          <input type="text" id="nombre_completo" name="nombre_completo" className="form-control" disabled />

          <label htmlFor="curp">CURP</label>
          <input type="text" id="curp" name="curp" className="form-control" disabled />

          <label htmlFor="rfc">RFC</label>
          <input type="text" id="rfc" name="rfc" className="form-control" disabled />

          <label htmlFor="sexo">Sexo</label>
          <input type="text" id="sexo" name="sexo" className="form-control" disabled />

          <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
          <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" className="form-control" disabled />

          <label htmlFor="foto_perfil">Foto de Perfil (pendiente...)</label>
          {/* <div className="form-group">
            <img src={trabajador.foto_perfil || '../imagenes/default_profile.png'} alt="Foto de Perfil" className="profile-img" />
          </div> */}

          <label htmlFor="id_rol">Rol</label>
          <input type="text" id="id_rol" name="id_rol" className="form-control" disabled />

          <label htmlFor="cedula_profesional">Cédula Profesional</label>
          <input type="text" id="cedula_profesional" name="cedula_profesional" className="form-control" disabled />

          <label htmlFor="grado_estudios">Grado de Estudios</label>
          <input type="text" id="grado_estudios" name="grado_estudios" className="form-control" disabled />

          <label htmlFor="titulo_obtenido">Título Obtenido</label>
          <input type="text" id="titulo_obtenido" name="titulo_obtenido" className="form-control" disabled />

          <label htmlFor="id_celula">ID de Célula</label>
          <input type="number" id="id_celula" name="id_celula" className="form-control" disabled />
        </form>
        <br/><br/>
      </div>
    </div>
  );
};

export default perfiltrabajador;
