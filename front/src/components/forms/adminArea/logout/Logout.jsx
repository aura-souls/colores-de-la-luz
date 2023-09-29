import React, { useEffect, useState } from 'react'
import { AuthService } from '../../../../services/AuthServices';
import { Grid, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, createTheme, ThemeProvider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const theme = createTheme({
    palette: {
        inputborder: {
            main: '#4A148C',
        },
        buttoncolor: {
            main: '#512872',
        },
    }
}) 

function Logout() {

  const [alert, setAlert] = useState(''); 
  const [openAlert, setOpenAlert] = useState(false); 
  const [redirectToAdminProfile, setRedirectToAdminProfile] = useState(false);

  const auth = AuthService();

  useEffect(() => {
    if (!openAlert && !localStorage.getItem('auth_token')) {
        window.location.reload(false);
    }
  }, [openAlert]); 

  const handleLogout = (e) =>{
    e.preventDefault();

    auth.logout().then(res => {
      localStorage.removeItem('auth_token');
      setAlert(res.data.msg);
      setOpenAlert(true);
      setTimeout(() => {
        window.location.reload(false);
      }, 4000);
    }).catch(error => console.log(error));
  }

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  
  return (
    <div>
        <ThemeProvider theme={theme}>
          <Grid item xs={12} style={{ maxWidth: 200, padding: "20px 5px", margin: "0 auto" }}>
            <Button type="submit" variant="contained" color="buttoncolor" fullWidth style={{ color: 'white' }} onClick={handleLogout}>Cerrar Sesión</Button>
          </Grid>

          <Dialog open={openAlert} onClose={handleCloseAlert} > 
                <DialogContent>
                    <DialogTitle style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircleOutlineIcon color='success' style={{ marginRight: '0.2rem' }}/>Logrado</DialogTitle>
                    <Typography variant="body1">{alert}</Typography>
                </DialogContent>

                    <DialogActions>
                        <Button onClick={handleCloseAlert} color="primary" autoFocus>OK</Button>
                    </DialogActions>
            </Dialog>
        </ThemeProvider>   
    </div>
  )
}

export default Logout