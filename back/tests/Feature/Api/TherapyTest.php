<?php

namespace Tests\Feature\Api;

use App\Models\Therapy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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
}
