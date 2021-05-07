<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Kolvintrícula

Kolvintrícula es una aplicación multitarea, con dos funciones muy claras:

-   Un web que permita a los alunos del Institutos Pedralbes y a los futuros alumnos.
-   Un panel de administación para los administradores del centro y secretaría para que puedan modificar la matrícula y poder gestionar el proceso de matrícula.
    La web de referencia es [Institut Pedralbel](https://www.institutpedralbes.cat/).
    La web de la matrícula es [Índice Matrícula](https://www.Kolvintricula.alumnes.cat/).
    La web de admin es [Web Admin](http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/).

## Learning Kolvintrícula

Este proyecto utilizamos las sigienes tecnologías
-Backend:
*PhpMyadmin
*Laravel

-Frontend
\*React

## Plugins Usados

-   \*\*[Data Tables](datatables.net/)(Añade muchas funcionalidades a las tablas)Laravel

### Readme especificos de cada proyecto

-   **[Backend](poner link)**
-   **[Frontend](poner link)**

## Contributing

-   a18jolcalari@inpedralbes.cat
-   a18pabgombra@inpedralbes.cat
-   a18rubonclop@inpedralbes.cat
-   a18kevlarpal@inpedralbes.cat
-   a18anggarvic@inpedralbes.cat

## Code of Conduct

Todo el proyecto sigue las buenas practicas acordadas por todos los mienbros del equipo.

## Security Vulnerabilities & Cookies

Todos los campos han sido securizados. El uso de cookies es para uso exclusivo del proyecto. En caso de cualquier problema de suguridad enviar un correo a a18pabgombra@inpedralbes.cat.

## License

Todos los derechos pertenecen Kolvin Corp.
Director: Jordi Callupe.
Mienbros: Vin Diesel, Iriana; Ángel Miguel

## Lanzar servidor sin WSL2

-   Situate dentro de la carpeta del proyecto y en cmd ejecuta: `php -S 0.0.0.0:8080 -t public`. Ahora el servidor se encuentra en [http://localhost:8080](http://localhost:8080)

[Fuente](https://r00t4bl3.com/post/how-to-run-laravel-in-windows-10-using-wsl-2-and-ubuntu-20-04)

### How ruben make it work

-   Rename .env.example file to .envinside your project root and fill the database information. (windows wont let you do it, so you have to open your console cd your project root directory and run mv .env.example .env )
-   Open the console and cd your project root directory
-   Run composer install or php composer.phar install
-   Run php artisan key:generate
-   Run php artisan migrate
-   Run php artisan db:seed to run seeders, if any.
-   Run php artisan serve
