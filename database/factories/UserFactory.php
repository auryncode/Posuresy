<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => Str::uuid(),
            'nama' => fake()->name(),
            'nik' => \str_pad(mt_rand(1, 9999999999999999), 16),
            'jenis_kelamin' => fake()->sentence(3),
            'provinsi' => 'jawa tengah',
            'kabupaten' => 'karanganyar',
            'kecamatan' => 'jumantono',
            'kelurahan' => 'tunggulrejo',
            'dusun' => 'kopek',
        ];
    }
}
