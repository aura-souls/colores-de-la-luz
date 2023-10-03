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
            'EAAOxZAdY7CCUBO3ImwvLfOAVrRRkKUMs7hZBBckBtyBWYIYwxZCwKSz0myoguLOaZAe9BMYJ0GjbZBPEHkbIKJnUXNNpUlv1vSbPZCQZBA3I0JSGZBWkkGjv0Wt2LnwIGKtZBmze1dxK9Ip6pr6IhLxXChwsfaxVMVps8mmZAubgMXBhfY25buqOmpklw5PHZAZCTGZBwFx9gXFFrC0JcPXW8aL0ZD';
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
