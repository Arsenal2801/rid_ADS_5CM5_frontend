"use client";
import React, { useState } from 'react';
import './consulta.css';

export default function Consulta() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Ejemplo de búsqueda simulada
    const mockResults = [
      { id: 1, name: 'Juan Pérez', curp: 'JUAP920123HDFNRN00' },
      { id: 2, name: 'Maria Lopez', curp: 'MALO850415HDFLRS00' },
      { id: 3, name: 'Luis Hernández', curp: 'LUHE750520HDFLRX00' },
    ];

    // Filtra los resultados según el término de búsqueda
    const filteredResults = mockResults.filter(result =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.curp.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="consulta-container">
      <h2>Consulta de Casos</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar por nombre o CURP"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="resultados">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="resultado">
              <span>{result.name} - {result.curp}</span>
              <button>Ver</button>
              <button>Actualizar</button>
              <button>Eliminar</button>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}
