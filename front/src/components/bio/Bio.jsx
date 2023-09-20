import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, CardMedia } from '@mui/material';

export default function Bio() {
  return (
    <Card sx={{ maxWidth: 1000, height:'auto',margin:'auto', border:'navajowhite'}}>
      <Grid container spacing={12}>
        <Grid item xs={5}>
          <Box>
          <CardMedia sx ={{ mt: 10, ml:10 , borderRadius:'100%'}}
             component="img"
             height="350"
             image="/images/fotoefectos.com_.jpg"  
             alt="Lourdes Pasua"
          />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <CardContent sx={{ textAlign: 'justified'}}>
          <Box sx={{ textAlign: 'justify',margin:5, color:'#6A1B9A'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{paddingTop:10,color:'#6A1B9A'}}>

             Hola! Soy Lourdes Pascua
             </Typography>
            <Typography variant="body2"> Profesora de danza</Typography>
            <Typography variant="body2" >   Kanalizadora de Registros Akhasicos</Typography>
            <Typography variant="body2" >Sanadora de Luz Método Quantic Irdin</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', color:'#6A1B9A', mt:3}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id felis placerat, aliquet augue in, tempor odio. Aliquam tortor metus, aliquam a est vel, viverra suscipit nunc. Pellentesque a lectus a tortor euismod mollis a nec nulla. Nulla ligula ligula, egestas et tristique id, cursus id nibh. Suspendisse mollis porttitor magna, a venenatis mi. Sed eu tempus lectus, nec pulvinar nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in efficitur nibh, eleifend placerat eros.
            </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}