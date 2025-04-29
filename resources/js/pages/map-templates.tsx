import { ClickableMap } from '@/components/clickable-maps';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

type MapsTemplateProps = {
    children: React.ReactNode;
    onClick: (latlng: { lat: number; lng: number }) => void;
};

export default function MapsTemplate({ children, onClick }: MapsTemplateProps) {
    return (
        <div className="relative z-0 h-screen w-full">
            <MapContainer center={[-2.5489, 118.0149]} zoom={6} className="h-screen w-full" style={{ zIndex: 0 }} zoomControl={false}>
                <ZoomControl position="bottomright" />
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ClickableMap onClick={onClick} />
                {children}
            </MapContainer>
        </div>
    );
}
