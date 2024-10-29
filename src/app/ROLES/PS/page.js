"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import './role.css';

const PsicologoPage = () => {
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
      <h1>Bienvenido, Psicólogo</h1>
      <ul>
        <li>Alta de sesiones</li>
        <li>Consulta de informes psicológicos</li>
        <li>Actualización de información de NNA</li>
        <li>Consulta de planes de intervención</li>
      </ul>
      <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
    </div>
  );
};

export default PsicologoPage;
