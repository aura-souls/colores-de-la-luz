import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, CardMedia } from '@mui/material';

export default function DetailCard2() {
  return (
    <Card sx={{ maxWidth: 900, height:'auto',margin:'auto', backgroundColor: '#F3E5F5', borderRadius:5}}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Box sx ={{mt:15 ,ml:10 , borderRadius:20}}>
          <CardMedia
             component="img"
             height="400"
           
             image="/images/mujer-meditando-fondo-abstracto-tiro-completo 1.png"
             
             alt="Mujer meditando, fondo abstracto"
          />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{ textAlign: 'center'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{ paddingTop:5}}>
              Servicio
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify',margin:5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id felis placerat, aliquet augue in, tempor odio. Aliquam tortor metus, aliquam a est vel, viverra suscipit nunc. Pellentesque a lectus a tortor euismod mollis a nec nulla. Nulla ligula ligula, egestas et tristique id, cursus id nibh. Suspendisse mollis porttitor magna, a venenatis mi. Sed eu tempus lectus, nec pulvinar nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in efficitur nibh, eleifend placerat eros. Etiam id diam ullamcorper, euismod risus quis, placerat lectus. Cras ac sodales sem. Proin eros erat, congue vitae eros at, viverra pellentesque justo. Phasellus velit leo, auctor sed sagittis sit amet, tempus ac nibh.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id felis placerat, aliquet augue in, tempor odio. Aliquam tortor metus, aliquam a est vel, viverra suscipit nunc. Pellentesque a lectus a tortor euismod mollis a nec nulla. Nulla ligula ligula, egestas et tristique id, cursus id nibh. Suspendisse mollis porttitor magna, a venenatis mi. Sed eu tempus lectus, nec pulvinar nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in efficitur nibh, eleifend placerat eros. Etiam id diam ullamcorper, euismod risus quis, placerat lectus. Cras ac sodales sem. Proin eros erat, congue vitae eros at, viverra pellentesque justo. Phasellus velit leo, auctor sed sagittis sit amet, tempus ac nibh.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
