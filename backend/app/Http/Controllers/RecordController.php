<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Http\Request;

class RecordController extends Controller
{

    public function get($date_start, $date_end)
    {
        //retornando todas las ciudades activas
        return response()->json([
            'meta' => [
                'success' => true,
                'errors' => ""
            ],
            'data' => Record::whereBetween('date', [$date_start, $date_end])->orderBy('id', 'DESC')->get()
        ]);
    }

}
