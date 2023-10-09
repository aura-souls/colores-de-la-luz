<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Therapy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

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
        try {
            $therapy = Therapy::findOrFail($id);
    
            $therapy->image_url = asset('storage/' . $therapy->image);
    
            return response()->json($therapy);
        } catch (\Exception $e) {
            return response()->json(['error' => 'La terapia no se encontró.'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $therapy = Therapy::findOrFail($id);

            $user = Auth::user();

            if ($therapy->user_id !== $user->id) {
                return response()->json(['error' => 'No tienes permisos para actualizar esta terapia'], 403);
            }

            $request->validate([
                'image' => 'nullable|mimes:jpeg,png,jpg,gif',
                'name' => 'nullable',
                'description' => 'nullable',
            ]);        
        
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('img', 'public');
                $therapy->image = $imagePath;
            }

            if ($request->has('name')) {
                $therapy->name = $request->input('name');
            }

            if ($request->has('description')) {
                $therapy->description = $request->input('description');
            }

            $therapy->image = $imagePath;
            
            $therapy->save();

            return response()->json([
                'msg' => 'Terapia actualizada correctamente',
                'therapy' => $therapy
            ]);
        } catch (\Exception $e) {
            Log::error('Error en la actualización de terapia: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno en el servidor'], 500);
        }    
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $therapy = Therapy::findOrFail($id);
    
            $therapy->delete();
    
            return response()->json(['msg' => 'Terapia eliminada correctamente']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error interno en el servidor'], 500);
        }
    }
}
