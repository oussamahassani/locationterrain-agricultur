import React, { Component } from "react";
import Leaflet from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const initialState = {
  zoom: 10,
  updated: false
};


export default class MapDisplay extends Component {
  render() {
    if (this.props.lat) {
      const position = [this.props.lon,this.props.lat];
      return (
        <Map
          center={position}
          zoom={initialState.zoom}
          style={{ height: "400px" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
       
          <Popup>
      <h2 className="leaflet-popup-title">"teiel"</h2>

      <img src="iimg" className="leaflet-popup__image" />

      <p>description</p>

      <a href="" target="_blank">
        Website
      </a>
    </Popup>
    </Marker>
        </Map>
      );
    } else {
      return <h4>Loading Map. Please wait.</h4>;
    }
  }
}
