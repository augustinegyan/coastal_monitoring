import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix the icon paths to work with common setups
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ThinMap = () => {
  // Sample data
  const data = {
    temperature: 25.6,
    turbidity: 4.73,
    lat: 5.3467,
    lon: -0.3792,
    battery: 91.75,
    altitude: 315,
    speed: 0.318,
    gpsDatetime: "2024-05-11T18:17:11",
  };

  // Handle marker hover events
  const markerRef = React.useRef(null);

  const openPopupOnHover = () => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  };

  const closePopupOnLeave = () => {
    if (markerRef.current) {
      markerRef.current.closePopup();
    }
  };

  return (
    <div style={{ height: "300px", width: "95%", margin: "20px 0" ,marginLeft:"30px"}}> {/* Thin map styling */}
      <MapContainer
        center={[data.lat, data.lon]}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[data.lat, data.lon]}
          ref={markerRef}
          eventHandlers={{
            mouseover: openPopupOnHover,
            mouseout: closePopupOnLeave,
          }}
        >
          <Popup>
            <div style={{ fontSize: "12px", lineHeight: "1.2" }}> {/* Reduced line height */}
              <p style={{ margin: "4px 0" }}><strong>Temperature:</strong> {data.temperature}°C</p>
              <p style={{ margin: "4px 0" }}><strong>Turbidity:</strong> {data.turbidity}</p>
              <p style={{ margin: "4px 0" }}><strong>Lat:</strong> {data.lat}</p>
              <p style={{ margin: "4px 0" }}><strong>Lon:</strong> {data.lon}</p>
              <p style={{ margin: "4px 0" }}><strong>Battery:</strong> {data.battery}%</p>
              <p style={{ margin: "4px 0" }}><strong>Altitude:</strong> {data.altitude} m</p>
              <p style={{ margin: "4px 0" }}><strong>Speed:</strong> {data.speed} m/s</p>
              <p style={{ margin: "4px 0" }}><strong>Gps_datetime:</strong> {data.gpsDatetime}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ThinMap;

