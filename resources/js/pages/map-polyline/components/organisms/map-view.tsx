import MapsTemplate from '@/pages/map-templates';
import { LatLngExpression } from 'leaflet';
import React from 'react';
import { Polyline } from 'react-leaflet';
import { CustomPolylineProps } from '../../types/polyline-props';
import CustomPolyline from '../molecules/polyline';

const MapsView = ({ polylines }: { polylines: CustomPolylineProps[] | undefined }) => {
    const [selectedLocation, setSelectedLocation] = React.useState<LatLngExpression[]>([]);

    const handleMapClick = (latlng: LatLngExpression) => {
        setSelectedLocation((prev) => [...prev, latlng]);
    };
    return (
        <MapsTemplate onClick={handleMapClick}>
            {selectedLocation.length > 1 && <Polyline positions={selectedLocation} />}
            {polylines && polylines.map((polyline) => <CustomPolyline key={polyline.id} positions={polyline.coordinates} />)}
        </MapsTemplate>
    );
};

export default MapsView;
