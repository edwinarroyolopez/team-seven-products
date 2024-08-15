"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function DataTable() {
  const [formData, setFormData] = useState<{ name: string; email: string; phone: string }[]>([]);

  useEffect(() => {
    // Recuperar los datos del Local Storage al cargar el componente
    const data = localStorage.getItem("formData");

    if (data) {
      setFormData([JSON.parse(data)]);
    }
  }, []);

  return (
    <div className="content">
      <h2>Saved Data</h2>
      {formData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
      
    </div>
  );
}

