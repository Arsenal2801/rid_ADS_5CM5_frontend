import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Obtener el token de autenticación desde las cookies
  const token = request.cookies.get('auth_token');

  // Si no existe un token, redirigir al login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verificar el token y obtener el rol del usuario
    const { role } = jwt.verify(token, process.env.JWT_SECRET);

    // Definir acceso por rutas según el rol
    const roleAccess = {
      'Abogado': '/ROLES/AB',
      'Capital Humano': '/ROLES/CH',
      'Director': '/ROLES/DI',
      'Médico': '/ROLES/ME',
      'Psicólogo': '/ROLES/PS',
      'Trabajador Social': '/ROLES/TS'
    };

    // Verificar si el usuario está accediendo a una ruta permitida para su rol
    const allowedPath = roleAccess[role];
    if (allowedPath && pathname.startsWith(allowedPath)) {
      return NextResponse.next(); // Continuar si la ruta es permitida
    } else {
      // Redirigir a una página de "No Autorizado" si intenta acceder a una ruta restringida
      return NextResponse.redirect(new URL('/no-autorizado', request.url));
    }
  } catch (error) {
    // Si el token es inválido, redirigir al login
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
