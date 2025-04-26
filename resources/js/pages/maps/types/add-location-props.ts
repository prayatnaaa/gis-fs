import { PlacesProps } from './place-props';

export interface PlaceActionProps {
    isOpen?: boolean;
    onClose?: () => void;
    location: { lat: number; lng: number };
    onSuccess: () => void;
    place?: PlacesProps;
}
