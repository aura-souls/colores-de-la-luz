<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications\ContactFormNotification;
use Illuminate\Support\Facades\Notification;

class ContactoController extends Controller
{
    public function enviarFormulario(Request $request)
    {
        // Valida y almacena los datos del formulario
        $datos = $request->validate([
            'nombre' => 'required|string',
            'email' => 'required|email',
            'teléfono' => 'required|string',
            'mensaje' => 'required|string',

        ]);

        
        Notification::send(auth()->user(), new ContactFormNotification($datos));

        // Puedes responder con un mensaje de éxito
        return response()->json(['message' => 'Formulario enviado con éxito']);
    }
}
