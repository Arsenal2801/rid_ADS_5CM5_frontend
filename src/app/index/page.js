// src/app/index.js
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { searchParams } = router; // Obtenemos los parámetros de búsqueda
  const prefix = searchParams.prefix; // Extraemos el prefijo

  let welcomeMessage = "";

  // Asignar un mensaje de bienvenida basado en el prefijo
  switch (prefix) {
    case "AB":
      welcomeMessage = "Bienvenido abogado";
      break;
    case "ME":
      welcomeMessage = "Bienvenido médico";
      break;
    case "PS":
      welcomeMessage = "Bienvenido psicólogo";
      break;
    case "TS":
      welcomeMessage = "Bienvenido trabajador social";
      break;
    case "DI":
      welcomeMessage = "Bienvenido director";
      break;
    case "CH":
      welcomeMessage = "Bienvenido capital humano";
      break;
    default:
      welcomeMessage = "Bienvenido"; // Mensaje por defecto si no hay prefijo
  }

  // Redirigir a login si no hay prefijo
  useEffect(() => {
    if (!prefix) {
      router.replace("/login");
    }
  }, [prefix, router]);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <h1>{welcomeMessage}</h1>
    </div>
  );
}
