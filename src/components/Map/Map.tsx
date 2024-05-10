import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

import MapIcon from "assets/images/map.svg"

import 'leaflet/dist/leaflet.css';

var myIcon = L.icon({
    iconUrl: MapIcon,
    iconSize: [38, 95],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

export const Map = ({ latLng }: { latLng: LatLng }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let map: L.Map | undefined;

        const initializeMap = () => {
            if (mapRef.current) {
                if (map) {
                    map.remove();
                }
                map =
                    L.map(mapRef.current).setView([Number(latLng[0]), Number(latLng[1])], 10);
                L.marker([Number(latLng[0]), Number(latLng[1])], { icon: myIcon }).addTo(map)
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 3
                }).addTo(map);
            }
        };

        initializeMap();

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [latLng]);

    return (
        <Box sx={{ height: "350px", width: "100%" }} ref={mapRef} />
    );
};

export default Map;
