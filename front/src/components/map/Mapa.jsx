import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';

class Mapa extends Component {
  componentDidMount() {
    if (!this.map) {
      this.map = L.map('mi_mapa').setView([41.4012643293816, 2.1527705803832116], 16);
      
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      
      const iconMarkup = renderToStaticMarkup(<LocationOnIcon style={{ fontSize: '48px', color: 'red' }} />);
      const customIcon = divIcon({
        html: iconMarkup,
        className: 'my-icon' // Añade tu propia clase aquí
      });
      
      L.marker([41.4012643293816, 2.1527705803832116], {icon: customIcon})
        .addTo(this.map)
        .bindPopup("Iris Meditación Bailada");
      
      this.map.on('click', this.onMapClick);
    }
  }
  
  onMapClick = (e) => {
    alert("Posición: " + e.latlng);
  };
  
  render() {
    return (
      <div id="mi_mapa" style={{ width: '100%', height: '300px', zIndex:0}}></div>
    );
  }
}

export default Mapa;