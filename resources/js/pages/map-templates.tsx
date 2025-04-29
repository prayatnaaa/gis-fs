import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

export default function MapsTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative z-0 h-screen w-full">
            <MapContainer center={[-2.5489, 118.0149]} zoom={6} className="h-screen w-full" style={{ zIndex: 0 }} zoomControl={false}>
                <ZoomControl position="bottomright" />
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {children}
            </MapContainer>
        </div>
    );
}
