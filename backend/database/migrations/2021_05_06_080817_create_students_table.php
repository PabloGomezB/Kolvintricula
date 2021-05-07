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
            $table->id();
            $table->string('nif',  9)->unique();
            $table->string('name',  255);
            $table->string('last_name1',  255);
            $table->string('last_name2',  255);
            $table->date('date_birth');
            $table->integer('mobile_number',  9);
            $table->string('photo_path',  255);
            $table->enum('enrolment_status', ['MATRICULADO', 'BORRADOR', 'PREMATRICULADO', 'RECHAZADO']);
            $table->string('email')->unique();
            $table->string('email_pedralbes')->unique();
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
