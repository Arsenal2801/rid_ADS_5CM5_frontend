"use client"; // Indica que es un componente del lado del cliente

import { useState } from "react";
import { useRouter } from "next/navigation";
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
      setErrorMessage(
        "Por favor, ingresa un usuario y una contraseña válidos."
      );
      return;
    }

    try {
      // Llamada al backend para autenticación
      const body = {
        id_usuario: username,
        contrasena: password,
      };
      const response = await fetch(
        "http://127.0.0.1:3000/api/users/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la autenticación");
      }

      const data = await response.json();

      if (data && data.token) {
        // Guardar el token si el backend lo devuelve
        localStorage.setItem("token", data.token);
        const type_user = data.type_user;
         // Redirigir a la página correspondiente según el rol
         router.replace(`/ROLES/${type_user}`);
      } else {
        setErrorMessage(
          "Credenciales incorrectas, por favor verifica tus datos."
        );
      }
    } catch (error) {
      setErrorMessage(
        "Error al iniciar sesión. Por favor, intenta nuevamente."
      );
    }
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
