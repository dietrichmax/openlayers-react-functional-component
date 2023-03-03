import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

function App() {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    const osmLayer = new TileLayer({
        preload: Infinity,
        source: new OSM(),
    })
    
    const initialMap = new Map({
        target: mapElement.current,
        layers: [osmLayer],
        view: new View({
            center: [0, 0],
            zoom: 0,
          }),
      });

    useEffect(() => {
        setMap(initialMap);
    }, []);

    return (
      <div style={{height:'100vh',width:'100%'}} ref={mapElement} className="map-container" />
    );
}

export default App;