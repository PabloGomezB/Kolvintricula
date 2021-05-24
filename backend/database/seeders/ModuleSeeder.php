<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modules = [
            // DAM
            ['id_course' => '1', 'name' => 'MP1', 'description' => 'Sistemes informàtics', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP2', 'description' => 'Bases de dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP3', 'description' => 'Programació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP4', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP5', 'description' => 'Entorns de desenvolupament', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP6', 'description' => 'Accés a dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP7', 'description' => 'Desenvolupament d’interfícies', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP8', 'description' => 'Programació multimèdia i dispositius mòbils', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP9', 'description' => 'Programació de serveis i processos', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP10', 'description' => 'Sistemes de gestió empresarial', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP11', 'description' => 'Formació i orientació laboral', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP12', 'description' => 'Empresa i iniciativa emprenedora', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP13', 'description' => 'Projecte de desenvolupament d’aplicacions multiplataforma', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '1', 'name' => 'MP14', 'description' => 'Formació en centres de treball (FCT)', 'created_at' => '2021-05-10 20:20:04'],

            // DAW
            ['id_course' => '2', 'name' => 'MP1', 'description' => 'Sistemes informàtics', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP2', 'description' => 'Bases de dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP3', 'description' => 'Programació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP4', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP5', 'description' => 'Entorns de desenvolupament', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP6', 'description' => 'Desenvolupament web en entorn client', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP7', 'description' => 'Desenvolupament web en entorn servidor', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP8', 'description' => 'Desplegament d’aplicacions web', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP9', 'description' => 'Disseny d’interfícies web', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP10', 'description' => 'Formació i orientació laboral', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP11', 'description' => 'Empresa i iniciativa emprenedora', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP12', 'description' => 'Projecte de desenvolupament d’aplicacions web', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '2', 'name' => 'MP13', 'description' => 'Formació en centres de treball (FCT)', 'created_at' => '2021-05-10 20:20:04'],
            
            // ASIX
            ['id_course' => '3', 'name' => 'MP1', 'description' => 'Implantació de sistemes operatius', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP2', 'description' => 'Gestió de bases de dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP3', 'description' => 'Programació bàsica', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP4', 'description' => 'Llenguatge de marques i sistemes de gestió d’informació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP5', 'description' => 'Fonaments de maquinari', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP6', 'description' => 'Administració de sistemes operatius', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP7', 'description' => 'Planificació i administració de xarxes', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP8', 'description' => 'Servei de xarxa i Internet', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP9', 'description' => 'Implantació d’aplicacions web', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP10', 'description' => 'Administració de sistemes gestors de bases de dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP11', 'description' => 'Seguretat i alta disponibilitat', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP12', 'description' => 'Formació i orientació laboral', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP13', 'description' => 'Empresa i iniciativa emprenedora', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP14', 'description' => 'Projecte d’administració de sistemes informàtics en xarxa', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '3', 'name' => 'MP15', 'description' => 'Formació en centres de treball (FCT)', 'created_at' => '2021-05-10 20:20:04'],
            
            // AISX-CI
            ['id_course' => '4', 'name' => 'MP1', 'description' => 'Implantació de sistemes operatius', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP2', 'description' => 'Gestió de bases de dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP3', 'description' => 'Programació bàsica', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP4', 'description' => 'Llenguatge de marques i sistemes de gestió d’informació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP5', 'description' => 'Fonaments de maquinari', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP6', 'description' => 'Administració de sistemes operatius', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP7', 'description' => 'Planificació i administració de xarxes', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP8', 'description' => 'Servei de xarxa i Internet', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP9', 'description' => 'Implantació d’aplicacions web', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP10', 'description' => 'Administració de sistemes gestors de bases de dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP11', 'description' => 'Seguretat i alta disponibilitat', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP12', 'description' => 'Formació i orientació laboral', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP13', 'description' => 'Empresa i iniciativa emprenedora', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP14', 'description' => 'Projecte d’administració de sistemes informàtics en xarxa', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP15', 'description' => 'Formació en centres de treball (FCT)', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP16', 'description' => 'Ciberseguretat i Hacking ètic', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '4', 'name' => 'MP17', 'description' => 'Seguretat en sistemes, xarxes i serveis', 'created_at' => '2021-05-10 20:20:04'],
            
            // DAM-VI
            ['id_course' => '5', 'name' => 'MP1', 'description' => 'Sistemes informàtics', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP2', 'description' => 'Bases de dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP3', 'description' => 'Programació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP4', 'description' => 'Llenguatges de marques i sistemes de gestió d’informació', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP5', 'description' => 'Entorns de desenvolupament', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP6', 'description' => 'Accés a dades', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP7', 'description' => 'Desenvolupament d’interfícies', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP8', 'description' => 'Programació multimèdia i dispositius mòbils', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP9', 'description' => 'Programació de serveis i processos', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP10', 'description' => 'Sistemes de gestió empresarial', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP11', 'description' => 'Formació i orientació laboral', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP12', 'description' => 'Empresa i iniciativa emprenedora', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP13', 'description' => 'Projecte de desenvolupament d’aplicacions multiplataforma, perfil videojocs i oci digital', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP14', 'description' => 'Formació en centres de treball (FCT)', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP15', 'description' => 'Game design', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP16', 'description' => 'Disseny 2D i 3D', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '5', 'name' => 'MP17', 'description' => 'Programació de videojocs 2D i 3D', 'created_at' => '2021-05-10 20:20:04'],
            
            // SMX
            ['id_course' => '6', 'name' => 'MP1', 'description' => 'Muntatge i manteniment d’equips', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP2', 'description' => 'Sistemes operatius monolloc', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP3', 'description' => 'Aplicacions ofimàtiques', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP4', 'description' => 'Sistemes operatius en xarxa', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP5', 'description' => 'Xarxes locals', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP6', 'description' => 'Seguretat informàtica', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP7', 'description' => 'Serveis de xarxa', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP8', 'description' => 'Aplicacions web', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP9', 'description' => 'Formació i orientació laboral (FOL)', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP10', 'description' => 'Empresa i iniciativa emprenedora (EIE)', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP11', 'description' => 'Anglès tècnic', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP12', 'description' => 'Síntesi', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP13', 'description' => 'Formació en centres de treball (FCT)', 'created_at' => '2021-05-10 20:20:04'],
            ['id_course' => '6', 'name' => 'MP14', 'description' => 'Programació', 'created_at' => '2021-05-10 20:20:04'],
        ];
        DB::table('modules')->insert($modules);
    }
}
