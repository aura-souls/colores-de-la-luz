import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function IntroHome() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, mb: 3,}}>
      <Typography variant="h3" align="center">
        Colores de la luz
      </Typography>
      <Typography variant="body1" align="center">
        En el Cuerpo Humano, tienes unos centros energéticos,{<br />} llamados chakras  donde es importantísimo mantenerlos en armonía ya que si están bloqueados nuestra vida también lo estará.{<br />}
        Cada centro de energía tiene un color y un poder.
      </Typography>
    </Box>
  );
}

export default IntroHome;


