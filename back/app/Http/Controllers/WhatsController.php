<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Exception;


class WhatsController extends Controller
{
    public function sendMessages()
    {
        try {
            $whatsapp_token = env('WHATSAPP_TOKEN');
            $whatsapp_phone_id = env('WHATSAPP_PHONE_ID');
            $version = 'v17.0';
            $payload = [
                'messaging_product' => 'whatsapp',
                'to' => env('WHATSAPP_TO_NUMBER'),
                'type' => 'template',
                'template' => [
                    'name' => 'saludo_inicial',
                    'language' => [
                        'code' => 'es_ES',
                    ],
                ],
            ];


            $message = Http::withToken($whatsapp_token)->post('https://graph.facebook.com/' . $version . '/' . $whatsapp_phone_id . '/messages', $payload)->throw()->json();

            return response()->json([
                'success' => true,
                'data' => $message,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'data' => $e->getMessage(),
            ], 500);
        }
    }
}