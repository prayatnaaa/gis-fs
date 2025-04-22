export type PlacesProps = {
    id: number;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
};

export type GetPlacesData = {
    message: string;
    status: boolean;
    data?: PlacesProps[];
};
