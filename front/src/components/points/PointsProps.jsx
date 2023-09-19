import React from 'react';
import Points from './Points';


const App = () => {
  // Supongamos que tienes un array de imágenes y textos
  const datos = [
    { imagen: 'imagen1.jpg', texto: 'Lorem Ipsum 1' },
    { imagen: 'imagen2.jpg', texto: 'Lorem Ipsum 2' },
    { imagen: 'imagen3.jpg', texto: 'Lorem Ipsum 3' },
    // Agrega los datos restantes aquí
  ];

  return (
    <div>
      {datos.map((dato, index) => (
        <Points key={index} imagen={dato.imagen} texto={dato.texto} />
      ))}
    </div>
  );
};

export default App;

