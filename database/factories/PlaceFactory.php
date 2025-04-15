<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Place>
 */
class PlaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => fake()->text(30),
            'description' => fake()->optional()->text(40),
            'latitude' => fake()->randomFloat(8, -11.0, 6.0),
            'longitude' => fake()->randomFloat(8, 95.0, 141.0),
        ];
    }
}
