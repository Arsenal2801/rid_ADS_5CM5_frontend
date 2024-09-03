'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './registro.css';

export default function Registro() {
  const router = useRouter();

  // Estado para manejar el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    curp: '',
    fechaNacimiento: '',
    edad: '',
    domicilio: '',
    nacionalidad: '',
    alergias: [],
    especificacionAlergia: '',
    enfermedadCronica: '',
    especificacionEnfermedad: '',
    intervencionQuirurgica: '',
    especificacionIntervencion: '',
    bajoMedicamento: '',
    especificacionMedicamento: '',
    estudiaActualmente: '',
    nivelEstudios: '',
  });

  // Manejadores de eventos para el formulario
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...prevData[name], value] : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log(formData);
  };

  // Nueva función para redirigir a la página de consulta
  const handleConsultaClick = () => {
    router.push('/consulta');
  };

  return (
    <div className="registro-container">
      <h2>Registrar Información Básica</h2>
      <form onSubmit={handleSubmit}>
        {/* Sección de Datos Personales */}
        <section>
          <h3>Datos Personales</h3>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
          <label>Apellido:</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} />
          <label>CURP:</label>
          <input type="text" name="curp" value={formData.curp} onChange={handleInputChange} />
          <label>Fecha de Nacimiento:</label>
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleInputChange} />
          <label>Edad:</label>
          <input type="number" name="edad" value={formData.edad} onChange={handleInputChange} />
          <label>Domicilio:</label>
          <input type="text" name="domicilio" value={formData.domicilio} onChange={handleInputChange} />
          <label>Nacionalidad:</label>
          <input type="text" name="nacionalidad" value={formData.nacionalidad} onChange={handleInputChange} />
        </section>

        {/* Sección de Estado de Salud */}
        <section>
          <h3>Estado de Salud</h3>
          <label>Alergias:</label>
          <input type="checkbox" name="alergias" value="medicamento" onChange={handleInputChange} /> Medicamento
          <input type="checkbox" name="alergias" value="alimentos" onChange={handleInputChange} /> Alimentos
          <input type="checkbox" name="alergias" value="ninguna" onChange={handleInputChange} /> Ninguna alergia
          {formData.alergias.includes('medicamento') || formData.alergias.includes('alimentos') ? (
            <>
              <label>Especificación de Alergia:</label>
              <input
                type="text"
                name="especificacionAlergia"
                value={formData.especificacionAlergia}
                onChange={handleInputChange}
              />
            </>
          ) : null}
          <label>Enfermedad Crónica:</label>
          <input type="radio" name="enfermedadCronica" value="si" onChange={handleInputChange} /> Sí
          <input type="radio" name="enfermedadCronica" value="no" onChange={handleInputChange} /> No
          {formData.enfermedadCronica === 'si' ? (
            <>
              <label>Especificación de Enfermedad:</label>
              <input
                type="text"
                name="especificacionEnfermedad"
                value={formData.especificacionEnfermedad}
                onChange={handleInputChange}
              />
            </>
          ) : null}
          <label>Intervención Quirúrgica:</label>
          <input type="radio" name="intervencionQuirurgica" value="si" onChange={handleInputChange} /> Sí
          <input type="radio" name="intervencionQuirurgica" value="no" onChange={handleInputChange} /> No
          {formData.intervencionQuirurgica === 'si' ? (
            <>
              <label>Especificación de Intervención:</label>
              <input
                type="text"
                name="especificacionIntervencion"
                value={formData.especificacionIntervencion}
                onChange={handleInputChange}
              />
            </>
          ) : null}
          <label>Bajo Medicamento:</label>
          <input type="radio" name="bajoMedicamento" value="si" onChange={handleInputChange} /> Sí
          <input type="radio" name="bajoMedicamento" value="no" onChange={handleInputChange} /> No
          {formData.bajoMedicamento === 'si' ? (
            <>
              <label>Especificación de Medicamento:</label>
              <input
                type="text"
                name="especificacionMedicamento"
                value={formData.especificacionMedicamento}
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </section>

        {/* Sección de Situación Académica */}
        <section>
          <h3>Situación Académica</h3>
          <label>¿Estudia Actualmente?:</label>
          <input type="radio" name="estudiaActualmente" value="si" onChange={handleInputChange} /> Sí
          <input type="radio" name="estudiaActualmente" value="no" onChange={handleInputChange} /> No
          <label>Nivel de Estudios:</label>
          <input type="text" name="nivelEstudios" value={formData.nivelEstudios} onChange={handleInputChange} />
        </section>

        <button type="submit">Registrar</button>
      </form>

      {/* Botón de consulta */}
      <button className="consulta-button" onClick={handleConsultaClick}>
        Consultar Casos
      </button>
    </div>
  );
}
