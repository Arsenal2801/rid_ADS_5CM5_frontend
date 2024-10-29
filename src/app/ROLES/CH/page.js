"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la redirección
import Link from "next/link";
import './role.css';

const CapitalHumanoPage = () => {
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
      <h1>Bienvenido, Capital Humano</h1>
      <ul>
        <li>
          <Link href="./trabajadores/AgregarTrabajadores">Alta empleado</Link>
        </li>
        <li>
          <Link href="./trabajadores/EditarTrabajadores">Editar empleado</Link>
        </li>
        <li>
          <Link href="./trabajadores/Trabajadores">Trabajadores</Link>
        </li>
        <li>Consulta de células de trabajo</li>
      </ul>
      <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
    </div>
  );
};

export default CapitalHumanoPage;
