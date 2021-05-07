<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('type', ['ESO', 'BACHILLERATO', 'CFGM', 'CFGS']);
            $table->string('name',  255);

            $table->string('description', 1000);
            $table->enum('state', ['DESHABILITADO', 'BORRADOR', 'PREMATRICULA', 'MATRICULA']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
