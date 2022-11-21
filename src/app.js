/* Fichero1/Paso1 */

/*
Empesamos configurando la app.
Le llamamos app al programa que se va a encargar
de gestionar nuestra informacion como por ejemplo
que tipo de datos alvergara, por medio de que rutas
vamos a optener dicha informacion, seguridad, etc.
*/

/*
Primero es express
Esta libreria o framework se encarga de proveernos
todas las funciones para arrancar una aplicacion en
modo servidor, dicho de otra forma es el encargado
de que podamos hacer en pocas lineas de codigo toda
la configuracion que comentamos arriba.
*/
const express = require("express");

/* No es importante mencionar */
const cors = require("cors");

/*
Una vez traida la tecnologia "instanciamos" o creamos
la app llamando la funcion express(), esto quiere decir
que pudimos inclucive hacer algo como esto:
const app2 = express();
const app3 = express();
const app4 = express();
y esto haria que cada una de esas variables app# fuera una
aplicacion de servidor independiente y poder configurarla
indivudualmente, en nuestro caso solo necesitamos una
por lo tanto nos quedamos con:
const app = express();
*/
const app = express();

/*
Aqui veremos caracteristicas que tendra la aplicacion,
en este caso la unica que estamos agregando el puerto
por el cual estara escuchando, todas las aplicaciones
al correr en computadoras deben escuchar por un puerto
en nuestro caso estamos asignando el puerto 5000
*/
/* Setings */
app.set("port", 5000);
/*
El metodo SET se usa para ir agregando caracteristicas o valores
a la instancia de express que declaramos, es lo equivalente
a haber hecho algo como esto:
app equivale a:
{}

app.set("port", 5000);

app ahora equivale a:
{
	port: 5000
}

app.set("userNomber", 123456);

app ahora equivale a:
{
	port: 5000,
	userNumber: 123456
}
No es literal, pero si lo entienden asi es suficiente
*/

/*
Aqui solo le decimos en que formato queremos que lea y entregue
la informacion.
*/
/* Midelwares */
app.use(cors());
app.use(express.json());
/*
Use es parecido a Set, Repito que la explicacion de
antes no es literal, solo es una guia.
*/

/*
Fichero1/Paso8 (Si aun no has revisado los pasos anteriores a este,
asume que este espacio esta en blanco)

Aqui definimos las rutas mediante las cuales accederemos a
la informacion que nos provee los Schemas de mongodb que 
viene ya preparada por el formato que le haya dado el
Controller de la tabla.
En este caso solo tenemos un esquema: Notas. Por lo tanto
no necesitamos mas que una sola ruta.
Recuerda que la ruta de nuestra app empieza en:
http://localhost:5000
a partir de ahi le iremos pegando mas y mas rutas.
Similar al front y react router, segun el componente que
queriamos pintar, le dabamos una ruta especifica a ese
componente.
Pues aqui es parecido, le damos la ruta:
/api/notes
para renderizar el enrutamiento del Schema Notes, por eso
requerimos que es lo equivalente a importar el componente
del enrutamiento Note.
Lo que nos deja con una ruta final como esta:
http://localhost:5000/api/notes
*/
/* Routes */
app.use("/api/notes", require("./routes/note"));
/* Final Paso8 */

/* Continuacion Paso1 */
/*
Por ultimo exportamos el componente de la app para poder
usarlo en index.js ya que sera el encargado de arrancar
el servidor.
*/
module.exports = app;
