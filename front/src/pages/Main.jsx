import React, { useState } from 'react'
import FormSignin from '../components/forms/formSignin/FormSignin'
import FormLogin from '../components/forms/formLogin/FormLogin'
import { AuthService } from '../services/AuthServices'
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

function Main() {

  const [alert, setAlert] = useState(''); 
  const [openAlert, setOpenAlert] = useState(false); 

  const auth = AuthService();

  const handleLogout = (e) =>{
    e.preventDefault();

    auth.logout().then(res => {
      localStorage.removeItem('auth_token');
      setAlert(res.data.msg);
      setOpenAlert(true);
    }).catch(error => console.log(error));
  }

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };
  
  return (
    <div>
        <FormSignin/>
        <FormLogin/>

        <ThemeProvider theme={theme}>
          <Grid item xs={12} style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
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

export default Main