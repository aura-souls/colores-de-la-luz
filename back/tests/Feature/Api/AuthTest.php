<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
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
}
