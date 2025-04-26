<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PlaceController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/places');
    Route::resource('places', PlaceController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
