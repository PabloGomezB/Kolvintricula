<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustodiansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custodians', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_student')->unsigned();
            $table->enum('responsible', ['PADRE', 'MADRE', 'TUTOR']);
            $table->string('nif')->unique();
            $table->string('name', 255);
            $table->string('last_name1', 255);
            $table->string('last_name2', 255);
            $table->integer('mobile_number');
            $table->string('email');
            $table->foreign('id_student')->references('id')->on('students');
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
        Schema::dropIfExists('custodians');
    }
}
