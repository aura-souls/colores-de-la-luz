
import React from 'react';
import violetImg from '../../assets/image-chakras/indigo-chakra.svg'; // Asegúrate de ajustar la ruta a la ubicación de tu imagen
import blueImg from '../../assets/image-chakras/blue-chakra.svg';
import celesteImg from '../../assets/image-chakras/celeste-chakra.svg';
import greenImg from '../../assets/image-chakras/green-chakra.svg';
import orangeImg from '../../assets/image-chakras/orange-chakra.svg';
import yellowImg from '../../assets/image-chakras/yellow-chakra.svg';
import redImg from '../../assets/image-chakras/red-chakra.svg';


const Point = () => {
  return (
    <div>
      <h1> COLORES DE LA LUZ
      </h1>
      <button>
      <img src={violetImg} alt="Image of violet chakra" />
      </button>
      <button>
      <img src={blueImg} alt="Image of blue chakra" />
      </button>
      <button>
      <img src={celesteImg} alt="Image of celeste chakra" />
      </button>
      <button>
      <img src={greenImg} alt="Image of green chakra" />
      </button>
      <button>
      <img src={orangeImg} alt="Image of orange chakra" />
      </button>
      <button>
      <img src={yellowImg} alt="Image of yellow chakra" />
      </button>
      <button>
      <img src={redImg} alt="Image of red chakra" />
      </button>
    </div>
  );
};

export default Point;

