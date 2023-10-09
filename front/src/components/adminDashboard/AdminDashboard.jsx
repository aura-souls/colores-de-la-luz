import React, { useEffect, useState } from "react";
import { TherapiesService } from "../../services/TherapiesService";
import AdminTable from "./AdminTable";
import { Link } from 'react-router-dom';
  
function AdminDashboard() {
    const [therapies, setTherapies] = useState([]);

    useEffect(() => {
        const api = TherapiesService();

        api.getAll().then(res => {
        setTherapies(res.data);
        })
    }, []);

  return (
    <div style={{ margin: "2rem" }}>
        <Link to="/crear-una-nueva-terapia"><button>Agregar</button></Link>
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Imagen</th>  
                    <th>Descripción</th>
                    <th>Editar/Borrar</th> 
                </tr>

                {
                    therapies.map((therapy, index) => (
                        <AdminTable key={index} therapy={therapy}/>
                    ))
                }              
            </tbody>
        </table> 
    </div>
  )
}

export default AdminDashboard