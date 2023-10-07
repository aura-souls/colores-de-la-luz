<?php

namespace Tests\Unit;

use App\Http\Controllers\WhatsController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class WhatsControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testSendMessages()
    {
        $whatsController = new WhatsController();

        Http::fake([
            'graph.facebook.com/*' => Http::response([
                'id' => '1234567890',
                'message' => '',
            ], 200),
        ]);

        $response = $whatsController->sendMessages();

        $this->assertTrue($response->getData()->success);
        $this->assertEquals('1234567890', $response->getData()->data->id);
        $this->assertEquals('Hello, World!', $response->getData()->data->message);
    }
}