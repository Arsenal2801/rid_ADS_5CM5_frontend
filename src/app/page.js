"use client"; // Indica que es un componente del lado del cliente

import { useState } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Función para iniciar sesión y definir redirección por rol
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Resetea mensaje de error

    // Validaciones básicas antes de autenticación
    if (!username || !password) {
      setErrorMessage("Por favor, ingresa un usuario y una contraseña válidos.");
      return;
    }

    try {
      // Simulación de autenticación
      const isValidUser = await fakeAuth(username, password);
      
      if (isValidUser) {
        // Determinar el rol del usuario
        const userRole = username.slice(0, 2);
        const roleName = {
          AB: "Abogado",
          CH: "Capital Humano",
          DI: "Director",
          ME: "Médico",
          PS: "Psicólogo",
          TS: "Trabajador Social"
        }[userRole];

        // Generar token JWT con el rol del usuario
        const token = jwt.sign({ username, role: roleName }, process.env.NEXT_PUBLIC_JWT_SECRET);

        // Guardar token en las cookies
        document.cookie = `auth_token=${token}; path=/`;

        // Redirigir a la página correspondiente según el rol
        router.replace(`/ROLES/${userRole}`);
      } else {
        setErrorMessage("Credenciales incorrectas, por favor verifica tus datos.");
      }
    } catch (error) {
      setErrorMessage("Error al iniciar sesión. Por favor, intenta nuevamente.");
    }
  };

  // Simulación de autenticación
  const fakeAuth = async (username, password) => {
    // Definir las credenciales válidas para cada prefijo
    const validCredentials = {
      "AB0001": "1234", // Abogado
      "PS0001": "1234", // Psicólogo
      "ME0001": "1234", // Médico
      "TS0001": "1234", // Trabajador Social
      "DI0001": "1234", // Director
      "CH0001": "1234"  // Capital Humano
    };

    // Comprobar si las credenciales son válidas
    return validCredentials[username] === password;
  };

  return (
    <div className="body">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card login-card text-center">
          <div className="card-body">
            <center><img src="imagenes/f_derchos_logo.png" height="100px" alt="Logo" /></center>
            <br />
            <h2 className="card-title mb-4">Iniciar Sesión</h2>
            
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Usuario</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Ingresa tu usuario (ej. AB0001)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-login w-100"
                disabled={!username || !password}
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
