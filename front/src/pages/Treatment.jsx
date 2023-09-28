import {React} from 'react'
import Detail1 from '../components/cards/Detail1'
import DetailCard2 from '../components/cards/DetailCard2'
import MediaCard from '../../src/components/cards/MediaCard'
import MiH2 from '../../src/components/titulos/MiH2';

function Treatment() {
  return (
    <div> 
      
      <MiH2 color='#6A1B9A' align="center" texto="Nuestros Tratamientos"/>
      <MediaCard/>
      <MiH2 color='#6A1B9A' align="center" texto="Nuestros Tratamientos" /> 
      <Detail1/> 
      <DetailCard2/>/
    </div>
  )
}

export default Treatment