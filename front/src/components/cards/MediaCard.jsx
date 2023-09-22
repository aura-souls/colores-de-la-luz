import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MujerSentada from '../../assets/images/MujerSentada';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300,height: 650, backgroundColor: '#F3E5F5', paddingTop:10 }}>
      <CardMedia
        sx={{ maxWidth: 250,height: 400, margin:'auto', }}
        image={MujerSentada}
        title="Mujer joven meditando, chakras y cuerpo"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', paddingBottom: 20}}>
          Meditación
        </Typography>
        <Typography  component="div" style={{ textAlign: 'center',fontWeight: 'bold', fontSize: '1.5rem'}}>
         50€
        </Typography>
      </CardContent>
  
    </Card>
  );
}