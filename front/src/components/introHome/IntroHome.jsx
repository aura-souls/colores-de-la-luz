import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './intro-home.css';

function IntroHome() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, mb: 3, color:'#4A148C' }}>
      <Typography variant="h3" align="center" mb="1.50rem" ml="1.7rem" mr="1.7rem" >
        Los colores de la luz
      </Typography>
      <Typography variant="body1" align="center"mt="2rem" mb="1.50rem" ml="1.7rem" mr="1.7rem" >
        En el Cuerpo Humano, tienes unos centros energéticos,{<br />} llamados chakras  donde es importantísimo mantenerlos en armonía ya que si están bloqueados nuestra vida también lo estará.{<br />}
        Cada centro de energía tiene un color y un poder. Empieza todo en el chakra rojo posicionado en el sacro y acaba en el violeta posicionado en la cabeza.
      </Typography>
    </Box>
  );
}

export default IntroHome;

