import React, { useState } from 'react'
import { AuthService } from '../../../services/AuthServices';
import { Grid, TextField, Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, createTheme, ThemeProvider } from '@mui/material';
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

function FormLogin() {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [alert, setAlert] = useState(''); 
    const [openAlert, setOpenAlert] = useState(false); 
    
    const auth = AuthService();

    const handleOnChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setLogin({...login, [name]:value})
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        auth.login(login).then(res => {
            localStorage.setItem('auth_token', res.data.token);
            setAlert(res.data.msg);
            setOpenAlert(true);
            setLogin({
                name: '',
                email: '',
                password: ''
            });
        }).catch(error => console.log(error));
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

  return (
    <div>
        <ThemeProvider theme={theme}>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" style={{ textAlign: 'center', color: '#4A148C' }}>ACCESO DE USUARIO</Typography> 

                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>*** Este formulario solo está disponible para el administrador</Typography>

                        <form onSubmit={handleOnSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField 
                                    type="email" 
                                    placeholder="Introduzca un email" 
                                    label="Correo Electrónico" 
                                    variant="outlined" 
                                    fullWidth 
                                    required 
                                    name='email' 
                                    onChange={handleOnChange} 
                                    value={login.email} 
                                    color='inputborder'
                                    InputLabelProps={{
                                        style: { color: '#4A148C' } 
                                    }}/>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextField 
                                    type="password" 
                                    placeholder="Introduzca una contraseña" 
                                    label="Contraseña" 
                                    variant="outlined" 
                                    fullWidth 
                                    required 
                                    name='password' 
                                    onChange={handleOnChange} 
                                    value={login.password}
                                    color='inputborder'
                                    InputLabelProps={{
                                        style: { color: '#4A148C' } 
                                    }}/>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="buttoncolor" fullWidth style={{ color: 'white' }}>Iniciar Sesión</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
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

export default FormLogin