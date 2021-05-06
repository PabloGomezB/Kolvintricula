<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstudiosTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('estudios', function (Blueprint $table) {
            $table->id();
            $table->enum('tipo', ['ESO', 'BACHILLERATO', 'CFGM', 'CFGS']);
            $table->string('nombre', length = 255);
            $table->enum('estado', ['MATRICULA', 'DESHABILITADO', 'BORRADOR', 'PREMATRICULA']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('estudios');
    }
}
