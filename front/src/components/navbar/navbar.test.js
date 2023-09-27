import React from 'react';
import { useNavigate } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

afterEach(cleanup);

test('should render', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );


    expect(getByText('Inicio')).toBeTruthy();
    expect(getByText('Sobre mí')).toBeTruthy();
    expect(getByText('Tratamientos')).toBeTruthy();
    expect(getByText('Contacto')).toBeTruthy();

  });


  test('should render the logo', () => {
    const { getByAltText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const logoElement = getByAltText('Los colores de la luz');
  expect(logoElement).toBeTruthy();
  });

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

test('should navigate when menu items are clicked', () => {
  const navigate = jest.fn();
  useNavigate.mockImplementation(() => navigate);
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );


  fireEvent.click(getByText('Sobre mí'));


  expect(navigate).toHaveBeenCalledWith('/aboutme');
});

test('should navigate when logo is clicked', () => {
    const { getByAltText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const logoElement = getByAltText('Los colores de la luz'); 

    // Simula un clic en el logo
    fireEvent.click(logoElement);


    expect(window.location.pathname).toBe('/');
  });






