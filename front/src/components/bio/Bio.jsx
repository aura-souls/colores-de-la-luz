import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Avatar } from '@mui/material';
import Lourdes from "../../assets/images/lourdes.png";

export default function Bio() {
  return (
    <div style={{ height: '34.15rem', overflowY: 'auto', marginTop: '4rem' }}>
      <Grid container spacing={2} sx={{ maxWidth: 1000, margin: 'auto' }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ mt: 2, mx: 'auto', maxWidth: 300 }}>
            <Avatar alt="Lourdes Pascua" src={Lourdes} sx={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box sx={{ textAlign: 'justify', margin: 2, marginRight: '4rem', color: '#6A1B9A', marginBottom: '6rem' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ paddingTop: 2, color: '#6A1B9A' }}>
              Hola! Soy Lourdes De Pascual Grifé
            </Typography>

            <Typography variant="body2"> Profesora de danza</Typography>
            <Typography variant="body2"> Canalizadora de Registros Akáshicos</Typography>
            <Typography variant="body2">Sanadora de Luz Método Quantic Irdin</Typography>

            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', color: '#6A1B9A', mt:3}}>
              Empecé a bailar a los 3 años y a los trece años ya sabía que quería ser Profesora de Danza, a los 18 años empiezo a dar clases, mientras sigo formándome. Después de trabajar en varios sitios, en el año 2001 monto mi propio Estudio de Danza y lo cierro en el año 2020. Durante este periodo en el año 2012 empiezo a abrir mi conexión con el Alma y con la Multidimensionalidad y en el año 2014 empiezo a crear con Ana María Carulla el método Iris Meditación Bailada, un aprendizaje de conexión desde el cuerpo para soltar todo aquello que no necesitamos y nos limita y así poder conectar desde el Alma, sólo desde ese estado de conciencia podemos manifestar nuestros dones.
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', color: '#6A1B9A', fontWeight: 'bold', marginBottom: '0.5rem', mt:2 }}>
              Para obtener más información acerca de meditación bailada consulta el siguiente sitio web: <a href="https://irismeditacionbailada.com/" target="_blank" rel="noopener noreferrer">Ir a Iris Meditación Bailada</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}