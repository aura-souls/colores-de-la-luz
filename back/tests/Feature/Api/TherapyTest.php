<?php

namespace Tests\Feature\Api;

use App\Models\Therapy;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class TherapyTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Should test get all therapies.
     */
    public function test_user_can_see_all_therapies(): void
    {
        $this->withExceptionHandling();

        Therapy::factory()->create();

        $response = $this->getJson('/api/therapies');

        $response->assertStatus(200);
        
    }
    
    /**
     * Should test user create a therapy.
     */

    public function test_user_can_create_a_therapy() 
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->create();

        Sanctum::actingAs($user);

        $response = $this->postJson('api/therapies', [
            'image' => 'http://',
            'name' => 'Registros',
            'description' => 'Método de sanación'
        ]);

        $response->assertStatus(201)
        ->assertJsonFragment(['user_id' => $user->id]);
        $this->assertEquals(1, $user->therapies->count());
    }

    public function test_user_can_see_a_therapy_by_id() 
{
        $this->withoutExceptionHandling();

        $therapy = Therapy::factory()->create();

        $user = User::factory()->create();

        Sanctum::actingAs($user);

        $response = $this->getJson("/api/therapies/{$therapy->id}");

        $response->assertStatus(200)
        ->assertJson(['id' => $therapy->id]);
}

public function test_user_can_update_therapy()
    {
        // Crear un usuario para autenticación
        $user = User::factory()->create();

        // Autenticar al usuario
        Sanctum::actingAs($user);

        // Crear una terapia existente para actualizar
        $therapy = Therapy::factory()->create();

        // Datos de actualización
        $updateData = [
            'name' => 'Nuevo nombre de terapia',
            'description' => 'Nueva descripción de terapia',
        ];

        // Enviar una solicitud PUT para actualizar la terapia
        $response = $this->putJson("api/therapies/{$therapy->id}", $updateData);

        // Verificar que la respuesta sea exitosa (código 200)
        $response->assertStatus(200);

        $updatedTherapy = Therapy::find($therapy->id);

        $this->assertEquals($updateData['name'], $updatedTherapy->name);
        $this->assertEquals($updateData['description'], $updatedTherapy->description);
    }
}
