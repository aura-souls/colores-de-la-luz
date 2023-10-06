import React, { useEffect, useState } from 'react'
import { TherapiesService } from '../../services/TherapiesService'
import TherapyCard from './therapyCard/TherapyCard';
import TherapyTitle from './therapyTitle/TherapyTitle';
import TherapyMediaCard from './therapyMediaCard/TherapyMediaCard'
import { Grid } from '@mui/material';

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
      <TherapyTitle color='#6A1B9A' align="center" texto="Nuestras Terapias"/>

      <Grid container  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', flexDirection: 'row' }}>
        {
          therapies.map((therapy, index) => (
            <TherapyMediaCard key={index} therapy={therapy}/>
          ))
        }
      </Grid>
      
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