import { z } from 'zod';

export const addPlaceSchema = z.object({
    name: z.string().min(1, 'Name field cannot be empty!'),
    description: z.string().min(1, 'Description field cannot be empty!'),
});

export type TAddPlaceSchema = z.infer<typeof addPlaceSchema>;
