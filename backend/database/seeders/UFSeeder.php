<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UFSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u_f_s = [
            ['id_module' => '1', 'name' => 'UF1', 'hours' => '40', 'year' => '1', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '1', 'name' => 'UF2', 'hours' => '27', 'year' => '2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '2', 'name' => 'UF1', 'hours' => '58', 'year' => '2', 'created_at' => '2021-05-10 20:20:04'],
            ['id_module' => '2', 'name' => 'UF2', 'hours' => '36', 'year' => '1', 'created_at' => '2021-05-10 20:20:04']
        ];
        DB::table('u_f_s')->insert($u_f_s);
    }
}
