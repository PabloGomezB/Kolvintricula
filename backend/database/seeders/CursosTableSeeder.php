<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class CursosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cursos')->insert([

            'nom' => 'DAM',
          
            'estat' => 'DISPONIBLE',
          
        ]);

        DB::table('cursos')->insert([

            'nom' => 'DAW',
          
            'estat' => 'DISPONIBLE',
          
        ]);

        DB::table('cursos')->insert([

            'nom' => 'ASIX',
          
            'estat' => 'NODISPONIBLE',
          
        ]);
    }
}
