"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import './usuarios.css';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulación de obtención de usuarios desde la API
    const fetchUsuarios = async () => {
      // Aquí iría la llamada a tu API para obtener los usuarios
      const mockUsuarios = [
        { id: 1, username: "AB0001", name: "Juan Pérez" },
        { id: 2, username: "CH0001", name: "Maria Lopez" },
      ];
      setUsuarios(mockUsuarios);
    };
    fetchUsuarios();
  }, []);

  const handleAgregarUsuario = () => {
    router.push("/usuarios/agregar");
  };

  return (
    <div className="body">
    <div className="usuarios-container">
      <h2>Gestión de Usuarios</h2>
      <button onClick={handleAgregarUsuario}>Agregar Usuario</button>
      <div className="usuarios-list">
        {usuarios.map(usuario => (
          <div key={usuario.id} className="usuario-item">
            <span>{usuario.name} - {usuario.username}</span>
            <button onClick={() => router.push(`/usuarios/editar/${usuario.id}`)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
