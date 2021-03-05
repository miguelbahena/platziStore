import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    //const API_KEY = 'AIzaSyCki8TQYrAw2s4XfSBLUHgb3Zr3Vu-hib0';
    //const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

    const API_KEY = 'fba68147230b831bde0d6ad403e8f640';
    const API =`http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address}&limit=1`;

    useEffect(async () => {
        const response = await axios(API);
        //console.log(response.data.results[0].geometry.location);

        console.log(response.data.data[0].latitude);
        console.log(response.data.data[0].longitude);

        setMap(response.data.data[0]);
    }, []);

    return map;
};

export default useGoogleAddress;