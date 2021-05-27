# Proyecto Kolvintricula Backend

Aplicación para administrar la información de las matriculas del centro y sus alumnos.
También sirve a su vez de API REST para que el frontend pueda comunicarse correctamente con éste proyecto.

URL: https://www.admintricula.alumnes.iam.cat/

## Montando el entorno 📐

Para que el proyecto funcione correctamente necesitaras tener instalado en tu maquina:

-- [PHP 7.4 +](https://www.php.net/downloads.php)      
-- [Composer 2.0](https://getcomposer.org/)  

Una vez hemos clonado el proyecto abre la carpeta del repositorio y en **la consola de comandos** y ejecuta las siguientes líneas:   
```> cd ./backend```  : Te desplaza a la carpeta que contiene todos los componentes de backend.    
```> composer install``` : Analiza las dependencias del proyecto e instala todo lo necesario.     
```> php artisan serve``` : Inicia el servidor de pruebas.  

Con esto tenemos todo lo necesario para empezar a desarrollar la aplicación de backend. 
Por defecto el servidor arranca en [http://localhost:8000](http://localhost:8000)  

## Despliegue 🚀

Para desplegar el proyecto correctamente sigue los siguientes pasos: 

-  Copia todos los archivos de la carpeta `./backend` **excepto** la carpeta **vendor**.
-  Conectate al servidor de la forma que te resulte más cómoda (ej: SSH).
-  Concede todos los permisos a la carpeta `./backend/storage` y `./backend/public/uploads` para que laravel pueda modificar archivos en dichas rutas.
-  Ejecuta el comando ```> composer install``` en la ruta `./backend`
-  Abre el archivo `./backend/.env` y modifica la línia 4 `APP_DEBUG=true` => `APP_DEBUG=false` para evitar que aparezca la debug bar de laravel.

## Comandos de artisan 💻

Para ejecutar comandos artisan necesitas encontrarte en la carpeta `/backend` del proyecto

`> php artisan list` : Muestra una lista de todos los comandos que ofrece artisan   
`>  php artisan make:controller "controllerName"` : Crea la base de un controlador con el nombre indicado.   
`> php artisan make:model "modelName"` : Crea la base de un modelo con el nombre indicado   
`> php artisan make:migration "migrationName"` : Crea un fichero de migración para la base de datos.   
`> php artisan migrate` : Ejecuta la próxima migración.   
`> php artisan migrate:rollback` : Retrocede una migración hacia atras.   
`> php artisan migrate:reset` : Reinicia la base de datos por completo.   
`> php artisan make:seeder "SeederName"` : Crea la estructura basica de un seeder   
`> php artisan db:seed` : Ejecuta los seeders del proyecto.   
`> php artisan make:test "TestName"` : Crea la estructura basica de un test   
`> php artisan key:generate` : Genera la variable APP_KEY en el archivo .env     


## Construido con 🛠️

- [Laravel-DOM-PDF](https://github.com/barryvdh/laravel-dompdf) - Extensión de Laravel para generar PDFs dentro del proyecto.
- [Doctrine DBAL](https://github.com/doctrine/dbal) - Extensión que ofrece una capa de abstracción de base de datos.
- [Laravel Trusted Proxy](https://github.com/fideloper/TrustedProxy) - Extensión de configuración de proxy para generar las urls de forma correcta.
- [Laravel CORS Middleware](https://github.com/fruitcake/laravel-cors) - Extensión para la configuración de un middleware que deniegue el acceso a las rutas si no estas loggeado.
- [Guzzle Http](https://github.com/guzzle/guzzle) - Herramienta de simplificación para las peticiones Https.
- [Laravel Framework](https://github.com/laravel/framework) - Dependencia bàsica de un proyecto en Laravel.
- [Laravel Tinker](https://github.com/laravel/tinker) - Extensión que incorpora un REPL(Read-Eval-Print-Loop).
- [Laravel to UML](https://github.com/andyabih/laravel-to-uml) - Autogenerador del diagrama UML del proyecto.
- [Laravel DebugBar](https://github.com/barryvdh/laravel-debugbar) - Barra de debugging para laravel.
- [Facade Ignition](https://github.com/facade/ignition) - Pagina de error para proyectos Laravel
- [FakerPHP Faker](https://fakerphp.github.io/) - Generador de datos en php
- [Laravel Breeze](https://github.com/laravel/breeze) - Punto de partida minimalista para una aplicación con Autenticación.
- [Laravel Sail](https://github.com/laravel/sail) - Herramienta para desarollar un proyecto Laravel usando Docker
- [Mockery Mockery](https://github.com/mockery/mockery) - Framework sencillo para usar en test de phpUnit
- [Nunomaduro Collision](https://github.com/nunomaduro/collision) - Paquete para ofrecer mejores mensajes de error.
- [PHP Unit](https://phpunit.de/getting-started/phpunit-7.html) - Herramienta para crear tests en lenguaje php.
- [Tailwind CSS](https://tailwindcss.com/docs/guides/laravel) - Framework de css
- [Full Calendar](https://fullcalendar.io/) - FrameWork para generar un calendario completamente funcional de forma sencilla .
- [Laravel Datatables](https://datatables.yajrabox.com/) - Herramienta para generar y gestionar tablas de forma sencilla.


## Autores ✒️

- **Pablo Gómez** - [a18pabgombra](https://github.com/PabloGomezB)
- **Angel Miguel García Vicente** - [a18anggarvic](https://github.com/AngelMiguel2020)
- **Ruben Oncina Lopez** - [a18rubonclop](https://github.com/SnowMan3sixty)
