import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TherapyTitle() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6, mb: 3, color:'#4A148C' }}>
      <Typography variant="h3" align="center">
        Nuestras terapias
      </Typography>
      <Typography variant="body1" align="center" >
      </Typography>
    </Box>
  );
}

export default TherapyTitle;