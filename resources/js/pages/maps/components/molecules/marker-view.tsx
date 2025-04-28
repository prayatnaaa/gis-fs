import { Marker, Popup } from 'react-leaflet';
import { PlacesProps } from '../../types/place-props';
import { ClickableMap } from '../atoms/clickable-maps';
import { customMarker } from '../atoms/custom-marker';
import { PlaceActionDialog } from '../organisms/actions-dialog';

interface MarkerProps {
    places: PlacesProps[] | undefined;
    handleMapClick: (latlng: { lat: number; lng: number }) => void;
    handleClose: () => void;
    selectedLocation: {
        lat: number;
        lng: number;
    } | null;
}

export const MarkerView = ({ places, handleMapClick, handleClose, selectedLocation }: MarkerProps) => {
    return (
        <>
            <ClickableMap onClick={handleMapClick} />
            {selectedLocation && <Marker position={[selectedLocation.lat, selectedLocation.lng]} icon={customMarker} />}
            {places?.map((place, index) => {
                return (
                    <Marker key={index} position={[place.latitude, place.longitude]} icon={customMarker}>
                        {
                            <Popup>
                                <div className="min-w-full text-center">
                                    <h3 className="text-lg font-bold text-blue-600">{place.name}</h3>
                                    <p className="text-sm text-gray-600">{place.description}</p>
                                    <PlaceActionDialog
                                        location={{ lat: +place.latitude, lng: +place.longitude }}
                                        onSuccess={handleClose}
                                        place={place}
                                    />
                                </div>
                            </Popup>
                        }
                    </Marker>
                );
            })}
        </>
    );
};
