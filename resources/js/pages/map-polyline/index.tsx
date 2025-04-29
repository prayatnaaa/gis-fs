import MapsView from './components/organisms/map-view';
import { CustomPolylineProps } from './types/polyline-props';

const Index = ({ polylines }: { polylines: CustomPolylineProps[] | undefined }) => {
    return <MapsView polylines={polylines} />;
};

export default Index;
