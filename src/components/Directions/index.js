import React from 'react';
import MapViewDirections from 'react-native-maps-directions'


const Directions = ({ destination, origin, onReady }) =>
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyC4ERcqE375LAdVM8TRAMUuDE33sbYB6jI"
        strokeWitdh={3}
        strokeColor="#222"
    />;

export default Directions;
