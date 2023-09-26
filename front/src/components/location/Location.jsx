import {React} from 'react'
import AlnouartLocation from '../../assets/images/location/alnouart-location.jpg'

function Location() {
  return (
    <div>
        <div>
            <div>
                <h4>Dirección:</h4>
                <h5>ALNOUART</h5>
                <p>Carrer de Berga 36</p>
                <p>C.P. 08012</p>
                <p>Barcelona</p>
            </div>

            <div>
                <h4>Horarios:</h4>
                <h5>Lunes a viernes</h5><span> de 8:00 a 18:00</span>
                <h5>Sábados de</h5><span> de 9:00 a 14:00</span>
                <h5>Domingos cerrados</h5>
            </div>

        </div>
        <div>
            <h4>Localización:</h4>
            <img src={AlnouartLocation} alt='Localización de Alnouart'/>
        </div>
    </div>
  )
}

export default Location