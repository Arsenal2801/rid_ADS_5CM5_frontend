"use client";
import { useState } from "react";
import './consulta.css';

export default function Consulta() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulación de búsqueda
    const mockResults = [
      { id: 1, title: "Caso 1", description: "Descripción del Caso 1" },
      { id: 2, title: "Caso 2", description: "Descripción del Caso 2" },
    ];
    setResult(mockResults.filter(caso => caso.title.includes(searchTerm)));
  };

  return (
    <div className="consulta-container">
      <h2>Consulta de Casos</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Buscar por título" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
        <button type="submit">Buscar</button>
      </form>
      <div className="result-list">
        {result.map(caso => (
          <div key={caso.id}>
            <h3>{caso.title}</h3>
            <p>{caso.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
