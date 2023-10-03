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
            $token =
            'EAAOxZAdY7CCUBOy6OlbP0k6yXmYxOpMxjWoB3bCcyfSI0BiZAyAmaKnf9pae8YLDIeqoOZBDCnl2nlDHW8oS71VWZBiu3flf5x00NLc88homqtWEG7qTdwAnyUvsMN4aBHsU1tP6ZAZAfJZCKgkTXi9Hh1cqVYajMRMZBxF97taAQNpuLlQCPaBSyzx9ZBYTQLA5gR7QybkkNup3KUWUb3QuR';
            $phoneId = '123142900888924';
            $version = 'v17.0';
            $payload = [
                'messaging_product' => 'whatsapp',
                'to' => '34684163197',
                'type' => 'template',
                'template' => [
                    'name' => 'saludo_inicial',
                    'language' => [
                        'code' => 'es_ES',
                    ],
                ],
            ];


            $message = Http::withToken($token)->post('https://graph.facebook.com/' . $version . '/' . $phoneId . '/messages', $payload)->throw()->json();

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



