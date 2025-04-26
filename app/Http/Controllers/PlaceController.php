<?php

namespace App\Http\Controllers;

use App\Models\Place;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('maps/index', [
            'places' => Place::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            'name' => 'required|string|max:30',
            'description' => 'nullable|string|max:40',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        Place::create($validated);

        return redirect()->route('places.index')-> with([
            'status' => true,
            'message' => 'Place created successfully!',
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Place $place)
    {
        //
        return Inertia::render('Show', [
            'place' => $place
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Place $place)
    {
        //
        return Inertia::render('Edit', [
            'place' => $place
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Place $place)
    {
        //
        $place->update([
            'name' => $request->name,
            'description' => $request->description,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Place $place)
    {
        //
        $place->delete();
    }
}
