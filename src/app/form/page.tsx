"use client"; // Directiva de Next.js para usar código del lado del cliente

import React, { useState } from "react";
import Input from "../components/ui/Input"; // Componente de entrada personalizada
import Button from "../components/ui/Button"; // Componente de botón personalizada
import Link from "next/link"; // Componente de enlace de Next.js
import "../page.form.css";

export default function Form() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Maneja los cambios en los campos de entrada del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value // Actualiza el estado del formulario con el nuevo valor
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = () => {
    // Recupera los datos existentes del Local Storage
    const existingData = localStorage.getItem('formData');

    // Inicializa un array vacío para almacenar los datos del formulario
    let formDataArray = [];

    try {
      // Intenta parsear los datos existentes. Si no hay datos, usa un array vacío
      formDataArray = existingData ? JSON.parse(existingData) : [];
      // Verifica que formDataArray sea un array. Si no lo es, reinícialo
      if (!Array.isArray(formDataArray)) {
        formDataArray = [];
      }
    } catch (error) {
      // Maneja errores en el parsing de JSON
      console.error("Error parsing existing data:", error);
      formDataArray = [];
    }

    // Añade los nuevos datos del formulario al array
    formDataArray.push(formData);

    // Guarda el array actualizado en Local Storage
    localStorage.setItem('formData', JSON.stringify(formDataArray));

    // Muestra los datos guardados en la consola
    console.log('Data saved to Local Storage:', formDataArray);

    // Reinicia el formulario después de guardar los datos
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="content">
      {/* Enlace para volver a la página de inicio */}
      <nav>
        <Link href="/">home</Link>
        <Link href="/table">table</Link>
      </nav>
      {/* Campo de entrada para el nombre */}
      <Input
        placeholder="Put your name"
        type="text"
        id="name"
        onChange={handleInputChange} // Maneja cambios en el campo de nombre
      />
      {/* Campo de entrada para el email */}
      <Input
        placeholder="Put your email"
        type="email"
        id="email"
        onChange={handleInputChange} // Maneja cambios en el campo de email
      />
      {/* Campo de entrada para el teléfono */}
      <Input
        placeholder="Put your phone"
        type="text"
        id="phone"
        onChange={handleInputChange} // Maneja cambios en el campo de teléfono
      />
      {/* Botón para enviar el formulario */}
      <Button label="Save" onClick={handleSubmit} />
    </div>
  );
}




