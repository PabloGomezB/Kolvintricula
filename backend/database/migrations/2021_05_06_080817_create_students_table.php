<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('students', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nif')->unique();
            $table->string('name', 255);
            $table->string('last_name1', 255);
            $table->string('last_name2', 255);
            $table->date('date_birth');
            $table->integer('mobile_number');
            $table->string('photo_path', 255)->nullable();
            $table->enum('enrolment_status', ['MATRICULADO', 'BORRADOR', 'PREMATRICULADO', 'RECHAZADO']);
            $table->string('email_personal')->unique();
            $table->string('email_pedralbes')->unique()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('students');
    }
}
