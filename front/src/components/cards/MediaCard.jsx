import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import MujerSentada from '../../assets/images/MujerSentada.png';
import MujerPuntos from '../../assets/images/MujerPuntos.png';
import MujerSol from '../../assets/images/MujerSol.png';

const MediaCard = ({ image, title }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ maxWidth: 300, height: 500, backgroundColor: '#F3E5F5', paddingTop: 10 ,marginBottom:30,marginTop:10,marginLeft:4.99, borderRadius:5}}>
      <CardMedia
        sx={{ maxWidth: 250, height: 400, margin: 'auto',borderRadius:15 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', paddingBottom:20,color:'#6A1B9A' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default function App() {
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <MediaCard image={MujerSentada} title="Mujer Sentada" />
      <MediaCard image={MujerPuntos} title="Mujer Puntos" />
      <MediaCard image={MujerSol} title="Mujer Sol" />
    </Grid>
  );
}
