import {React} from 'react'
import PointsComponent from '../components/pointsOrganism/PointsComponent'
import IntroHome from '../components/introHome/IntroHome.jsx';

function Home() {
  return (
    <div style={{ minHeight: '34.15rem' }}>
      <IntroHome /> 
       
      <PointsComponent />    
    </div>
  )
}

export default Home