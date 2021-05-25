<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UFSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $u_f_s = [
            ['id_module' => '1', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Sistemes informàtics 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '1', 'name' => 'UF2', 'hours' => '27', 'year' => '1', 'description' => 'Sistemes informàtics 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '1', 'name' => 'UF3', 'hours' => '27', 'year' => '1', 'description' => 'Sistemes informàtics 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '2', 'name' => 'UF1', 'hours' => '12', 'year' => '1', 'description' => 'Bases de dades 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '2', 'name' => 'UF2', 'hours' => '50', 'year' => '1', 'description' => 'Bases de dades 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '2', 'name' => 'UF3', 'hours' => '30', 'year' => '1', 'description' => 'Bases de dades 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '2', 'name' => 'UF4', 'hours' => '45', 'year' => '2', 'description' => 'Bases de dades 4', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '3', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Programació 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '3', 'name' => 'UF2', 'hours' => '50', 'year' => '1', 'description' => 'Programació 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '3', 'name' => 'UF3', 'hours' => '25', 'year' => '1', 'description' => 'Programació 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '3', 'name' => 'UF4', 'hours' => '20', 'year' => '2', 'description' => 'Programació 4', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '3', 'name' => 'UF5', 'hours' => '60', 'year' => '2', 'description' => 'Programació 5', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '3', 'name' => 'UF6', 'hours' => '17', 'year' => '2', 'description' => 'Programació 6', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '4', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '4', 'name' => 'UF2', 'hours' => '27', 'year' => '1', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '4', 'name' => 'UF3', 'hours' => '27', 'year' => '1', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '5', 'name' => 'UF1', 'hours' => '40', 'year' => '2', 'description' => 'Entorns de desenvolupament 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '5', 'name' => 'UF2', 'hours' => '29', 'year' => '2', 'description' => 'Entorns de desenvolupament 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '5', 'name' => 'UF3', 'hours' => '40', 'year' => '2', 'description' => 'Entorns de desenvolupament 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '6', 'name' => 'UF1', 'hours' => '27', 'year' => '2', 'description' => 'Accés a dades 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '6', 'name' => 'UF2', 'hours' => '40', 'year' => '2', 'description' => 'Accés a dades 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '6', 'name' => 'UF3', 'hours' => '12', 'year' => '2', 'description' => 'Accés a dades 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '6', 'name' => 'UF4', 'hours' => '50', 'year' => '2', 'description' => 'Accés a dades 4', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '7', 'name' => 'UF1', 'hours' => '40', 'year' => '2', 'description' => 'Desenvolupament d’interfícies 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '7', 'name' => 'UF2', 'hours' => '29', 'year' => '2', 'description' => 'Desenvolupament d’interfícies 2', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '8', 'name' => 'UF1', 'hours' => '30', 'year' => '2', 'description' => 'Programació multimèdia i dispositius mòbils 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '8', 'name' => 'UF2', 'hours' => '15', 'year' => '2', 'description' => 'Programació multimèdia i dispositius mòbils 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '8', 'name' => 'UF3', 'hours' => '40', 'year' => '2', 'description' => 'Programació multimèdia i dispositius mòbils 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '9', 'name' => 'UF1', 'hours' => '30', 'year' => '2', 'description' => 'Programació de serveis i processos 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '9', 'name' => 'UF2', 'hours' => '15', 'year' => '2', 'description' => 'Programació de serveis i processos 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '9', 'name' => 'UF3', 'hours' => '40', 'year' => '2', 'description' => 'Programació de serveis i processos 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '10', 'name' => 'UF1', 'hours' => '36', 'year' => '2', 'description' => 'Sistemes de gestió empresarial 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '10', 'name' => 'UF2', 'hours' => '75', 'year' => '2', 'description' => 'Sistemes de gestió empresarial 2', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '11', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Formació i orientació laboral 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '11', 'name' => 'UF2', 'hours' => '30', 'year' => '1', 'description' => 'Formació i orientació laboral 2', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '12', 'name' => 'UF1', 'hours' => '85', 'year' => '1', 'description' => 'Empresa i iniciativa emprenedora 1', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '13', 'name' => 'UF1', 'hours' => '80', 'year' => '2', 'description' => 'Projecte de desenvolupament d’aplicacions multiplataforma 1', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '14', 'name' => 'Formació en centres de treball', 'hours' => '400', 'year' => '2', 'description' => 'Formació en centres de treball', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '15', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Sistemes informàtics 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '15', 'name' => 'UF2', 'hours' => '27', 'year' => '1', 'description' => 'Sistemes informàtics 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '15', 'name' => 'UF3', 'hours' => '27', 'year' => '1', 'description' => 'Sistemes informàtics 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '16', 'name' => 'UF1', 'hours' => '12', 'year' => '1', 'description' => 'Bases de dades 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '16', 'name' => 'UF2', 'hours' => '50', 'year' => '1', 'description' => 'Bases de dades 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '16', 'name' => 'UF3', 'hours' => '30', 'year' => '1', 'description' => 'Bases de dades 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '16', 'name' => 'UF4', 'hours' => '45', 'year' => '2', 'description' => 'Bases de dades 4', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '17', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Programació 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '17', 'name' => 'UF2', 'hours' => '50', 'year' => '1', 'description' => 'Programació 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '17', 'name' => 'UF3', 'hours' => '25', 'year' => '1', 'description' => 'Programació 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '17', 'name' => 'UF4', 'hours' => '20', 'year' => '2', 'description' => 'Programació 4', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '17', 'name' => 'UF5', 'hours' => '60', 'year' => '2', 'description' => 'Programació 5', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '17', 'name' => 'UF6', 'hours' => '17', 'year' => '2', 'description' => 'Programació 6', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '18', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '18', 'name' => 'UF2', 'hours' => '27', 'year' => '1', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '18', 'name' => 'UF3', 'hours' => '27', 'year' => '1', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '19', 'name' => 'UF1', 'hours' => '40', 'year' => '2', 'description' => 'Entorns de desenvolupament 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '19', 'name' => 'UF2', 'hours' => '29', 'year' => '2', 'description' => 'Entorns de desenvolupament 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '19', 'name' => 'UF3', 'hours' => '40', 'year' => '2', 'description' => 'Entorns de desenvolupament 3', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '20', 'name' => 'UF1', 'hours' => '27', 'year' => '2', 'description' => 'Desenvolupament web en entorn client 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '20', 'name' => 'UF2', 'hours' => '40', 'year' => '2', 'description' => 'Desenvolupament web en entorn client 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '20', 'name' => 'UF3', 'hours' => '12', 'year' => '2', 'description' => 'Desenvolupament web en entorn client 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '20', 'name' => 'UF4', 'hours' => '50', 'year' => '2', 'description' => 'Desenvolupament web en entorn client 4', 'created_at' => '2021-05-10 20:20:04'],

            
            ['id_module' => '21', 'name' => 'UF1', 'hours' => '27', 'year' => '2', 'description' => 'Desenvolupament web en entorn servidor 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '21', 'name' => 'UF2', 'hours' => '40', 'year' => '2', 'description' => 'Desenvolupament web en entorn servidor 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '21', 'name' => 'UF3', 'hours' => '12', 'year' => '2', 'description' => 'Desenvolupament web en entorn servidor 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '21', 'name' => 'UF4', 'hours' => '50', 'year' => '2', 'description' => 'Desenvolupament web en entorn servidor 4', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '22', 'name' => 'UF1', 'hours' => '27', 'year' => '2', 'description' => 'Desplegament d’aplicacions web 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '22', 'name' => 'UF2', 'hours' => '40', 'year' => '2', 'description' => 'Desplegament d’aplicacions web 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '22', 'name' => 'UF3', 'hours' => '12', 'year' => '2', 'description' => 'Desplegament d’aplicacions web 3', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '22', 'name' => 'UF4', 'hours' => '50', 'year' => '2', 'description' => 'Desplegament d’aplicacions web 4', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '23', 'name' => 'UF1', 'hours' => '27', 'year' => '2', 'description' => 'Disseny d’interfícies web 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '23', 'name' => 'UF2', 'hours' => '40', 'year' => '2', 'description' => 'Disseny d’interfícies web 2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '23', 'name' => 'UF3', 'hours' => '12', 'year' => '2', 'description' => 'Disseny d’interfícies web 3', 'created_at' => '2021-05-10 20:20:04'],
        
            ['id_module' => '24', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'description' => 'Formació i orientació laboral 1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '24', 'name' => 'UF2', 'hours' => '30', 'year' => '1', 'description' => 'Formació i orientació laboral 2', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '25', 'name' => 'UF1', 'hours' => '85', 'year' => '1', 'description' => 'Empresa i iniciativa emprenedora 1', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '26', 'name' => 'UF1', 'hours' => '80', 'year' => '2', 'description' => 'Projecte de desenvolupament d’aplicacions web ', 'created_at' => '2021-05-10 20:20:04'],

            ['id_module' => '27', 'name' => 'Formació en centres de treball', 'hours' => '400', 'year' => '2', 'description' => 'Formació en centres de treball', 'created_at' => '2021-05-10 20:20:04'],



            
        ];


        ];
        DB::table('u_f_s')->insert($u_f_s);
    }
}
