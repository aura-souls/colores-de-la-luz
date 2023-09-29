import * as React from 'react';
import { Box, Avatar, Pagination } from '@mui/material';
import  FotoLourdes from  "../../assets/images/LourdesPascua.jpg";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';



const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

export default function Bio(){
  
  return (
    <Grid container spacing={12} sx={{ maxWidth: 1200, margin:'auto'}}>
      <Grid item xs={4}>
        <Box sx={{ mt: 10, mr:25 }}>
          <Avatar alt="Lourdes Pascua" src={FotoLourdes} sx={{ width: 300, height: 300 }} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ textAlign: 'justify',margin:5, maxHeight: 350 , mr:20, color:'#6A1B9A'}}>
          <Typography gutterBottom variant="h5" component="div" sx={{ mb:5}}>
            Hola! Soy Lourdes Pascual
          </Typography>
          <Typography variant="body2"> Profesora de danza</Typography>
          <Typography variant="body2" > Kanalizadora de Registros Akhasicos</Typography>
          <Typography variant="body2" >Sanadora de Luz Método Quantic Irdin</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', color:'#6A1B9A', mt:3}}>
          Empecé a bailar a los 3 años y a los trece años ya sabía que quería ser Profesora de Danza, a los 18 años empiezo a dar clases, mientras sigo formándome. Después de trabajar en varios sitios, en el año 2001monto mi propio Estudio de Danza y
          lo cierro en el año 2020. Durante este periodo en el año 2012  empiezo abrir mi conexión con el Alma y con la  Multidimensionalidad y en el año 2014 empiezo a crear con Ana María Carulla el método Iris Meditación Bailada, un aprendizaje de conexión desde el cuerpo para soltar todo aquello que no necesitamos  y nos limita y así poder conectar desde el Alma, sólo desde ese estado de conciencia podemos manifestar nuestros dones.
          </Typography>
          
        </Box>
      </Grid>
    </Grid>
  );
  } 