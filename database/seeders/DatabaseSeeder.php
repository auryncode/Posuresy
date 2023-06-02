<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Admin::factory(1)->create();

        // \App\Models\User::create([
        //     'id'=>Str::uuid(),
        //     'nama' => 'required',
        //     'nik' => 'required|unique:users',
        //     'jenis_kelamin' => 'required',
        //     'agama' => 'required',
        //     'kecamatan' => 'required',
        //     'kelurahan' => 'required',
        //     'dusun' => 'required',
        // ]);
    }
}
