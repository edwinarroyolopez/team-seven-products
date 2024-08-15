"use client"; // Directiva de Next.js para usar código del lado del cliente

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Componente de enlace de Next.js
import "../page.table.css"

export default function Table() {
  // Estado para almacenar los datos de los usuarios
  const [users, setUsers] = useState<any[]>([]);

  // Hook useEffect para cargar los datos del Local Storage cuando el componente se monta
  useEffect(() => {
    // Obtener los datos del Local Storage al cargar el componente
    const existingData = localStorage.getItem('formData');
    // Parsear los datos obtenidos o usar un array vacío si no hay datos
    const parsedData = existingData ? JSON.parse(existingData) : [];

    // Verificar si parsedData es realmente un array antes de asignarlo al estado
    if (Array.isArray(parsedData)) {
      setUsers(parsedData);
    } else {
      // Manejar el caso donde el formato de los datos no es el esperado
      console.error("Unexpected data format in Local Storage");
    }
  }, []); // Dependencia vacía significa que el efecto se ejecuta solo una vez después de que el componente se monta

  return (
    <div>
      <h1>Users Table</h1>

      {/* Enlaces */}
      <nav>
        <Link href="/">home</Link>
        <Link href="/form">form</Link>
      </nav>
      {users.length > 0 ? (
        // Si hay usuarios, muestra una tabla con sus datos
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapea sobre el array de usuarios para crear una fila por cada usuario */}
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Si no hay usuarios, muestra un mensaje indicando que no hay datos disponibles
        <p>No users available.</p>
      )}
    </div>
  );
}


