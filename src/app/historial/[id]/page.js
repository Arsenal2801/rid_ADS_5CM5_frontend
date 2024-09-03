'use client';
import React from 'react';
import './historial.css';

export default function Historial() {
  const handleDownload = () => {
    // Lógica para generar y descargar el archivo con la información
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('historial-content').innerText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "restitucion_derechos.txt";
    document.body.appendChild(element); // Requerido para Firefox
    element.click();
  };

  return (
    <div className="historial-container">
      <h1>Restitución integral de derechos</h1>
      <div id="historial-content">
        <h2>Datos Personales</h2>
        <p>Nombre: Juan Pérez</p>
        <p>CURP: JUPZ010101HDFRNN08</p>
        <p>Fecha de Nacimiento: 01/01/2001</p>
        {/* Agrega más información según sea necesario */}

        <h2>Estado de Salud</h2>
        <p>Alergias: Ninguna</p>
        {/* Agrega más información según sea necesario */}

        <h2>Situación Académica</h2>
        <p>Estudia Actualmente: Sí</p>
        {/* Agrega más información según sea necesario */}
      </div>
      <button onClick={handleDownload}>Descargar Información</button>
    </div>
  );
}
