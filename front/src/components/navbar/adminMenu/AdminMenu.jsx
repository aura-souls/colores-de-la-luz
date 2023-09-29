import {React} from 'react'
import Logout from '../../forms/adminArea/logout/Logout';

function AdminMenu() {

    const auth = localStorage.getItem('auth_token');
  
    return (
            auth ?  <Logout/> : <></>
    )    
}

export default AdminMenu