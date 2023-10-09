import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import violet from '../../assets/images/violet.png';
import blue from '../../assets/images/blue.png';
import celeste from'../../assets/images/celeste.png';
import green from '../../assets/images/green.png';
import orange from '../../assets/images/orange.png';
import yellow from '../../assets/images/yellow.png';
import red from '../../assets/images/red.png';

import './points.css';
const Chackra = () => {
   const chakrasData = [
     { imageSrc: red, text: 'Muladhara “Yo Tengo” si no está equilibrado es El Miedo.', backgroundColor: 'rgba(241, 79, 68, 0.3)' },
     { imageSrc: orange, text: 'Svadhishthana “Yo Acciono, disfruto y creo, si no está equilibrado es por la creencia de la Culpa.', backgroundColor: 'rgba(250, 168, 75, 0.4)'},
     { imageSrc: yellow, text: 'Manipura “Yo Puedo”, si no está equilibrado sentimos Vergüenza.', backgroundColor: 'rgba(246, 218, 75, 0.6)'},
     { imageSrc: green, text: 'Anahata “Yo Amo”, si no está equilibrado sentimos Tristeza.', backgroundColor: 'rgba(176, 242, 180, 0.7)'},
     { imageSrc: celeste, text: 'Vishuddha“ Yo Expreso”si no está equilibrado nos Mentimos.', backgroundColor: 'rgba(50, 202, 235, 0.2)'},
     { imageSrc: blue, text: 'Ajna “Yo intuyo” si no está equilibrado nos estamos negando.', backgroundColor: 'rgba(54, 139, 193, 0.5)' },
     { imageSrc: violet, text: 'Sahastrara “Yo Soy” si no está equilibrado estamos viviendo en el Control Mental', backgroundColor: 'rgba(203, 169, 205, 0.45)' },
   ];
   const [selectedChakra, setSelectedChakra] = useState(null);
   const [showText, setShowText] = useState(false);
   const [isRotating, setIsRotating] = useState(false);
   const [isOpenBook, setIsOpenBook] = useState(false);
   const handleClick = (index,event) => {
     event.stopPropagation();
     setIsRotating(index === selectedChakra ? false : true);
     setIsOpenBook(index === selectedChakra ? false : true);
     if (selectedChakra === index) {
       setSelectedChakra(null);
       setShowText(false);
     } else {
       setSelectedChakra(index);
       setShowText(true);
     }
   }
   return (
     <div className="chakra-grid" style={{ display:'flex', justifyContent:'center', margin:'5rem'}}>
       {chakrasData.map((data,index) => (
         <div key={index} onClick={(event) => handleClick(index,event)} style={{ textAlign:'center'}}>
           {(selectedChakra === null || selectedChakra === index) &&
             <img
               src={data.imageSrc}
               alt="Chakra images"
               className={selectedChakra === index && isRotating ? 'rotate' : ''}
               style={{marginLeft:'1rem', marginRight:'1rem', marginTop:'10px', width:'100px', height:'100px', boxShadow:'1px 3px 4px gray', borderRadius:'50px'}}
             />
           }
           {(selectedChakra === index) && showText &&
             <Card variant="outlined" className={isOpenBook ? 'openBook' : ''} sx={{ backgroundColor:data.backgroundColor , borderRadius:'6px' , marginTop:'6px', padding:'10px'}}>
               <CardContent>
                 <Typography sx={{ color:'#6A1B9A'}}>{data.text}</Typography>
               </CardContent>
             </Card>
           }
         </div>
       ))}
     </div>
   )
}
export default Chackra;