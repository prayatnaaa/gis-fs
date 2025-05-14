import { LatLngExpression } from 'leaflet';
import { Polyline } from 'react-leaflet';

type ClickablePolylineProps = {
    positions: LatLngExpression[];
    onClick?: (latlng: LatLngExpression) => void;
};

export const ClickablePolyline = ({ positions, onClick }: ClickablePolylineProps) => {
    const handleClick = (e: L.LeafletMouseEvent) => {
        onClick?.(e.latlng);
    };

    return <Polyline positions={positions} eventHandlers={{ click: handleClick }} />;
};
