import React, { useState, useEffect, useRef } from 'react';
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj';

function App() {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    const osmLayer = new TileLayer({
        preload: Infinity,
        source: new OSM(),
    })

    const iconFeature = new Feature({
        geometry: new Point([0, 0]),
        name: 'Null Island',
        population: 4000,
        rainfall: 500,
      });
      
    
    const vectorSource = new VectorSource({
        features: [iconFeature],
    });
    
    const vectorLayer = new VectorLayer({
        source: vectorSource,
    })
        
    const initialMap = new Map({
        target: mapElement.current,
        layers: [osmLayer, vectorLayer],
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