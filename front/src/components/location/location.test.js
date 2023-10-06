import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Location from './Location';

test('Renderizar el encabezado h6 de dirección', () => {
  const { getByText } = render(<Location />);
  const direccionHeader = getByText('Dirección:');
  expect(direccionHeader).toBeInTheDocument();
});

test('Renderizar el texto de dirección', () => {
  const { getByText } = render(<Location />);
  const direccionText = getByText('Carrer de Berga 36');
  expect(direccionText).toBeInTheDocument();
});

test('Renderizar el código postal', () => {
  const { getByText } = render(<Location />);
  const codigoPostal = getByText('C.P. 08012');
  expect(codigoPostal).toBeInTheDocument();
});

test('Renderizar la ciudad', () => {
  const { getByText } = render(<Location />);
  const ciudad = getByText('Barcelona');
  expect(ciudad).toBeInTheDocument();
});

test('Renderizar el horario de lunes a viernes', () => {
  const { getByText } = render(<Location />);
  const horarioLunesViernes = getByText('de 8:00 a 18:00');
  expect(horarioLunesViernes).toBeInTheDocument();
});

test('Renderizar el horario de los sábados', () => {
  const { getByText } = render(<Location />);
  const horarioSabados = getByText('de 9:00 a 14:00');
  expect(horarioSabados).toBeInTheDocument();
});

test('Renderizar el mensaje de "Domingos cerrados"', () => {
  const { getByText } = render(<Location />);
  const domingosCerrados = getByText('Domingos cerrados');
  expect(domingosCerrados).toBeInTheDocument();
});

test('Renderizar el encabezado h6 de localización', () => {
  const { getByText } = render(<Location />);
  const localizacionHeader = getByText('Localización:');
  expect(localizacionHeader).toBeInTheDocument();
});

test('Renderizar la imagen de localización', () => {
  const { getByAltText } = render(<Location />);
  const imagen = getByAltText('Localización de Alnouart');
  expect(imagen).toBeInTheDocument();
});

test('La imagen tiene el atributo borderRadius', () => {
    const { getByAltText } = render(<Location />);
    const imagen = getByAltText('Localización de Alnouart');
    expect(imagen).toHaveStyle('borderRadius: 1rem');
  });

test('El texto de dirección tiene margen a la derecha', () => {
  const { getByText } = render(<Location />);
  const direccionText = getByText('Carrer de Berga 36');
  expect(direccionText).toHaveStyle('margin: 0 1rem');
});