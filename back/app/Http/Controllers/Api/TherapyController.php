<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Therapy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TherapyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $therapies = Therapy::all();

            return response()->json($therapies);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error interno en el servidor'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required', 'mimes:jpeg,png,jpg,gif',
                'name' => 'required',
                'description' => 'required',
            ]);
    
            $user = Auth::user();
    
            $therapy = Therapy::create([
                'image' => $request->image,
                'name' => $request->name,
                'description' => $request->description,
                'user_id' => $user->id
            ]);
    
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('img', 'public');
                $therapy->image = $imagePath;
            }
    
            $therapy->save();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error interno en el servidor'], 500);
        }
            return response()->json([
                'msg' => 'Terapia creada correctamente',
                'therapy' => $therapy
            ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
