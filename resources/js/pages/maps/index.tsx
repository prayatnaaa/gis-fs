import 'leaflet/dist/leaflet.css';
import MapsView from './components/organisms/maps-view';
import { PlacesProps } from './types/place-props';

const MapsComponent = ({ places }: { places: PlacesProps[] | undefined }) => {
    return (
        <div>
            <MapsView places={places} />;
        </div>
    );
};

export default MapsComponent;
