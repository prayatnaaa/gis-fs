<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PlaceController;
use App\Http\Controllers\PolylineController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/places');
    Route::resource('places', PlaceController::class);
    Route::resource('/polylines', PolylineController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
