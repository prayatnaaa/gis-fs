export interface AddLocationProps {
    isOpen?: boolean;
    onClose?: () => void;
    location: { lat: number; lng: number };
    onSuccess: () => void;
}
