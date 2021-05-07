<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = [
            ['type' => 'CFGS', 'name' => 'DAM', 'description' => 'Desarrollo de Aplicaciones Multiplataforma', 'state' => 'MATRICULA', 'created_at' => '2021-05-05 20:20:04'],
            ['type' => 'CFGS', 'name' => 'DAW', 'description' => 'Desarrollo de Aplicaciones Web', 'state' => 'DESHABILITADO', 'created_at' => '2021-05-05 20:20:04'],
            ['type' => 'CFGS', 'name' => 'ASIX', 'description' => 'Administración de Sistemas Informáticos en Red', 'state' => 'DESHABILITADO', 'created_at' => '2021-05-05 20:20:04'],
            ['type' => 'CFGS', 'name' => 'ASIX-CI', 'description' => 'Administración de Sistemas Informáticos en Red - Ciberseguridad', 'state' => 'DESHABILITADO', 'created_at' => '2021-05-05 20:20:04'],
            ['type' => 'CFGS', 'name' => 'DAM-VI', 'description' => 'Desarrollo de Aplicaciones Multiplataforma - Videojuegos', 'state' => 'DESHABILITADO', 'created_at' => '2021-05-05 20:20:04'],
            ['type' => 'CFGM', 'name' => 'SMX', 'description' => 'Sistemas Microinformáticos y Redes', 'state' => 'DESHABILITADO', 'created_at' => '2021-05-05 20:20:04']
        ];
        DB::table('courses')->insert($courses);
    }
}
