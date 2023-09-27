import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen} from "@testing-library/react";
import Contact from "./ContactForm";



test("Renderiza el título 'Contacto'", () => {
  const { getByText } = render(<Contact />);
  const titulo = getByText("Contacto");
  expect(titulo).toBeInTheDocument();
});



test("Prueba de clic en el botón 'ENVIAR'", () => {
    render(<Contact />);
    const enviarButton = screen.getByText("ENVIAR");
  
    fireEvent.click(enviarButton);
  
  });