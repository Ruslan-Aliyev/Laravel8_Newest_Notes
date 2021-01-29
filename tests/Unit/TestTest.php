<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Services\TestService;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TestTest extends TestCase
{
	use RefreshDatabase;
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_example()
    {
    	$result = (new TestService())->test();
        $this->assertEquals(5, $result);
    }
}
