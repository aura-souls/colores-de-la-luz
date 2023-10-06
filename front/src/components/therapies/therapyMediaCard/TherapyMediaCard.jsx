import React from 'react';
import { Card, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';

const theme = createTheme({
  typography: {
      h6: {
          color: '#4A148C',
          fontWeight: 1000,
          fontSize: 15,
      },
  }
})

function TherapyMediaCard({ therapy }) {
  return(
    <>
      <ThemeProvider theme={theme}>   
        <Grid item xs={9} sm={6} md={3}>
          <Card sx={{ maxWidth: 230, maxHeight: 360, backgroundColor: '#F3E5F5', padding: '1rem', margin: '1rem', borderRadius: 7 }}>
            {isURL(therapy.image) ? (
              <CardMedia
                component="img"
                sx={{ maxWidth: 200, height: 250, margin: 'auto',borderRadius: 8 }}
                image={therapy.image}
                alt={therapy.name}
              />
            ) : (
              <CardMedia
                component="img"
                sx={{ maxWidth: 200, height: 250, margin: 'auto',borderRadius: 8 }}
                image={`http://127.0.0.1:8000/storage/${therapy.image}`}
                alt={therapy.name}
              />
            )}

            <CardContent>
              <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' }}>{therapy.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </ThemeProvider>
    </>
  )
};

function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

export default TherapyMediaCard;