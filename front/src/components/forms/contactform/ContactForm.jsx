import React, { useState } from "react";
import { Box, Button, TextField, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import 'leaflet/dist/leaflet.css';

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

  const [checkedA, setCheckedA] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[+0-9]+$/;
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

      const formData = {
        name: name,
        email: email,
        phone: phone,
        comments: comments,
      };

      Swal.fire(
        '¡Gracias por contactar',
        '¡Hemos recibido tu formulario con éxito!',
        'success'
      );
   
      axios
        .get("http://localhost:8000/send-mail", formData)
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

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#4A148C', marginBottom: '20px' }}>Contacto</h1>

      <Box component="form" onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <TextField
            id="name"
            label={<span style={{ color: '#4A148C' }}>Nombre y Apellidos</span>}
            variant="outlined"
            style={{ width: '50%' }}
            size="small"
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
            size="small"
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
            size="small"
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
            size="small" 
            multiline
            rows={3}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={checkedA} onChange={(e) => setCheckedA(e.target.checked)} name="checkedA" />}
              label={<span style={{ color: "#512872" }}>Acepto recibir información vía whatsapp o e-mail</span>} />
            
          </FormGroup>
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
};