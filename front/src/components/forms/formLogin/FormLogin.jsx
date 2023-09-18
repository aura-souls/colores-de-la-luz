import React, { useState } from 'react'
import { AuthService } from '../../../services/AuthServices';

function FormLogin() {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    
    const auth = AuthService();

    const handleOnChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setLogin({...login, [name]:value})
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        auth.login(login).then(res => {
            console.log(res.data.token)
            localStorage.setItem('auth_token', res.data.token);
            alert(res.data.msg);
        }).catch(error => console.log(error));
    };

  return (
    <div>
        <h2>Login de usuario</h2>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' onChange={handleOnChange} value={login.email}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' onChange={handleOnChange} value={login.password}/>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default FormLogin