import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { PlacesProps } from '../../types/place-props';
import { MarkerView } from '../molecules/marker-view';
import LocationPopup from '../molecules/place-popup';

const MapsView = ({ places }: { places: PlacesProps[] | undefined }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<{
        lat: number;
        lng: number;
    } | null>(null);

    const handleMapClick = (latlng: { lat: number; lng: number }) => {
        setSelectedLocation(latlng);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSelectedLocation(null);
    };

    return (
        <div className="relative z-0 h-screen w-full">
            <MapContainer center={[-2.5489, 118.0149]} zoom={6} className="h-screen w-full" style={{ zIndex: 0 }} zoomControl={false}>
                <ZoomControl position="bottomright" />
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkerView selectedLocation={selectedLocation} handleClose={handleClose} handleMapClick={handleMapClick} places={places} />
            </MapContainer>
            {location && <LocationPopup isOpen={modalOpen} onClose={handleClose} location={selectedLocation!} onSuccess={handleClose} />}
        </div>
    );
};

export default MapsView;
