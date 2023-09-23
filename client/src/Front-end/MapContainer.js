import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../css/style.css'; 

const MapContainer = () => {
  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  const defaultCenter = {
    lat: 16.004270,
    lng: 108.220697
  };

  return (
    <div id="mapContainer"> {/* Apply the styling to a div wrapper */}
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {/* Add other components like markers or info windows as needed */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
