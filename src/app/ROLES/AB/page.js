"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import './role.css';

const AbogadoPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Elimina el token del almacenamiento local
    localStorage.removeItem("token");
    console.log("Cerrando sesión...");
    // Redirige al usuario a la página de inicio de sesión
    router.replace("/");
  };

  return (
    <div>
      <h1>Bienvenido, Abogado</h1>
      <ul>
        <li>Alta de casos</li>
        <li>Consulta de expedientes</li>
        <li>Cambio de información de NNA</li>
        <li>Consulta de Planes de Restitución</li>
      </ul>
      <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
    </div>
  );
};

export default AbogadoPage;
