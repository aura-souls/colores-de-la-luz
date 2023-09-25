import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

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
      console.log("Email correcto");
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
          sx={{ marginBottom: 2, fontFamily: 'Montserrat' }}
          
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
          sx={{ marginBottom: 2, fontFamily: 'Montserrat' }}
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
          sx={{ marginBottom: 2, fontFamily: 'Montserrat' }}
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
          sx={{ marginBottom: 2, fontFamily: 'Montserrat', borderColor: '#D6F0D9' }}
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
      fontFamily: "Montserrat",
    }}
  >
    ENVIAR
  </Button>
</div>
      </Box>
    </>
  );
}
    