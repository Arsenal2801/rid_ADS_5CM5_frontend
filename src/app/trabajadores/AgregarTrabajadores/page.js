"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import './usuarios.css';

export default function AgregarUsuario() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para agregar el usuario a la API
    console.log("Usuario agregado:", { username, name });
    router.push("/usuarios");
  };

  return (
    <div className="body">
    <div className="agregar-usuario-container">
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Agregar</button>
      </form>
    </div>
    </div>
  );
}
