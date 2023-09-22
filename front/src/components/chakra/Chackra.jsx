import Grid from '@mui/material/Grid';
import React from 'react';
import blueChackra from './assets/imges/blue-chackra.svg'



function Chackra() {
  return (
    <div>
      <Grid container spacing={2}>
  <Grid item xs={2}>
    <img src={blueChackra} alt="Descripción de la imagen 1" />
  </Grid>
  <Grid item xs={2}>
    <img src="assets/imges/foto2.svg" alt="Descripción de la imagen 2" />
  </Grid>
  <Grid item xs={2}>
    <img src="assets/imges/foto3.svg" alt="Descripción de la imagen 3" />
  </Grid>
  <Grid item xs={2}>
    <img src="assets/imges/foto4.svg" alt="Descripción de la imagen 4" />
  </Grid>
  <Grid item xs={2}>
    <img src="assets/imges/foto5.svg" alt="Descripción de la imagen 5" />
  </Grid>
  <Grid item xs={2}>
    <img src="assets/imges/foto6.svg" alt="Descripción de la imagen 6" />
  </Grid>
  <Grid item xs={2}>
    <img src="assets/imges/foto7.svg" alt="Descripción de la imagen 7" />
  </Grid>
</Grid>

    </div>
  )
}

export default Chackra


