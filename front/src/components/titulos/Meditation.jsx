import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Meditation() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, mb: 5, color:'#4A148C' }}>
      <Typography variant="h3" align="center">
        Método de Meditación Bailada
      </Typography>
      <Typography variant="body1" align="center" >
      </Typography>
    </Box>
  );
}

export default Meditation;