import "./map.css";
import React from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer /*Marker, Popup*/ } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  const { data } = useSelector((store) => store.ipData);

  const { loading } = useSelector((store) => store.ipData);

  return !loading && data ? (
    <MapContainer
      className="map_container"
      center={[data.location.lat, data.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  ) : (
    <div className="map_container">
      <h1>Loading...</h1>
    </div>
  );
};

export default Mapa;
