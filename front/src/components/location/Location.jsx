import {React} from 'react'
import AlnouartLocation from '../../assets/images/location/alnouart-location.jpg'
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const theme = createTheme({
    typography: {
        h6: {
            color: '#4A148C',
            fontWeight: 1000,
        },
        body2: {
            color: '#4A148C',
        },
        body3: {
            color: '#4A148C',
            fontWeight: 700,
            margin: '0 0 0 1rem'
        },
    }
}) 

function Location() {
  return (
    <div>
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '70%', padding: '5rem 2rem', margin: '0 auto' }}>
                <Grid container spacing={2}>   
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column' spacing={2} >
                            <Grid item xs>
                                <Typography gutterBottom variant='h6' component='div'>Dirección:</Typography>

                                <Typography variant='body2' gutterBottom style={{ margin: '0 1rem' }}>Carrer de Berga 36</Typography>

                                <Typography variant='body2' gutterBottom style={{ margin: '0 1rem' }}>C.P. 08012</Typography>

                                <Typography variant='body2' color='text.secondary' style={{ margin: '0 1rem' }}>Barcelona</Typography>
                            </Grid>

                            <Grid item xs>
                                <Typography gutterBottom variant='h6' component='div'>Horarios:</Typography>
                                
                                <div>
                                    <Typography variant='body3' gutterBottom>Lunes a viernes </Typography>
                                    <Typography component='span' variant='body2'> de 13:00 a 20:00</Typography>
                                </div>
                                
                                
                                <div>
                                    <Typography variant='body3' gutterBottom>Sábados</Typography>
                                    <Typography component='span' variant='body2'> de 10:00 a 14:00</Typography>
                                </div>

                                <Typography variant='body3'>Domingos cerrados</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={6} sm container>
                        <Grid item xs>
                            <Typography gutterBottom variant='h6' component='div' textAlign='center'>Localización:</Typography>
                        </Grid>
                        
                        <Img src={AlnouartLocation} alt='Localización de Alnouart' style={{ borderRadius: '1rem', border: '0.1rem solid rgba(74, 20, 140, 0.3' }}/>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    </div>
  )
}

export default Location