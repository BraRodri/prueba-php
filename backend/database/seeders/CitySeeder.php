<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        City::create([
            "name" => "Miami",
            "lat" => 25.774269,
            "lon" => -80.193657,
            "active" => 1
        ]);

        City::create([
            "name" => "Orlando",
            "lat" => 28.53834,
            "lon" => -81.379242,
            "active" => 1
        ]);

        City::create([
            "name" => "New York",
            "lat" => 43.000351,
            "lon" => -75.499901,
            "active" => 1
        ]);
    }
}
