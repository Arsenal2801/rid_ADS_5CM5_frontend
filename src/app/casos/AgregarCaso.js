"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import './casos.css';

export default function Casos() {
  const [casos, setCasos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulación de obtención de casos desde la API
    const fetchCasos = async () => {
      const mockCasos = [
        { id: 1, title: "Caso 1", description: "Descripción del Caso 1" },
        { id: 2, title: "Caso 2", description: "Descripción del Caso 2" },
      ];
      setCasos(mockCasos);
    };
    fetchCasos();
  }, []);

  const handleAgregarCaso = () => {
    router.push("/casos/agregar");
  };

  return (
    <div className="casos-container">
      <h2>Gestión de Casos</h2>
      <button onClick={handleAgregarCaso}>Agregar Caso</button>
      <div className="casos-list">
        {casos.map(caso => (
          <div key={caso.id} className="caso-item">
            <span>{caso.title}</span>
            <button onClick={() => router.push(`/casos/editar/${caso.id}`)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
