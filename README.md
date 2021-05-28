<p align="center">
<img src="http://labs.iam.cat/~a18pabgombra/Kolvintricula/doc/logo.png" width="400">
</p>
<p align="center">
<img align="left" src="https://www.imuko.co/wp-content/uploads/2020/11/React-logo.png" width="100">
<img 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/1200px-Logo.min.svg.png" width="100">
<img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/MariaDB_colour_logo.svg/1024px-MariaDB_colour_logo.svg.png" width="100">
</p>

# Kolvintrícula

Kolvintrícula es un proyecto que responde a una necesidad real del instituto público Pedralbes de Barcelona:    
Actualmente la realización de la matrícula en el centro requiere de tramitaciones que ralentizan mucho el proceso, llegando a ser incluso tedioso y confuso para los nuevos estudiantes.     
Es por eso que nace Kolvintrícula: "_una solución sencilla, rápida e intuitiva para que el alumno pueda realizar la matrícula sin complicaciones._"

### _Tabla de contenidos:_
* **[1]  [Resumen](#resumen-)**
* **[2]  [Estructura del proyecto](#estructura-del-proyecto-)**
* **[3] [Instalación](#instalación-)**
	* **[3.1] [Frontend](#frontend)**
	* **[3.2] [Backend](#backend)**
* **[4] [Estado actual del proyecto](#estado-actual-del-proyecto-)**
* **[5]  [Autores](#autores-%EF%B8%8F-)**

## Resumen 📋

Éste proyecto se divide en dos potentes aplicaciones claramente diferenciadas:
*   Un formulario que permite a los futuros alumnos del INS Pedralbes realizar la matrícula de forma sencilla e intuitiva.
*   Un panel de administración para los responsables del centro con todas las herramientas necesarias para gestionar los datos referentes a la matriculación como:
    * Los cursos disponibles en el centro.
    * Todos los módulos de dichos cursos y sus respectivas UFs.
    * Toda la información de los alumnos, sus responsables y la matrícula realizada.

Además se ha creado una API que dispone de diversas funcionalidades listas para ser usadas desde otra aplicación.  
**Página web de matriculación:** https://www.kolvintricula.alumnes.iam.cat  
**Página web de administración:** https://www.admintricula.alumnes.iam.cat  
**[Documentación de la API de Kolvintrícula](http://labs.iam.cat/~a18pabgombra/Kolvintricula/doc/API/html2-documentation-generated/)**

## Estructura del proyecto 📐

Las dos aplicaciones del proyecto no son independientes pues se complementan indispensablemente una a la otra; éstas son: la parte de _frontend_ y la parte de _backend_.

- **[Frontend:](./frontend "Frontend folder")**  
Construido sobre [React](https://es.reactjs.org/).  
Aplicación con la que el alumno va a interactuar y la responsable de gestionar y enviar los datos introducidos al servidor para que la matriculación sea un éxito.  
Consta principalmente de un formulario *user friendly*, dinámico  y sencillo que el alumno deberá completar para realizar la matrícula. 

- **[Backend:](./backend "Backend folder")**  
Construido sobre [Laravel](https://laravel.com/).      
Aplicación diseñada para los administrativos del centro con la finalizar de brindar una aplicación sencilla pero completa para gestionar toda la información referente a las matriculaciones del instituto.   
Consta de diversas funcionalidades y vistas para gestionar todos los datos referentes a la matrícula de forma sencilla e intuitiva para cualquier tipo de usuario.    
Hace a su vez la función de servidor ya que es la encargada de recibir los datos de la matrícula desde Frontend, procesarlos y almacenarlos correctamente en la base de datos.

- **Base de datos:**   
Gestionada por [MariaDB](https://mariadb.org/).     
La base del proyecto, de donde van a salir y entrar todos los datos necesarios para el correcto funcionamiento de las dos aplicaciones.  
Los datos más importantes que almacena y con los que se trabaja en el proyecto son:
	* Cursos
	* Módulos
	* Unidades Formativas (UF)
	* Alumnos
	* Responsables de los alumnos menores
	* Matrículas

## Instalación 💻

_En la siguiente sección se explica cómo instalar el proyecto únicamente para su desarrollo._   
_Si lo que buscas es **desplegar** las aplicaciones en tu servidor te invitamos a buscar la información en:  
[Cómo desplegar frontend](./frontend/README.md#despliegue-) y [Cómo desplegar backend](./backend/README.md#despliegue-)_

Para empezar a desarrollar en las aplicaciones utilizaremos **[Git](https://git-scm.com/)** para obtenerlas del repositorio:   
```> git clone https://github.com/PabloGomezB/Kolvintricula.git ```

### Frontend
Para desarrollar en frontend necesitas:   
-- [Node.js](https://nodejs.org/es/)

Una vez hemos clonado el proyecto abre, sobre la carpeta creada , **la consola de comandos** y ejecuta las siguientes líneas:   
```> cd ./frontend```   
```> npm install```   
```> npm start```   
Con esto tenemos todo lo necesario para empezar a desarrollar la aplicación de backend.

### Backend
Para desarrollar en backend necesitas tener instalado:   
-- [PHP 7.4 +](https://www.php.net/downloads.php)      
-- [Composer 2.0](https://getcomposer.org/)   

Una vez hemos clonado el proyecto abre, sobre la carpeta creada , **la consola de comandos** y ejecuta las siguientes líneas:   
```> cd ./backend```   
```> composer install```   
```> php artisan serve```   
Con esto tenemos todo lo necesario para empezar a desarrollar la aplicación de backend.  

## Estado actual del proyecto 💡

Actualmente el proyecto está en producción y es 100% funcional. Sin embargo somos conscientes que tiene una serie de limitaciones y bugs sobre los que trabajaremos en versiones futuras.    
-   **Front:**     
	- Cuando el alumno se inscribe en dos cursos se envía solo el número del último año al que haya hecho clic.  
	-  Cuando un estudiante carga sus datos para hacer la matrícula se hace un _update_ a sus datos, pero no a la matrícula. Por lo que se crean dos matrículas para el mismo alumno.   
   (En back, cuando seleccionas al alumno, se muestra la última matrícula añadida).   
	- Si se marcan todas las UF y se vuelven a desmarcar, en el siguiente paso no se enviarán todas las UF marcadas de forma automática como debería.   
    
-  **Back:**     
	- Existe la posibilidad de que al hacer la matrícula el correo del instituto resultante del nuevo alumno ya exista en la base de datos. En tal caso al finalizar la matrícula daría error ya que deben ser únicos.    
	- Al editar un alumno no se obtiene la imagen que ya tiene asignada y te obliga a cambiarla para poder guardar los cambios.
	- Se echan en falta avisos para indicar al usuario que los cambios se han realizado correctamente.
	- El buscador en las tablas solo filtra los datos que aparecen en la página actual, no entre todos los resultados disponibles.      
	- El botón de añadir módulos no funciona desde sus vistas.    

## Autores ✒️

- **Pablo Gómez Bravo**   
-- a18pabgombra@inpedralbes.cat   
-- https://github.com/PabloGomezB  

- **Jordi Callupe Arias**  
--   a18pabgombra@inpedralbes.cat  
-- https://github.com/a18jorcalari  

- **Ruben Oncina Lopez**  
--   a18rubonclop@inpedralbes.cat  
-- https://github.com/SnowMan3sixty  

- **Angel Miguel García Vicente**  
-- a18anggarvic@inpedralbes.cat  
-- https://github.com/AngelMiguel2020  

- **Kevin Larriega Palomino**  
--   a18kevlarpal@inpedralbes.cat  
-- https://github.com/kevinlarriega  
