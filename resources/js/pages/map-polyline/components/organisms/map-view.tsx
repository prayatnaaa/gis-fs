import MapsTemplate from '@/pages/map-templates';
import LocationPopup from '@/pages/maps/components/molecules/place-popup';
import { LatLngExpression } from 'leaflet';
import React from 'react';
import { CustomPolylineProps } from '../../types/polyline-props';
import CustomPolyline from '../molecules/polyline';

const MapsView = ({ polylines }: { polylines: CustomPolylineProps[] | undefined }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedLocation, setSelectedLocation] = React.useState<LatLngExpression[]>([]);

    const handleMapClick = (latlng: LatLngExpression) => {
        setSelectedLocation((prev) => [...prev, latlng]);
        setModalOpen(true);
    };

    const handleClose = () => {
        setSelectedLocation([]);
        setModalOpen(false);
    };

    return (
        <MapsTemplate onClick={handleMapClick}>
            {selectedLocation.length > 1 && <CustomPolyline positions={selectedLocation} />}
            {polylines && polylines.map((polyline) => <CustomPolyline key={polyline.id} positions={polyline.coordinates} />)}
            {selectedLocation && (
                <LocationPopup
                    isOpen={modalOpen}
                    location={selectedLocation[selectedLocation.length - 1] as { lat: number; lng: number }}
                    onSuccess={handleClose}
                />
            )}
        </MapsTemplate>
    );
};

export default MapsView;
