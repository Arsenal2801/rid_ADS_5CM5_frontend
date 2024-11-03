"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../role.css';

const MedicoPage = () => {
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
        <Link href="/ROLES/ME" className="navbar-brand">
            <img className="logo-img" src="../imagenes/f_derchos_logo.png" />
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
                <a className="nav-link" href="#">Equipo</a>
              </li>
              <button onClick={handleLogout} className="btn btn-outline-success me-2" type="button">Cerrar Sesión</button>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar trabajador" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    <br/>
    <h1>Bienvenido Médico</h1>
    <div>
        <h2>Casos:</h2>
        <div className="box">
            <p>example</p>
        </div>
    </div>
    </div>
  );
};

export default MedicoPage;
