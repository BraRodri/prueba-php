<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\RecordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(CityController::class)
    ->prefix('city')->group(function () {

    Route::get('/all', 'get');
    Route::post('/consult/humidity', 'consultHumidity');

});

Route::get('/records/{date_start}/{date_end}', [RecordController::class, 'get']);
