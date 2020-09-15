import React, { Component } from "react";
import Leaflet from "leaflet";
import Axios from 'axios';
import{URL} from '../../api/Url'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import'react-leaflet-markercluster/dist/styles.min.css'; // inside .js file
import MarkerClusterGroup from "react-leaflet-markercluster";
Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const initialState = {
  zoom: 6,
  updated: false
};


export default class MapDisplay extends Component {
  state = {
    altitude:[9.6344,9.643,9.652],
    longitude:[34.10,34.20,34.11],
    titre : []

  }
componentDidMount(){
  Axios.get(URL+"app/allannonce")
  .then  ( res =>  {
    console.log(res.data);
  this.setState({altitude :[...this.state.altitude ,...res.data.map(el => el.altitude)],
     longitude  : [...this.state.longitude,...res.data.map(el => el.longitude)],
    titre : res.data.map(el => el.typelocation) })})
  .catch( err => console.log(err))
}
//   groupmarker () {
//     for (let i = 0 ; i < this.state.altitude.length ; i++)
    
//       <Marker position={[this.state.longitude[i],this.state.altitude[i]]} > <Popup>
//       <h2 className="leaflet-popup-title"> {i}</h2>
// </Popup></Marker>
    
//   }
  render() {
    
      const position = [ 34.0 , 10.0];
      return (
        <>
            <h3 className="title-container">Nos Annonces</h3>
        <Map
          center={position}
          zoom={initialState.zoom}
          style={{ height: "400px" }}
          className="markercluster-map"
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
        

<MarkerClusterGroup > 
  { this.state.longitude.map((el,i) => 

    
  <Marker position={[this.state.longitude[i],this.state.altitude[i]]} > <Popup>
  <h2 className="leaflet-popup-title">{this.state.titre[i]}</h2>
</Popup></Marker>
  )
}
  
  
  {/* <Marker position={[35.808818, 10.601525]} > <Popup>
      <h2 className="leaflet-popup-title">titre1</h2>
</Popup></Marker>
  <Marker position={[35.828829, 10.642025]} ><Popup>
      <h2 className="leaflet-popup-title">titre2</h2>
</Popup></Marker>
  <Marker position={[35.828820, 10.643110]} ><Popup>
      <h2 className="leaflet-popup-title">titre3</h2>
</Popup></Marker> */}
 </MarkerClusterGroup> 
    
  
        </Map>
        </>
      );
    
    
  }
}
