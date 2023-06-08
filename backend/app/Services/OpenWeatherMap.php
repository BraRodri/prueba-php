<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenWeatherMap {

    public static function get($lat, $lon)
    {
        //realizando peticion a openweathermap
        $response = Http::get('https://api.openweathermap.org/data/3.0/onecall', [
            'lat' => $lat,
            'lon' => $lon,
            'appid' => config('services.openWeatherMap.API_KEY')
        ]);

        //validacion
        if($response->ok()){
            return $response->body();
        } else {
            return false;
        }
    }

}

