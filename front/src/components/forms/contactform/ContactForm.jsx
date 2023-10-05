import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { sendMessage } from "../../../services/WhatService";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({
    emailError: false,
    nameError: false,
    phoneError: false,
    emailMessage: "",
    nameMessage: "",
    phoneMessage: "",
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    // Expresión regular que permite el signo "+" y números
    const regex = /^[+0-9]+$/;
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del campo de nombre
    if (name.trim() === "") {
      setErrors({
        ...errors,
        nameError: true,
        nameMessage: "El nombre es obligatorio",
      });
    } else {
      setErrors({
        ...errors,
        nameError: false,
        nameMessage: "",
      });
    }

    // Validación del campo de correo electrónico
    if (validateEmail(email)) {
      setErrors({
        ...errors,
        emailError: false,
        emailMessage: "",
      });
    } else {
      setErrors({
        ...errors,
        emailError: true,
        emailMessage: "Formato de correo electrónico incorrecto",
      });
    }

    // Validación del campo de teléfono
    if (phone.trim() === "") {
      setErrors({
        ...errors,
        phoneError: true,
        phoneMessage: "El teléfono es obligatorio",
      });
    } else if (!validatePhone(phone)) {
      setErrors({
        ...errors,
        phoneError: true,
        phoneMessage: "Formato de teléfono incorrecto",
      });
    } else {
      setErrors({
        ...errors,
        phoneError: false,
        phoneMessage: "",
      });

      // Crear un objeto con los datos para enviar al servidor
      const formData = {
        name: name,
        email: email,
        phone: phone,
        comments: comments,
      };

      // Llamar a la función del servicio para enviar el mensaje
      sendMessage(formData)
        .then((response) => {
          if (response.status === 200) {
            Swal.fire(
              "¡Gracias por contactar!",
              "Hemos recibido tu formulario con éxito.",
              "success"
            );
          } else {
            console.error("Error al enviar el formulario.");
          }
        })
        .catch((error) => {
          console.error("Error al enviar el formulario:", error);
        });
    }
  };

  try {
    const response = await fetch('/api/enviar-formulario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Redirige a la página de agradecimiento o muestra un mensaje de éxito
      console.log('¡Formulario enviado con éxito!');
      } else {
      console.error('Error al enviar el formulario.');
      }
      } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#4A148C', fontFamily: 'Montserrat' }}>Contacto</h1>

      <Box component="form" onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <TextField
            id="name"
            label={<span style={{ color: '#4A148C' }}>Nombre y Apellidos</span>}
            variant="outlined"
            style={{ width: '50%' }}
            required
            error={errors.nameError}
            helperText={errors.nameMessage}
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: 2 }}

          />

          <TextField
            id="email"
            label={<span style={{ color: '#4A148C' }}>Email</span>}
            type="email"
            variant="outlined"
            style={{ width: '50%' }}
            required
            error={errors.emailError}
            helperText={errors.emailMessage}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            id="phone"
            label={<span style={{ color: '#4A148C' }}>Teléfono</span>}
            variant="outlined"
            style={{ width: '50%' }}
            required
            error={errors.phoneError}
            helperText={errors.phoneMessage}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            id="comments"
            label={<span style={{ color: '#4A148C' }}>Mensaje</span>}
            variant="outlined"
            style={{ width: '50%' }}
            multiline
            rows={4}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="outlined"
            sx={{ mt: 2 }}
            style={{
              backgroundColor: "#512872",
              color: "#F0E5D6",
            }}
          >
            ENVIAR
          </Button>
        </div>
      </Box>
    </>
  );
}
