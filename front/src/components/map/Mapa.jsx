import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


class Mapa extends Component {
  componentDidMount() {

    if (!this.map) {
      this.map = L.map('mi_mapa').setView([41.393232, 2.174023], 16);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);




      L.marker([41.393232, 2.174023])
        .addTo(this.map)
        .bindPopup("Barcelona");
        L.marker([41.393232, 2.174023])
        .addTo(this.map)
        .bindPopup("Los colores de la Luz");


      this.map.on('click', this.onMapClick);
    }
  }

  onMapClick = (e) => {
    alert("Posición: " + e.latlng);
  };


  render() {
    return (
      <div id="mi_mapa" style={{ width: '100%', height: '500px' }}></div>
    );
  }
}

export default Mapa;
