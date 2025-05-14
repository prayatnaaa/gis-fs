import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PlaceActionProps } from '../../types/add-location-props';
import { addPlaceSchema, TAddPlaceSchema } from '../../types/schemas';

export function PlaceActionDialog({ location, onSuccess, place }: PlaceActionProps) {
    const [open, setOpen] = React.useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TAddPlaceSchema>({
        defaultValues: place
            ? {
                  name: place.name,
                  description: place.description,
              }
            : undefined,
        resolver: zodResolver(addPlaceSchema),
    });

    const onSubmit = async (data: TAddPlaceSchema) => {
        const payload = {
            name: data.name,
            description: data.description,
            latitude: location.lat,
            longitude: location.lng,
        };
        if (place) {
            router.put(`/places/${place.id}`, payload, {
                onError: (errors) => {
                    console.error(errors);
                },
                onSuccess: () => {
                    toast.success('Place edited successfully!');
                    setOpen(false);
                    onSuccess();
                },
            });
        } else {
            router.post('/places', payload, {
                onError: (errors) => {
                    console.error(errors);
                },
                onSuccess: () => {
                    toast.success('Place created successfully!');
                    setOpen(false);
                    onSuccess();
                },
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="text-white hover:cursor-pointer hover:text-gray-200" variant="outline">
                    {place ? 'Edit' : 'Create'}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{place ? 'Edit Place' : 'Add Place'}</DialogTitle>
                    <DialogDescription>Make changes to the place information. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input {...register('name')} id="name" className="col-span-3" onChange={() => console.log('click')} />
                    </div>
                    {errors.name && <p className="flex flex-row-reverse text-xs text-red-500">{errors.name.message}</p>}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input {...register('description')} onChange={() => console.log('click')} id="description" className="col-span-3" />
                    </div>
                    {errors.description && <p className="flex flex-row-reverse text-xs text-red-500">{errors.description.message}</p>}
                    <h1 className="flex flex-row-reverse text-xs text-gray-600">{`${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}`}</h1>
                    <DialogFooter className="pt-2">
                        <Button disabled={isSubmitting} type="submit" className="hover:cursor-pointer hover:bg-gray-800">
                            {place ? 'Edit' : 'Create'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
