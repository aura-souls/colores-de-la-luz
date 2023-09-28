import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, CardMedia } from '@mui/material';
import MujerSol from '../../assets/images/MujerSol.png';

export default function DetailCard2() {
  return (
    <Card sx={{ maxWidth: 900, height:'auto',margin:'auto', backgroundColor: '#F3E5F5', borderRadius:5, color:''}}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Box>
          <CardMedia sx ={{ mt: 10, ml:10 , borderRadius:20}}
             component="img"
             height="400"
             image={MujerSol}  
             alt="Mujer meditando, fondo abstracto"
          />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{ textAlign: 'center'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{paddingTop:10,color:'#6A1B9A'}}>
             Método de Meditación Bailada, IRIS
            </Typography>
            <Box>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify',margin:10, color:'#6A1B9A'}}>
            IRIS,  es un método de meditación bailada que facilita la apertura mental, emocional y espiritual de cada persona a fin de liberar y sanar las diversas memorias contenidas en su cuerpo.

Su propsito principal es que cada alumno consiga transitar por el camino de vida dispuesto por su corazón.
           
            </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
