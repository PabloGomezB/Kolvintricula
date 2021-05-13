<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EnrolmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $enrolments = [
            ['id_student' => '1',
            'json_course_module_uf' => '{
                "student": {
                  "nif": "123456A",
                  "name": "Pablo",
                  "last_name1": "Gomez",
                  "last_name2": "Bravo",
                  "date_birth": "date",
                  "personal_email": "emailpersonal@gmail.com",
                  "student_email": "a18pabgombra@inspedralbes.cat",
                  "mobile_number": "683456723",
                  "photo_path": "qwery.jpg",
                  "enrolment_status": "MATRICULADO"
                },
                "custodians": [
                  {
                    "type": "PADRE",
                    "nif": "123456F",
                    "name": "Pedro",
                    "last_name1": "Gomez",
                    "last_name2": "Garcia",
                    "mobile_number": "627385298"
                  },
                  {
                    "type": "MADRE",
                    "nif": "7452346K",
                    "name": "María",
                    "last_name1": "Bravo",
                    "last_name2": "Ortíz",
                    "mobile_number": "623098745"
                  }
                ],
                "academic_data": [
                  {
                    "course": "DAW",
                    "modules": [
                      {
                        "MP1": [
                          "UF1",
                          "UF2",
                          "UF3"
                        ],
                        "MP2": [
                          "UF1",
                          "UF2"
                        ],
                        "MP3": [
                          "UF1"
                        ]
                      }
                    ]
                  }
                ]
              }','created_at' => '2021-05-10 20:20:04']
            // ['id_student' => '2', 'json_course_module_uf' => '', 'created_at' => '2021-05-10 20:20:04'],
            // ['id_student' => '3', 'json_course_module_uf' => '', 'created_at' => '2021-05-10 20:20:04'],
            // ['id_student' => '4', 'json_course_module_uf' => '', 'created_at' => '2021-05-10 20:20:04'],
        ];
        DB::table('enrolments')->insert($enrolments);
    }
}
