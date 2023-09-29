import {React} from 'react'
import PointsComponent from '../components/pointsOrganism/PointsComponent'
import IntroHome from '../components/introHome/IntroHome.jsx';

function Home() {
  return (
    <div>
      <IntroHome /> 
       
      <PointsComponent />    
    </div>
  )
}

export default Home