"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import './casos.css';

export default function EditarCaso({ params }) {
  const [caso, setCaso] = useState({ title: "", description: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchCaso = async () => {
      const mockCaso = { title: "Caso 1", description: "Descripción del Caso 1" };
      setCaso(mockCaso);
    };
    fetchCaso();
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Caso actualizado:", caso);
    router.push("/casos");
  };

  return (
    <div className="editar-caso-container">
      <h2>Editar Caso</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" value={caso.title} onChange={(e) => setCaso({ ...caso, title: e.target.value })} required />
        <textarea placeholder="Descripción" value={caso.description} onChange={(e) => setCaso({ ...caso, description: e.target.value })} required />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
