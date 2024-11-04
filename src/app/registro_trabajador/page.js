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
                <Link className="nav-link" href="/registro_trabajador">Registrar</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Equipos</a>
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
    <h2>Formulario de Registro</h2>
    <div className="container login-card">
    <form className="form-register">
        <label for="nombres">Nombres</label>
        <input type="text" id="nombres" name="nombres" className="form-control" required/>

        <label for="primer-apellido">Primer Apellido</label>
        <input type="text" id="primer-apellido" name="primer-apellido" className="form-control" required/>

        <label for="segundo-apellido">Segundo Apellido</label>
        <input type="text" id="segundo-apellido" name="segundo-apellido" className="form-control" required/>

        <label for="rol">Rol</label>
        <select id="rol" name="rol" className="form-control" required>
            <option value="">Seleccione una opción</option>
            <option value="1">Abogado</option>
            <option value="2">Médico</option>
            <option value="3">Psicólogo</option>
            <option value="4">Trabajador Social</option>
            <option value="5">Capital Humano</option>
            <option value="6">Director</option>
        </select>

        <label for="fecha-nacimiento">Fecha de Nacimiento</label>
        <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" className="form-control" required/>

        <label for="sexo">Sexo</label>
        <select id="sexo" name="sexo" className="form-control" required>
            <option value="">Seleccione una opción</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="3">Otro</option>
        </select>

        <label for="calle">Calle</label>
        <input type="text" id="calle" name="calle" className="form-control" required/>

        <label for="numero-exterior">Número Exterior</label>
        <input type="text" id="numero-exterior" name="numero-exterior" className="form-control" required/>

        <label for="numero-interior">Número Interior</label>
        <input type="text" id="numero-interior" name="numero-interior" className="form-control"/>

        <label for="codigo-postal">Código Postal</label>
        <input type="text" id="codigo-postal" name="codigo-postal" className="form-control" required/>

        <label for="colonia">Colonia</label>
        <input type="text" id="colonia" name="colonia" className="form-control" required/>

        <label for="localidad">Localidad</label>
        <input type="text" id="localidad" name="localidad" className="form-control" required/>

        <label for="delegacion">Delegación o Municipio</label>
        <input type="text" id="delegacion" name="delegacion" className="form-control" required/>

        <label for="entidad-federativa">Entidad Federativa</label>
        <input type="text" id="entidad-federativa" name="entidad-federativa" className="form-control" required/>

        <label for="curp">CURP</label>
        <input type="text" id="curp" name="curp" className="form-control" required/>

        <label for="rfc">RFC</label>
        <input type="text" id="rfc" name="rfc" className="form-control" required/>

        <label for="telefono">Número de Teléfono</label>
        <input type="tel" id="telefono" name="telefono" className="form-control" required/>

        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" className="form-control" required/>

        <br/>
        <button className="btn-login" type="submit">Registrar</button>
    </form>
    </div>
    </div>
  );
};

export default regitrotrabajador;
