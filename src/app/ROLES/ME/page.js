"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import './role.css';

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
      <h1>Bienvenido, Médico</h1>
      <ul>
        <li>Alta de diagnósticos</li>
        <li>Consulta de diagnósticos anteriores</li>
        <li>Actualización de información de pacientes</li>
        <li>Consulta de planes de tratamiento</li>
      </ul>
      <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
    </div>
  );
};

export default MedicoPage;
