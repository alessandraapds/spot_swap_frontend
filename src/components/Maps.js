import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import "../styles/styles.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Maps = () => {
  const url = "http://localhost:8001/offers";
  const { data, isLoading, error } = useFetch(url);

  const position = [51.51, 7.46];
  console.log(position, "testing position");

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "400px",
        width: "400px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=yhKvuvkh3CTdOdseXa1R"
      />
      <Marker position={position}>
        <Popup>
          <div>Your IP location is roughly:</div>
          <div>Latitude: {position[0]} </div>
          <div>Longitude: {position[1]} </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
