// src/app/login/page.js
"use client"; // Indica que es un componente del lado del cliente

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook de enrutamiento

  const handleLogin = async (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica de autenticación

    // Redirigir a la página de registro
    router.push("/registro");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-8">Bienvenido</h1>
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="mb-4 p-2 bg-blue-500 text-white rounded"
          >
            Entrar
          </button>
        </form>
        <a href="#" className="text-blue-500 mt-4">
          ¿Olvidé mi contraseña?
        </a>
      </div>
    </div>
  );
}
