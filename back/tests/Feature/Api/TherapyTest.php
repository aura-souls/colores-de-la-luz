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
}