import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents, ZoomControl } from 'react-leaflet';
import { customMarker } from './components/atoms/custom-marker';
import LocationPopup from './components/molecules/place-popup';
import { PlacesProps } from './types/place-props';

const ClickableMap = ({ onClick }: { onClick: (latlng: { lat: number; lng: number }) => void }) => {
    useMapEvents({
        click(e: { latlng: { lat: number; lng: number } }) {
            onClick(e.latlng);
        },
    });
    return null;
};

const MapsComponent = ({ places }: { places: PlacesProps[] | undefined }) => {
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
                <ClickableMap onClick={handleMapClick} />
                {selectedLocation && <Marker position={[selectedLocation.lat, selectedLocation.lng]} icon={customMarker} />}
                {places?.map((place, index) => {
                    return (
                        <Marker key={index} position={[place.latitude, place.longitude]} icon={customMarker}>
                            {
                                <Popup>
                                    <div className="w-full p-4 text-center">
                                        <h3 className="text-lg font-bold text-blue-600">{place.name}</h3>
                                        <p className="text-sm text-gray-600">{place.description}</p>
                                    </div>
                                </Popup>
                            }
                        </Marker>
                    );
                })}
            </MapContainer>
            <LocationPopup isOpen={modalOpen} onClose={handleClose} location={selectedLocation} />
        </div>
    );
};

export default MapsComponent;
