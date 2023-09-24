<?php



namespace App\Http\Controllers;



use Illuminate\Http\Request;

use Mail;

use App\Mail\DemoMail;



class MailController extends Controller

{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index()

    {

        $mailData = [

            'title' => 'Has recibido un mensaje de Los colores de la Luz',

            'body' => 'Gracias por tu mansaje'

        ];



        Mail::to('fem.aura.souls@gmail.com')->send(new DemoMail($mailData));



        dd("Email is sent successfully.");

    }

}