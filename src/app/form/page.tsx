

"use client"; 

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="content">
      <Input
        placeholder="Put your name"
        type="text"
        id="name"

        onChange={handleInputChange}
      />
      <Input
        placeholder="Put your email"
        type="email"
        id="email"

        onChange={handleInputChange}
      />
      <Input
        placeholder="Put your phone"
        type="text"
        id="phone"
        onChange={handleInputChange}
      />
      <Button label="Save" onClick={handleSubmit} />
    </div>
  );
}

