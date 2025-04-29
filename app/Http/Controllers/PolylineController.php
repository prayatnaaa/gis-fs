<?php

namespace App\Http\Controllers;

use App\Models\Polyline;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PolylineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('map-polyline/index', [
            'polylines' => Polyline::all()
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
            'coordinates' => 'required|array',
        ]);

        Polygon::create($validated);

        return redirect()->route('polylines.index')-> with([
            'status' => true,
            'message' => 'Polyline created successfully!',
        ]);


    }

    /**
     * Display the specified resource.
     */
    public function show(Polyline $polyline)
    {
        //
        return Inertia::render('Show', [
            'polyline' => $polyline
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Polyline $polyline)
    {
        //
        return Inertia::render('Edit', [
            'polyline' => $polyline
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Polyline $polyline)
    {
        //
        $polyline -> update([
            'coordinates' => $request -> coordinates
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Polyline $polyline)
    {
        //
        $polyline -> delete();
    }
}
