// import { Card, CardContent } from '@mui/material';
// import Typography from '@mui/material/Typography';
// const Chackra = () => {
//   const chakrasData = [
//     { imageSrc: indigo, text: '“Yo Soy” si no está equilibrado estamos viviendo en el Control Mental', background: 'indigo'  },
//   ];
//   const [selectedChakra, setSelectedChakra] = useState(null);
//   const [showText, setShowText] = useState(false);
//   const handleClick = (index, color) => {
//     if (selectedChakra === index) {
//       document.body.style.backgroundColor = ''; // color predeterminado
//       setSelectedChakra(null);
//       setShowText(false);
//     } else {
//       document.body.style.backgroundColor = color;
//       setSelectedChakra(index);
//       setShowText(true);
//     }
//   }
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
//       {chakrasData.map((data, index) => (
//         <div key={index} onClick={() => handleClick(index, data.backgroundColor)} style={{ textAlign: 'center', objectFit: 'contain', objectPosition: 'center' }}>
//           {(selectedChakra === null || selectedChakra === index) && <img src={data.imageSrc} alt="Chakra image" />}
//           {(selectedChakra === null || selectedChakra === index) && showText &&
//             <Card variant="outlined" sx={{
//               backgroundImage: '-webkit-radial-gradient(rgb(202, 91, 185), rgb(255, 193, 246))',
//               background: 'radial-gradient(rgb(202, 91, 185), rgb(255, 193, 246))',
//               backgroundColor: data.backgroundColor,
//             }}>
//               <CardContent>
//                 <Typography>{data.text}</Typography>
//               </CardContent>
//             </Card>
//           }
//         </div>
//       ))}
//     </div>
//   )
// }
// export default Chackra; 