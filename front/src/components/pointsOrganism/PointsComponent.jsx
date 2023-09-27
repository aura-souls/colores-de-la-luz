import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import violet from '../../assets/images/violet.png';
import blue from '../../assets/images/blueIndigo.png';
import celeste from'../../assets/images/celeste.png';
import green from '../../assets/images/green.png';
import orange from '../../assets/images/orange.png';
import yellow from '../../assets/images/yellow.png';
import red from '../../assets/images/red.png';
//import { StyledEngineProvider } from '@mui/material/styles';
const Chackra = () => {
  const chakrasData = [
    { imageSrc: violet, text: 'Sahastrara “Yo Soy” si no está equilibrado estamos viviendo en el Control Mental', backgroundColor: 'indigo', },
    { imageSrc: blue, text: 'Ajna “Yo intuyo” si no está equilibrado nos estamos negando.', backgroundColor: 'lightblue' },
    { imageSrc: celeste, text: 'Vishuddha“ Yo Expreso”si no está equilibrado nos Mentimos.', backgroundColor: 'lightblue' },   
    { imageSrc: green, text: 'Anahata “Yo Amo”, si no está equilibrado sentimos Tristeza.', backgroundColor: 'lightgreen' },
    { imageSrc: yellow, text: 'Manipura “Yo Puedo”, si no está equilibrado sentimos Vergüenza.', backgroundColor: 'yellow' },
    { imageSrc: orange, text: 'Svadhishthana “Yo Acciono, disfruto y creo, si no está equilibrado es por la creencia de la Culpa.', backgroundColor: 'orange'},  
    { imageSrc: red, text: 'Muladhara “Yo Tengo” si no está equilibrado es El Miedo.', backgroundColor: 'red' },
  ];
  const [selectedChakra, setSelectedChakra] = useState(null);
  const [showText, setShowText] = useState(false);
  const handleClick = (index, color) => {
    if (selectedChakra === index) {
      document.body.style.backgroundColor = ''; // color predeterminado
      setSelectedChakra(null);
      setShowText(false);
    } else {
      document.body.style.backgroundColor = color;
      setSelectedChakra(index);
      setShowText(true);
    }
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
      {chakrasData.map((data, index) => (
        <div key={index} onClick={() => handleClick(index, data.backgroundColor)} style={{ textAlign: 'center' }}>
          {(selectedChakra === null || selectedChakra === index) && <img src={data.imageSrc} alt="Chakra images" />}
          {(selectedChakra === null || selectedChakra === index) && showText &&
            <Card variant="outlined" sx={{ backgroundColor: data.backgroundColor }}>
              <CardContent>
                <Typography>{data.text}</Typography>
              </CardContent>
            </Card>
          }
        </div>
      ))}
    </div>
  )
}
export default Chackra;




