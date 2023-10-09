import React from 'react'; 
import { Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import Mapa from '../map/Mapa';

const theme = createTheme({
    typography: {
        h6: {
            color: '#AB47BC',
            fontWeight: 700,
            fontFamily: 'poppins',
        },
        body2: {
            color: '#4A148C',
        },
        body3: {
            color: '#4A148C',
            fontWeight: 600,
            fontFamily: 'poppins',
            margin: '0 0 0 1rem',
        },
    },
});

function Location() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '70%', padding: '5rem 2rem', margin: '0 auto' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction='column' spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant='h6' component='div'>
                                        Dirección:
                                    </Typography>
                                    <Typography variant='body2' gutterBottom sx={{ margin: '0 1rem' }}>
                                        Carrer de Berga 36
                                    </Typography>
                                    <Typography variant='body2' gutterBottom sx={{ margin: '0 1rem' }}>
                                        C.P. 08012
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' sx={{ margin: '0 1rem', color: '4A148C' }}>
                                        Barcelona
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography gutterBottom variant='h6' component='div'>
                                        Horarios:
                                    </Typography>
                                    <div>
                                        <Typography variant='body3' gutterBottom>
                                            Lunes a viernes
                                        </Typography>
                                        <Typography component='span' variant='body2'>
                                            {' '}
                                            de 8:00 a 18:00
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant='body3' gutterBottom>
                                            Sábados
                                        </Typography>
                                        <Typography component='span' variant='body2'>
                                            {' '}
                                            de 9:00 a 14:00
                                        </Typography>
                                    </div>
                                    <Typography variant='body3'>Domingos cerrados</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm container>
                            <Grid item xs>
                                <Typography gutterBottom variant='h6' component='div' textAlign='center'>
                                    Localización:
                                </Typography>
                            </Grid>
                            <Mapa />
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default Location;
