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
            'EAAMSbNtOGW0BO2cIVSMOdsXMUPgJ2CvQS3Bng8QnRBWZCZBzZBstg0yNVIDn0m1RSTLMYehxNML1FkOKN2bP8u2EigGZAfZCSUWvA79gYLVMwObrtdhV3QqpfLHvGiR2HHmKusXfDVNrZCduaRoFh0lh0TktzQXWIp6i9wK2bMBJ0g4TUrgtEspt2vajmPGCRvicZBXVRXDwK1W4OMbp0nhwhGHjCadPI24tgEZD';
            $phoneId = '123142900888924';
            $version = 'v17.0';
            $payload = [
                'messaging_product' => 'whatsapp',
                'to' => '34684163197',
                'type' => 'template',
                'template' => [
                    'name' => 'hello_world',
                    'language' => [
                        'code' => 'en_US',
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
