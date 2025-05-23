<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Place;
use App\Models\Polyline;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Dummy user',
            'email' => 'dummy@user.com',
            'password' => 'dummy@user.com'
        ]);

        Place::factory(4)->create();
        Polyline::factory(3)->create();


    }
}
