"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './casos.css';

export default function CasoDetalles({ params }) {
  const [caso, setCaso] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCaso = async () => {
      const mockCaso = { title: "Caso 1", description: "Descripción del Caso 1" }; // Simulación
      setCaso(mockCaso);
    };
    fetchCaso();
  }, [params.id]);

  if (!caso) return <div>Cargando...</div>;

  return (
    <div className="caso-detalles-container">
      <h2>{caso.title}</h2>
      <p>{caso.description}</p>
      <button onClick={() => router.push("/casos")}>Volver a la lista</button>
    </div>
  );
}
