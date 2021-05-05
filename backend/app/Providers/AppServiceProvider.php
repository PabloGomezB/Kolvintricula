<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Esto soluciona un bug a la hora de escribir en la base de datos
        Schema::defaultStringLength(191);

        // Esto soluciona un bug visual con el paginado
        Paginator::useBootstrap();
    }
}
