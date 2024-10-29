"use client";

import React from "react";
import Link from "next/link"; // Importa Link para la navegación
import './page.css';

const CapitalHumanoPage = () => {
  return (
    <div>
      <h1>Bienvenido, Capital Humano</h1>
      <ul>
        <li>
          <Link href="/trabajadores/AgregarTrabajadores">Alta empleado</Link>
        </li>
        <li>Baja de empleados</li>
        <li>Consulta de empleados</li>
        <li>Consulta de células de trabajo</li>
      </ul>
    </div>
  );
};

export default CapitalHumanoPage;
