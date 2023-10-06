// import {React} from 'react'
// import Detail1 from '../components/cards/Detail1'
// import DetailCard2 from '../components/cards/DetailCard2'
// import MediaCard from '../components/cards/MediaCard'
// import MiH2 from '../components/titulos/TherapyTitle';
// import Meditation from '../components/titulos/Meditation';

// function Therapy() {
//   return (
//     <div>      
//       <MiH2 color='#6A1B9A' align="center" texto="Nuestras Terapias"/>
//       <MediaCard/>
//       <MiH2 color='#6A1B9A' align="center" texto="Nuestras Terapias" /> 
//       <Detail1/> 
//       <Meditation />
//       <DetailCard2/>
//     </div>
//   )
// }

// export default Therapy

import React, { useEffect, useState } from 'react'
import { TherapiesService } from '../services/TherapiesService'
import Therapy from '../components/therapies/Therapy';

function Therapies() {

  const [therapies, setTherapies] = useState([]);

  useEffect(() => {
    const api = TherapiesService();
    api.getAll().then(res => {
      setTherapies(res.data);
    })
  }, []);
   
  return (
    <>
      {
        therapies.map((therapy, index) => (
          <Therapy key={index} therapy={therapy}/>
        ))
      }
    </>
  )
}

export default Therapies