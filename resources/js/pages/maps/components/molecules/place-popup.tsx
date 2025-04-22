import { Button } from '@/components/ui/button';
import { AddLocationProps } from '../../types/add-location-props';
import { CreatePlaceDialog } from '../organisms/actions-dialog';

const LocationPopup: React.FC<AddLocationProps> = ({ isOpen, onClose, location, onSuccess }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute bottom-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 transform">
            <div className="flex w-full items-center justify-between rounded-lg bg-white p-6 shadow-lg">
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold">Selected Location</h2>

                    {location && (
                        <p className="text-sm text-gray-700">
                            {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                        </p>
                    )}
                </div>

                <div className="flex flex-row-reverse justify-between gap-2">
                    <CreatePlaceDialog location={location} onSuccess={onSuccess} />
                    <Button className="hover:cursor-pointer" variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LocationPopup;
