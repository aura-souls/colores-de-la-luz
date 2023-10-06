import React, { useState } from 'react'
import { TherapiesService } from '../../../../services/TherapiesService';
import { Grid, TextField, Button, Card, CardContent, InputAdornment,  Typography, Dialog, DialogTitle, DialogContent, DialogActions, createTheme, ThemeProvider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

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

function CreateTherapyForm() {
    
    const [create, setCreate] = useState({
        name: '',
        image: null,
        description: ''
    });
    const [error, setError] = useState(null);
    const [alert, setAlert] = useState(''); 
    const [openAlert, setOpenAlert] = useState(false);

    const api = TherapiesService();

    const handleOnChange = (e) => {
        e.persist();
        const { name, value, files } = e.target;

        if (name === 'image' && files.length > 0) {
            setCreate({ ...create, [name]: files[0] }); 
        } else {
            setCreate({ ...create, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', create.name);
        formData.append('image', create.image);
        formData.append('description', create.description);

        api.createTherapy(formData).then(res => {
            setAlert(res.data.msg);
            setOpenAlert(true);
            setCreate({
                name: '',
                image: null,
                description: ''
            });
        }).catch(error => {
            if (error.response && error.response.status === 422) {
                setError("Los datos no son válidos");
            } else {
                setError("Error desconocido: " + error);
            }
        });
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    return (
        <div> 
            <ThemeProvider theme={theme}>
                <Grid>
                    <Card style={{ maxWidth: 1050, padding: "20px 5px", margin: "0 auto" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" style={{ textAlign: 'center', color: '#4A148C' }}>Creación de una nueva terapia</Typography> 

                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>*** Este formulario solo está disponible para el administrador</Typography>

                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <TextField 
                                        type="text" 
                                        placeholder="Introduzca un nombre"
                                        label="Nombre de la terapida" 
                                        variant="outlined" 
                                        fullWidth 
                                        required 
                                        name='name' 
                                        onChange={handleOnChange} 
                                        value={create.name}
                                        color='inputborder'
                                        InputLabelProps={{
                                            style: { color: '#4A148C' } 
                                        }}
                                        focused/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <input 
                                            type="file" 
                                            id="image"
                                            name="image" 
                                            style={{ display: 'none', cursor: 'pointer' }}
                                            onChange={handleOnChange} 
                                        />
                                        <label htmlFor="image" style={{ width: '100%' }}>
                                            <TextField 
                                            type="text" 
                                            placeholder={create.image ? create.image.name : 'Ningún archivo seleccionado'} 
                                            label="Imagen de la terapia" 
                                            variant="outlined" 
                                            fullWidth 
                                            required 
                                            name='image' 
                                            onChange={handleOnChange} 
                                            value={create.image ? create.image.name : ''}
                                            color='inputborder'
                                            InputLabelProps={{
                                                style: { color: '#4A148C' }
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AddPhotoAlternateIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                            style={{ cursor: 'pointer' }}
                                            focused/>
                                            </label>
                                        </Grid>

                                    <Grid item xs={12}>
                                        <TextField 
                                        type="text" 
                                        placeholder="Introduzca una descripción" 
                                        label="Descripción de la terapia" 
                                        variant="outlined" 
                                        fullWidth 
                                        required 
                                        name='description' 
                                        onChange={handleOnChange} 
                                        value={create.description}
                                        color='inputborder'
                                        InputLabelProps={{
                                            style: { color: '#4A148C' } 
                                        }}
                                        focused/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="buttoncolor" fullWidth style={{ color: 'white' }}>Enviar</Button>
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

            {error && <div className="error-message">{error}</div>}
        </div>
    )
}

export default CreateTherapyForm;
