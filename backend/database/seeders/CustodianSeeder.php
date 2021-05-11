<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustodianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $custodians = [
            ['id_student' => '1', 'responsible' => 'PADRE', 'nif' => '1234567Q', 'name' => 'Jose', 'last_name1' => 'Perez', 'last_name2' => 'Reverte', 'mobile_number' => '674234985', 'email' => 'padre1@gmail.com', 'created_at' => '2021-05-10 20:20:04'],
            ['id_student' => '2', 'responsible' => 'MADRE', 'nif' => '1234567W', 'name' => 'Sara', 'last_name1' => 'García', 'last_name2' => 'Hernandez', 'mobile_number' => '622349800', 'email' => 'madre1@gmail.com', 'created_at' => '2021-05-10 20:20:04'],
            ['id_student' => '3', 'responsible' => 'TUTOR', 'nif' => '1234567E', 'name' => 'Martin', 'last_name1' => 'Luter', 'last_name2' => 'King', 'mobile_number' => '604256724', 'email' => 'tutor1@gmail.com', 'created_at' => '2021-05-10 20:20:04'],
            ['id_student' => '4', 'responsible' => 'MADRE', 'nif' => '1234567R', 'name' => 'Frida', 'last_name1' => 'Kahlo', 'last_name2' => 'Calderón', 'mobile_number' => '692004591', 'email' => 'madre2@gmail.com', 'created_at' => '2021-05-10 20:20:04']
        ];
        DB::table('custodians')->insert($custodians);
    }
}
