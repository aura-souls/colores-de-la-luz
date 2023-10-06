import React from 'react';
import { Box, Card, CardContent, CardMedia, createTheme, Grid, ThemeProvider,Typography } from '@mui/material';

const theme = createTheme({
    typography: {
      h5: {
        color: '#4A148C',
        fontWeight: 1000,
      },
      body2: {
        color: '#6A1B9A',
      },
    }
})

function TherapyCard({ therapy }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 900, padding: '2rem 5rem', height:'auto', margin:'auto', backgroundColor: '#F3E5F5', borderRadius:5, marginBottom: '2rem' }}>
          <Grid container spacing={4}> 
              <Grid item xs={12} sm container>
                 <Grid item XS={4} sm container>
                  <Box>
                    {isURL(therapy.image) ? (
                      <CardMedia
                        component="img"
                        sx={{ height: 400, width: 280, borderRadius:20 }}
                        image={therapy.image}
                        alt={therapy.name}
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        sx={{ height: 400, width: 280, borderRadius:20 }}
                        image={`http://127.0.0.1:8000/storage/${therapy.image}`}
                        alt={therapy.name}
                      />
                    )}
                  </Box>
                </Grid>

                <Grid item xs container direction='column' spacing={2} >
                    <Grid item xs>
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>{therapy.name}</Typography>

                        <Box>
                          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', marginTop: '2rem' }}>{therapy.description}</Typography>
                        </Box>
                      </CardContent>
                    </Grid>
                 </Grid>
              </Grid>
          </Grid>
        </Card>
      </ThemeProvider>
    </>
  );
}

function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

export default TherapyCard;