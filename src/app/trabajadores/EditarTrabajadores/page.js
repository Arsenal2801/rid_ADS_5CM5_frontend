"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import './usuarios.css';

export default function EditarUsuario({ params }) {
  const [usuario, setUsuario] = useState({ username: "", name: "" });
  const router = useRouter();

  useEffect(() => {
    // Simulación de obtención de usuario desde la API
    const fetchUsuario = async () => {
      // Aquí iría la llamada a tu API para obtener el usuario por ID
      const mockUsuario = { username: "AB0001", name: "Juan Pérez" };
      setUsuario(mockUsuario);
    };
    fetchUsuario();
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para actualizar el usuario en la API
    console.log("Usuario actualizado:", usuario);
    router.push("/usuarios");
  };

  return (
    <div className="body">
    <div className="editar-usuario-container">
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" value={usuario.username} readOnly />
        <input type="text" placeholder="Nombre" value={usuario.name} onChange={(e) => setUsuario({ ...usuario, name: e.target.value })} required />
        <button type="submit">Actualizar</button>
      </form>
    </div>
    </div>
  );
}
