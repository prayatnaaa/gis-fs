<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Polyline extends Model
{
    /** @use HasFactory<\Database\Factories\PolylineFactory> */
    use HasFactory;
    protected $fillable = [
        'coordinates',
    ];

    protected $casts = [
        'coordinates' => 'array',
    ];
}
