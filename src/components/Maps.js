import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "../styles/styles.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const Maps = ({ street, city }) => {
  // const url = "http://localhost:8001/offers";
  // const { data, isLoading, error } = useFetch(url);

  // GOOGLE
  // const mapKey = "AIzaSyDRxfE-q9azOnKk9_qV-B0o_EZ8TUBFTa8";
  // const mapUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${mapKey}`;

  // MapQuest
  const mapKey = "RJBWULAYj6sU6ou3OYcjRj0pIK7911NN";
  const mapUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${street}+${city}`;

  const [mapData, setMapData] = useState([]);
  const [mapError, setMapError] = useState(null);
  const [mapIsLoading, setMapIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(mapUrl)
        .then((response) => response.json())
        .then((mapData) => setMapData(mapData.results))
        .catch(() => setMapError("We couldn't retrieve any data"))
        .finally(() => setMapIsLoading(false));
    };

    fetchData();
  }, [mapUrl]);

  // const position = []

  return (
    <div>
      {mapIsLoading ? (
        <p>Loading location...</p>
      ) : (
        <div>
          <MapContainer
            center={[
              mapData[0].locations[0].latLng.lat,
              mapData[0].locations[0].latLng.lng,
            ]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                mapData[0].locations[0].latLng.lat,
                mapData[0].locations[0].latLng.lng,
              ]}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        // <div>
        //   <div>Latitude: {mapData[0].locations[0].latLng.lat} </div>
        //   <div>Longitude: {mapData[0].locations[0].latLng.lng} </div>
        // </div>
      )}
    </div>
  );
};

export default Maps;
