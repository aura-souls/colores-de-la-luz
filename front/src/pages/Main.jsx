import React from 'react'
import FormSignin from '../components/forms/formSignin/FormSignin'
import FormLogin from '../components/forms/formLogin/FormLogin'
import { AuthService } from '../services/AuthServices'

function Main() {

  const auth = AuthService();

  const handleLogout = (e) =>{
    e.preventDefault();

    auth.logout().then(res => {
      localStorage.removeItem('auth_token');
      alert(res.data.msg);
    }).catch(error => console.log(error));
}
  
  return (
    <div>
        <FormSignin/>
        <FormLogin/>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Main