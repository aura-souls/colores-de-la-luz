<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Should create a new user.
     */
    public function test_user_can_register(): void
    {
        $this->postJson('api/register', [
            'name' => 'Jacin',
            'email' => 'j@mail.com',
            'password' => Hash::make('123456789')
        ]);
        
        $this->assertCount(1, User::all());
    }

    /**
     * Should test a user login.
     */
    public function test_user_can_login(): void
    {
        $user = User::factory()->create([
            'password' => Hash::make('abcdefghi')
        ]);

        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'abcdefghi'
        ]);
        
        $response->assertStatus(200);
        $response->assertJsonFragment([
            'msg' => 'Usuario conectado exitósamente'
        ]);
    }

    /**
     * Should test a user logout.
     */
    public function test_user_logout()
    {
        $user = User::factory()->create([
            'password' => Hash::make('abcdefghi')
        ]);

        $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'abcdefghi'
        ]);
        
        Sanctum::actingAs($user, ['*']);

        $response = $this->postJson('/api/logout');
        
        $response->assertJsonFragment([
            'msg' => 'Se ha cerrado tu sesión'
        ]);
    }
}