'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import './historial.css';

// Simulación de datos más detallados
const mockDetails = {
  1: { name: 'Juan Pérez', curp: 'JUAP920123HDFNRN00', age: 23, address: 'Calle Falsa 123', condition: 'Healthy' },
  2: { name: 'Maria Lopez', curp: 'MALO850415HDFLRS00', age: 39, address: 'Avenida Siempre Viva 742', condition: 'Diabetic' },
  3: { name: 'Luis Hernández', curp: 'LUHE750520HDFLRX00', age: 29, address: 'Boulevard de los Heroes 456', condition: 'Asthmatic' },
};

export default function Historial() {
  const { id } = useParams();
  const details = mockDetails[id] || {};

  const handleDownload = () => {
    // Lógica para generar y descargar el archivo con la información
    const element = document.createElement('a');
    const file = new Blob([document.getElementById('historial-content').innerText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'restitucion_derechos.txt';
    document.body.appendChild(element); // Requerido para Firefox
    element.click();
  };

  return (
    <div className="historial-container">
      <h1>Restitución Integral de Derechos</h1>
      <div id="historial-content">
        <h2>Datos Personales</h2>
        <p>Nombre: {details.name}</p>
        <p>CURP: {details.curp}</p>
        <p>Edad: {details.age}</p>
        <p>Domicilio: {details.address}</p>
        <p>Condición: {details.condition}</p>
        {/* Agrega más información según sea necesario */}
      </div>
      <button onClick={handleDownload}>Descargar Información</button>
    </div>
  );
}
