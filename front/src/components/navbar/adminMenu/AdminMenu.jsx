import {React} from 'react'
import Logout from '../../forms/adminArea/logout/Logout';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function AdminMenu() {

    const auth = localStorage.getItem('auth_token');
  
    return (
            auth ? 
            <> 
            <Link to="/registro-privado" style={{ textDecoration: 'none' }}>
                <Button sx={{ my: 2, color: 'black', display: 'block', paddingRight: '16px' }}>Registro</Button>
            </Link> 
            <Link to="/perfil-del-administrador" style={{ textDecoration: 'none' }}>
                <Button sx={{ my: 2, color: 'black', display: 'block', paddingRight: '16px' }}>Area del Administrador</Button>
            </Link> 
            <Logout/>
            </>  : <></>
    )    
}

export default AdminMenu