import axios from "axios";
import React, { useState } from 'react';
import { TherapiesService } from '../../../../services/TherapiesService';

function CreateTherapyForm() {
    
    const [create, setCreate] = useState({
        name: '',
        image: null,
        description: ''
    });
    const [error, setError] = useState(null);

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

    return (
        <div> 
            <h5>Creación de una nueva terapia</h5> 

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Nombre de la terapia</label>
                    <input type="text" name='name' onChange={handleOnChange} value={create.name}/>
                </div>
                <div>
                    <label htmlFor='image'>Imagen de la terapia</label>
                    <input type="file" name='image' onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor='description'>Descripción de la terapia</label>
                    <input type="text" name='description' onChange={handleOnChange} value={create.description}/>
                </div>
                <button type='submit'>Enviar</button>
            </form>

            {error && <div className="error-message">{error}</div>}
        </div>
    )
}

export default CreateTherapyForm;
