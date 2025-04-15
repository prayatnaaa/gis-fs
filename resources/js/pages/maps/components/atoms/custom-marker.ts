import L from 'leaflet';

export const customMarker: L.Icon = L.icon({
    iconUrl: '/marker.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, 32],
});
