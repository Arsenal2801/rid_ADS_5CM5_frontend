"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import './role.css';

const DirectorPage = () => {
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
      <h1>Bienvenido, Director</h1>
      <ul>
        <li>Consulta de reportes</li>
        <li>Alta de nuevos proyectos</li>
        <li>Cambio de políticas</li>
        <li>Consulta de personal</li>
      </ul>
      <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
    </div>
  );
};

export default DirectorPage;
