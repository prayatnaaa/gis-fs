import { LatLngExpression } from 'leaflet';
import React from 'react';
import { Polyline } from 'react-leaflet';

interface CustomPolylineProps {
    positions: LatLngExpression[];
    children?: React.ReactNode;
}

const CustomPolyline: React.FC<CustomPolylineProps> = ({ positions, children }) => {
    const blueOptions = { color: 'blue' };

    return (
        <Polyline positions={positions} pathOptions={blueOptions}>
            {children}
        </Polyline>
    );
};

export default CustomPolyline;
