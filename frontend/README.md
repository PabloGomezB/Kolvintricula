# Proyecto Kolvintricula Frontend

Un formulario que permite a los futuros alumnos del INS Pedralbes realizar la matrícula de forma sencilla e intuitiva.

URL: http://www.kolvintricula.alumnes.iam.cat/

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

Instalar Node JS

```
https://nodejs.org/es/
```

### Instalación 🔧

Instalar dependecias del proyecto

```
npm install
```

Arrancar servidor local con puerto 3000

```
npm start
```

En este punto se te abrirá un ventana con el menú de matrícula.

## Estructura de carpetas

- build: Este directorio es donde se guardan los archivos compilados y listos para producción.
- node_modules: Directorio en el que se guardan las dependencias del proyecto.
- public: Aquí es donde se ponen los ficheros estáticos como el index.html y los iconos/imágenes. En el index.html es donde se renderiza react.
- src: Este directorio es donde se guardan los componentes de React.
  - Está compuesto por diferentes directorios-componentes, es decir, cada componente o conjunto de componentes es guardado en un directorio. Cada directorio tiene su index.js en el que exporta el componente principal.
- .editorconfig: Este fichero sirve para configurar el modo en el que se formatea un fichero y qué en qué tipo de ficheros actúa.
- .gitignore: Este fichero hace git no detecte e ignora cambios en el fichero o directorio que se le indica.
- package-lock.json: Fichero que se crea a partir de las dependencias de nuestras dependencias.
- package.json: Fichero importante que guarda las distintas dependencias de nuestro proyecto.
- README.md: Fichero que informa del proyecto,
- styleguide.config.js: Este fichero configura la documentación de Styleguidist.
- .env: Este fichero guarda las variables de entorno

## Documentación técnica

JSDOC: http://labs.iam.cat/~a18jorcalari/jsdoc/

Styleguidist: http://labs.iam.cat/~a18jorcalari/styleguidist/

## Configuración

Se ha creado un archivo .env donde se guardan las variables de entorno como la URL de la API de backend.

## Despliegue 📦

Para desplegar el proyecto primero hay hacer build

```
npm build
```

Luego en la carpeta /build se encontraran los archivos que se subiran a producción.

## Scripts disponibles

### `npm start`

Ejecuta la aplicación en modo de desarrollo.
Abra http://localhost:3000 para verlo en el navegador.

La página se recargará si realiza modificaciones.
También verá errores de lint en la consola.

### `npm build`

Compila la aplicación para producción en la carpeta de compilación.
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash.
¡Tu aplicación está lista para implementarse!

### `npm test`

Script para hacer pruebas y test.

### `npm eject`

Nota: esta es una operación unidireccional. Una vez que hagas `eject`, ¡no podrás regresar!

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede hacer `eject` en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (paquete web, Babel, ESLint, etc.) directamente en su proyecto para que tenga un control total sobre ellos. Todos los comandos, excepto el de expulsión, seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto, estás solo.

No es necesario que utilice la opción de expulsión. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a utilizar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para usarla.

### `npm styleguide`

Script para abrir un servidor local para la documentación de componentes de React

### `npm styleguide:build`

Script para compilar y minificar la documentación de React.

## Construido con 🛠️

- [Create-react-app](https://create-react-app.dev/) - Create React App es una forma oficialmente compatible de crear aplicaciones React de una sola página. Ofrece una configuración de construcción moderna sin configuración.
- [React](https://es.reactjs.org/) - Una biblioteca de JavaScript para construir interfaces de usuario SPA
- [NodeJS](https://nodejs.org/en/) - Node.js es un entorno de ejecución de JavaScript de código abierto y multiplataforma
- [NPM](https://www.npmjs.com/) - Manejador de dependecias
- [React Router](https://reactrouter.com/) - React Router es una colección de componentes de navegación que se componen declarativamente con su aplicación
- [Formik](https://formik.org/) - Formik is the world's most popular open source form library for React and React Native.
- [Material UI](https://material-ui.com/) - React componentes para un desarrollo web más rápido y sencillo.
- [Styleguidist](https://github.com/styleguidist/react-styleguidist) - React Styleguidist es un entorno de desarrollo de componentes con un servidor de desarrollo y una guía de estilo viva que puede compartir con su equipo.
- [Axios](https://github.com/axios/axios) - Cliente HTTP basado en promesas para el navegador y node.js
- [Prop Types](https://es.reactjs.org/docs/typechecking-with-proptypes.html) - Verificación de tipos con PropTypes
- [React Signature Canvas](https://github.com/agilgur5/react-signature-canvas) - Un componente React de firma
- [React Cookie Banner](https://github.com/buildo/react-cookie-banner/) - Un banner de cookies para React

## Autores ✒️

- **Jordi Callupe** - [a18jorcalari](https://github.com/a18jorcalari)
- **Kevin Larriega** - [a18kevlarpal](https://github.com/kevinlarriega)
- **Pablo Gómez** - [a18pabgombra](https://github.com/PabloGomezB)
