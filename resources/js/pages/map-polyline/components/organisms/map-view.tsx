import MapsTemplate from '@/pages/map-templates';
import { CustomPolylineProps } from '../../types/polyline-props';
import CustomPolyline from '../molecules/polyline';

const MapsView = ({ polylines }: { polylines: CustomPolylineProps[] | undefined }) => {
    return (
        <MapsTemplate>{polylines && polylines.map((polyline) => <CustomPolyline key={polyline.id} positions={polyline.coordinates} />)}</MapsTemplate>
    );
};

export default MapsView;
