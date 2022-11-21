/* Fichero2/Paso2 */

/*
Importamos o requerimos las tecnologias de
configuracion de dotenv.
No es muy importante.
*/
require("dotenv").config();

/*
Aqui puede venir la primer duda y e ahi la
importancia de seguir los pasos marcados en
los comentarios.
Debajo podemos ver un require casi identico
al del fichero app.js, la diferencia es que
aqui estamos importanto o requiriendo la
aplicacion con toda la configuracion que le
dimos en el fichero app.js es decir algo asi:

const express = require('express');
const app = express();
app es una aplicacion en blanco, sin puerto ni
nada por el estilo

const app = require('./app');
app es una aplicacion con su puerto ya configurado
5000 y mas cosas como rutas y demas que se
hicieron en el fichero app.js.
*/
const app = require("./app");

/*
Fichero2/Paso4 (Si aun no has revisado los pasos
anteriores a este, asume que este espacio esta en blanco)

Aqui importamos toda la configuracion de la base
de datos que ya se hizo en el archivo database.js
para aplicarla en el servidor y que este sepa que
base de datos debe usar.
*/
require("./database");
/* Final paso4 */

/* Continuacion Paso2 */
/*
Aqui lo unico que hacemos es definir una funcion
que sera la encargada de correr todo el servidor
que no es mas que una funcion que ejecute la funcion
listen de app que recordemos que es una aplicacion
de express para que esta de quede escuchando cualquier
peticion que le llegue para poder devolver la informacion
necesaria.
*/
async function main() {
	await app.listen(app.get("port"));
	console.log(`Server on port ${app.get("port")}`);
	/* Asi como usamos set para guardar variables utilizamos
	get para obtener el valor de las variables guardadas con set*/
}

/* Corremos la funcion o lo equivalente el servidor. */
main();

/*
Como pueden ver index.js solo se encarga de traer todos los
elementos necesarios para que el servidor este corriendo
correctamente y sepa a donde dirigir las peticiones que el
front le hara.
*/
