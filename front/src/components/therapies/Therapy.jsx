import React, { useEffect, useState } from 'react'
import { TherapiesService } from '../../services/TherapiesService'
import TherapyCard from './therapyCard/TherapyCard';
import TherapyTitle from './therapyTitle/TherapyTitle';

function Therapy() {

  const [therapies, setTherapies] = useState([]);

  useEffect(() => {
    const api = TherapiesService();
    api.getAll().then(res => {
      setTherapies(res.data);
    })
  }, []);
   
  return (
    <div>
      <TherapyTitle color='#6A1B9A' align="center" texto="Terapias"/>
      
      <div style={{ margin: '0 2rem'}}>
        {
          therapies.map((therapy, index) => (
            <TherapyCard key={index} therapy={therapy}/>
          ))
        }
      </div>
    </div>
  )
}

export default Therapy