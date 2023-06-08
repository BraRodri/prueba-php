<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Record;
use App\Services\OpenWeatherMap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CityController extends Controller
{

    public function get()
    {
        //retornando todas las ciudades activas
        return response()->json([
            'meta' => [
                'success' => true,
                'errors' => ""
            ],
            'data' => City::select('id', 'name')->where('active', 1)->get()
        ]);
    }

    public function consultHumidity(Request $request)
    {

        //validar la recepcion de datos
        $validator = Validator::make($request->all(), [
            'city' => 'required|numeric',
            'ip' => 'required'
        ]);

        //si exite error en los datos, retonar error
        if ($validator->fails()) {
            return response()->json([
                'meta' => [
                    'success' => false,
                    'errors' => $validator->errors()
                ],
                'data' => []
            ], 422);
        }

        //validacion si existe la ciudad
        $city = City::find($request->city);
        if(!$city) {
            //retornando error que no se encontro la ciudad
            return response()->json([
                'meta' => [
                    'success' => false,
                    'errors' => "Error, no pudimos encontrar la ciudad seleccionada!"
                ],
                'data' => []
            ]);
        } else {

            //consulta a la api de weather la informacion de la humedad por ciudad
            $response = OpenWeatherMap::get($city->lat, $city->lon);
            if($response == false) {
                return response()->json([
                    'meta' => [
                        'success' => false,
                        'errors' => "Error al consultar la API!"
                    ],
                    'data' => []
                ]);
            } else {
                $data = json_decode($response);

                //guardando registro de historial
                $this->saveRecord($city->name, $request->ip, $data->current->humidity);

                //retornando la data correcta
                return response()->json([
                    'meta' => [
                        'success' => true,
                        'errors' => ""
                    ],
                    'data' => [
                        'city' => $city->name,
                        'humidity' => $data->current->humidity,
                        'lat' => $city->lat,
                        'lon' => $city->lon
                    ]
                ]);
            }
        }
    }

    public function saveRecord($city, $ip, $humidity)
    {
        //guardar historial de consultas
        Record::create([
            'date' => date('Y-m-d'),
            'ip' => $ip,
            'city' => $city,
            'humidity' => $humidity
        ]);
    }

}
