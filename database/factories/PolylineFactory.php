<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Polyline>
 */
class PolylineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $points = [];

        // Generate a fake polyline with 3-6 points
        $numPoints = $this->faker->numberBetween(3, 6);
        $startLat = $this->faker->latitude(-11, 6);
        $startLng = $this->faker->longitude(95, 141);

        for ($i = 0; $i < $numPoints; $i++) {
            $lat = $startLat + ($i * 0.2);
            $lng = $startLng + ($i * 0.2);
            $points[] = [$lat, $lng];
        }

        return [
            'coordinates' => $points,
        ];
    }
}
