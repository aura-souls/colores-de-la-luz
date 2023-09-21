import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Avatar } from '@mui/material';
import  FotoLourdes from  "../../assets/images/fotoLourdes.jpg";

export default function Bio() {
  return (
    <Grid container spacing={12} sx={{ maxWidth: 1000, margin:'auto'}}>
      <Grid item xs={4}>
        <Box sx={{ mt: 10, mr:25 }}>
          <Avatar alt="Lourdes Pascua" src={FotoLourdes} sx={{ width: 300, height: 300 }} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ textAlign: 'justify',margin:5, color:'#6A1B9A', overflow: 'auto', maxHeight: 350 , mr:20}}>
          <Typography gutterBottom variant="h5" component="div" sx={{paddingTop:10,color:'#6A1B9A'}}>
            Hola! Soy Lourdes Pascua
          </Typography>
          <Typography variant="body2"> Profesora de danza</Typography>
          <Typography variant="body2" > Kanalizadora de Registros Akhasicos</Typography>
          <Typography variant="body2" >Sanadora de Luz Método Quantic Irdin</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', color:'#6A1B9A', mt:3}}>
            Desde temprana edad, mi pasión por la danza se manifestó a los tres años, y a los trece años ya tenía claro mi objetivo: convertirme en Profesora de Danza. A los 18 años, comencé a compartir mis conocimientos al impartir clases, mientras continuaba mi formación en el mundo de la danza. A lo largo de mi carrera, he tenido la oportunidad de trabajar en diversos contextos y, en el año 2001, di un paso importante al fundar mi propio Estudio de Danza.
            <Box component="br" />
            Durante mi trayectoria, experimenté un profundo crecimiento personal. En el año 2012, inicié un viaje hacia la conexión con mi ser interior y la exploración de la multidimensionalidad. Esta experiencia transformadora me llevó a colaborar con Ana María Carulla en la creación del método "Iris Meditación Bailada" en 2014. Este método representa un enfoque de aprendizaje que parte desde el cuerpo, permitiéndonos liberar lo que ya no necesitamos y que nos limita. A través de esta liberación, logramos conectar con nuestro ser más profundo, nuestro alma. Entiendo que es solo desde este estado de conciencia que podemos manifestar plenamente nuestros dones y potencial.
            <Box component="br" />
            Mi viaje en el mundo de la danza y la conexión con el alma me ha permitido adquirir una perspectiva única y enriquecedora que aplico en mi enseñanza y en el desarrollo del método "Iris Meditación Bailada". Estoy comprometida con ayudar a otros a descubrir su propio potencial y a conectar con su verdadera esencia a través de la danza y la conciencia corporal.
            <Box component="br" />
            A lo largo de los años, he acumulado una amplia experiencia y conocimiento en el mundo de la danza y el desarrollo personal. Estoy emocionada de seguir compartiendo mi pasión y mi visión con otros y de contribuir al crecimiento y la transformación de quienes buscan conectar con su alma a través de la danza.                                            
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
