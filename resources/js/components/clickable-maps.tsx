import { useMapEvents } from 'react-leaflet';

export const ClickableMap = ({ onClick }: { onClick: (latlng: { lat: number; lng: number }) => void }) => {
    useMapEvents({
        click(e: { latlng: { lat: number; lng: number } }) {
            onClick(e.latlng);
        },
    });
    return null;
};
