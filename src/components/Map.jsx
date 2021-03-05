import React from 'react';
import{ GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = ({ data }) => {

    const mapContainerStyle = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: data.latitude,
        lng: data.longitude
    }

    const API_KEY = 'AIzaSyCki8TQYrAw2s4XfSBLUHgb3Zr3Vu-hib0';

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={17}
                center={defaultCenter}>

                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;