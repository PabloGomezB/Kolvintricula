<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        $students = [
            ['nif' => '43216711V', 'name' => 'Albus', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2001-09-02', 'mobile_number' => '923373984', 'photo_path' => '', 'enrolment_status' => 'MATRICULADO', 'email_personal' => 'dumbledor@gmail.com', 'email_pedralbes' => 'a19albdumdum@inspedralbes.cat', 'created_at' => '2021-05-07 11:46:35'],
            ['nif' => '23015611C', 'name' => 'Aladin', 'last_name1' => 'Mustav', 'last_name2' => 'Gustav', 'date_birth' => '2004-05-05', 'mobile_number' => '923373534', 'photo_path' => '', 'enrolment_status' => 'MATRICULADO', 'email_personal' => 'ejemplo0@gmail.com', 'email_pedralbes' => 'a17aldgusmus@inspedralbes.cat', 'created_at' => '2021-05-07 11:59:35'],
            ['nif' => '33216711X', 'name' => 'Pedro', 'last_name1' => 'Perez', 'last_name2' => 'Perico', 'date_birth' => '1991-09-02', 'mobile_number' => '919373984', 'photo_path' => '', 'enrolment_status' => 'MATRICULADO', 'email_personal' => 'ejemplo1@gmail.com', 'email_pedralbes' => 'a19picapi@inspedralbes.cat', 'created_at' => '2021-05-07 11:32:35'],
            ['nif' => '73014211S', 'name' => 'Hannibal', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '1993-09-02', 'mobile_number' => '663373984', 'photo_path' => '', 'enrolment_status' => 'MATRICULADO', 'email_personal' => 'ejemplo2@gmail.com', 'email_pedralbes' => 'a20pichu@inspedralbes.cat', 'created_at' => '2021-05-07 11:47:35'],
            ['nif' => '93211671S', 'name' => 'Falcon', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2003-08-11', 'mobile_number' => '623373984', 'photo_path' => '', 'enrolment_status' => 'BORRADOR', 'email_personal' => 'ejemplo3@gmail.com', 'email_pedralbes' => 'a21vulcan@inspedralbes.cat', 'created_at' => '2021-05-07 11:21:35'],
            ['nif' => '43296711R', 'name' => 'Mario', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2001-06-11', 'mobile_number' => '923373984', 'photo_path' => '', 'enrolment_status' => 'MATRICULADO', 'email_personal' => 'ejemplo4@gmail.com', 'email_pedralbes' => 'a19pollol@inspedralbes.cat', 'created_at' => '2021-05-07 11:11:35'],
            ['nif' => '93256711G', 'name' => 'Lucas', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2001-06-09', 'mobile_number' => '923373984', 'photo_path' => '', 'enrolment_status' => 'PREMATRICULADO', 'email_personal' => 'ejemplo5@gmail.com', 'email_pedralbes' => 'a18pavol@inspedralbes.cat', 'created_at' => '2021-05-07 11:16:35'],
            ['nif' => '17206711P', 'name' => 'Ryu', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2004-05-03', 'mobile_number' => '912373984', 'photo_path' => '', 'enrolment_status' => 'BORRADOR', 'email_personal' => 'ejemplo6@gmail.com', 'email_pedralbes' => 'a19susanito@inspedralbes.cat', 'created_at' => '2021-05-07 11:36:35'],
            ['nif' => '73217991L', 'name' => 'Sancho', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2006-04-05', 'mobile_number' => '923373984', 'photo_path' => '', 'enrolment_status' => 'MATRICULADO', 'email_personal' => 'ejemplo7@gmail.com', 'email_pedralbes' => 'a20dfzll@inspedralbes.cat', 'created_at' => '2021-05-07 11:46:55'],
            ['nif' => '23216351J', 'name' => 'Sanson', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2003-03-07', 'mobile_number' => '973373984', 'photo_path' => '', 'enrolment_status' => 'RECHAZADO', 'email_personal' => 'ejemplo18@gmail.com', 'email_pedralbes' => 'a21ergfhj@inspedralbes.cat', 'created_at' => '2021-05-07 11:46:30'],
            ['nif' => '63216711N', 'name' => 'Maria', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2001-02-09', 'mobile_number' => '863373984', 'photo_path' => '', 'enrolment_status' => 'PREMATRICULADO', 'email_personal' => 'ejemplo9@gmail.com', 'email_pedralbes' => 'a18asdqwe@inspedralbes.cat', 'created_at' => '2021-05-07 11:41:35'],
            ['nif' => '43283711B', 'name' => 'Susan', 'last_name1' => 'Dumbledore', 'last_name2' => 'Dumbledore', 'date_birth' => '2001-01-02', 'mobile_number' => '2023373984', 'photo_path' => '', 'enrolment_status' => 'MATRICULADO', 'email_personal' => 'ejemplo10@gmail.com', 'email_pedralbes' => 'a19sssssss@inspedralbes.cat', 'created_at' => '2021-05-07 11:47:35'],

        ];
        DB::table('students')->insert($students);
    }
}
