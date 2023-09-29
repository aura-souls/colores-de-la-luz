import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box} from '@mui/material';
import MujerSentada from '../../assets/images/MujerPuntos.png';
import MujerPuntos from '../../assets/images/MujerSentada.png';


export default function Detail1() {
  return (
    
    <Card sx={{ maxWidth: 900 , height:'auto',margin:'auto', backgroundColor: '#F3E5F5', margingLeft:10, borderRadius:5 }}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
        <Box>
          <CardMedia sx ={{ mt:5,ml:10 , borderRadius:20}}
            component="img"
            height="400"
            image={MujerPuntos}
            alt="Mujer joven trabajando sus Chakras"
          />
        </Box>
       
        </Grid>
        <Grid item xs={8}>
          <Box>
            <CardContent sx={{ textAlign: 'center'}}>
            
                <Typography gutterBottom variant="h5" component="div"sx={{ paddingTop:10,color:'#6A1B9A'}}>
                Método de Sanación Irdin
                </Typography>
                  <Typography variant="body2"  sx={{  textAlign: 'justify',margin:10,color:'#6A1B9A'}}>
                  Irdin es el lenguaje del Universo, es el lenguaje de las Almas y  podemos trabajar con él  utilizando Mantras o con Códigos de Luz Irdin. En mi caso utilizo los Códigos de Luz,es una terapia que se suele realizar en camilla y el Sanador va poniendo los Códigos de Luz que necesite el Paciente para sanar.
                  </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box >
            <CardMedia sx ={{ mt: 5,ml:10 , borderRadius:20}}
              component="img"
              height="400"
              image={MujerSentada}
              alt= "Mujer que cuida su energía"
          />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', paddingTop:3,  color:'#6A1B9A'}}>
              Registros Akáshicos
            </Typography>
           
            <Typography variant="body2" sx={{ textAlign: 'justify',margin:10,color:'#6A1B9A'}}>
            
              Los Registros Akáshicos es la comunicación con el Alma. El canalizador recibe la información o la energía de la realidad multidimensional, Guías, Seres de Luz, Ángeles etc.
              En mi caso me suelen dar aquello que necesita la persona para evolucionar en ese momento.

            </Typography>
          </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
   
  );
}
