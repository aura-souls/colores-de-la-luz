import React, { useState } from 'react'
import { AuthService } from '../../../services/AuthServices';

function FormSignin() {
    
    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    });
    const auth = AuthService();

    const handleOnChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setRegister({...register, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.register(register).then(res => {
            alert(res.data.msg);
        }).catch(error => console.log(error));
    };

  return (
    <div>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' onChange={handleOnChange} value={register.name}/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' onChange={handleOnChange} value={register.email}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' onChange={handleOnChange} value={register.password}/>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default FormSignin