import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import MujerSentada from '../../assets/images/MujerSentada.png';
import MujerPuntos from '../../assets/images/MujerPuntos.png';
import MujerSol from '../../assets/images/MujerSol.png';

const MediaCard = ({ image, title }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 230, height:380, backgroundColor: '#F3E5F5', paddingTop: 1 ,marginBottom:14,marginTop:1,marginLeft:4.99, borderRadius:7}}>
      <CardMedia
        sx={{ maxWidth: 200, height: 250, margin: 'auto',borderRadius:8, mt:1, mb:2.1 }}
        title={title}
        image={image}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center', paddingBottom:20,color:'#6A1B9A' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default function App() {
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <MediaCard image={MujerSentada} title="Registros Akashicos" />
      <MediaCard image={MujerPuntos} title="Meditación Bailada" />
      <MediaCard image={MujerSol}  title="Método Sanación Irdin"/>
    </Grid>
  );
}
