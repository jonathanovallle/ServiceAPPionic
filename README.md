# ServiceAPPionic
## Instalacion 🔧: 
* [Npm](https://www.npmjs.com/) - Para el gestor de paquetes
* [NodeJs](https://nodejs.org/en/) - Para el back
* [mySql](https://www.mamp.info/en/windows/) - Base de datos(yo he utilizado mamp)

## Configuracion ⚙️
Una vez se tengan todo instalado y el repositorio clonado con
```
git clone https://github.com/jonathanovallle/ServiceAPPionic.git
```
el siguiente paso es en nuestra terminal ejecutar
```
npm install
```
eso instalara todos los paquetes de la app y despues ejecutar
```
npm update
```
Despues de todo eso necesitaremos importar el archivo sql a nuestra base de datos, una vez lo tengamos si necesitamos cambiar algo de la conexion de base de datos lo debemos de hacer en el fichero server.js
```
var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user:'root',
    password:'root',
    database:'pulpo'
})
```

## Comenzando 🚀
Abrimos una terminal y ejecutamos el comando
```
node server.js              
```
Para levantar el servidor y despues ejecutaremos
```
ionic serve --proxy-config proxy.config.json 
```
para arrancar la aplicacion
