<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUFSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('u_f_s', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_module')->unsigned();
            $table->string('name');
            $table->integer('hours');
            $table->enum('year', ['1','2']);
            $table->foreign('id_module')->references('id')->on('modules');
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
        Schema::dropIfExists('u_f_s');
    }
}
