"use client";

import "./css.css"
import React, { useState } from 'react';
// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


export default function Home() {

  const[markers, setMarkers] = useState([[-30.67, -51.15], [-25.67, -51.15], [-20.67, -51.15], [-15.67, -51.15]])

  return (
    <div>
      <MapContainer
      preferCanvas={true}
      center={[-16.93, -48.77]}
      zoom={4}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "600px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        markers.map((marker, index) => {
          return <Marker position={marker} key={index}>
            <Popup>
              {`Texto bacana ${index+1}`}
            </Popup>
          </Marker>
        })
      }
    </MapContainer>
    </div>
  );
}


