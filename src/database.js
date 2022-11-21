/* fichero3/paso3 */

/*
Importamos la tecnologia de mongoose, asi como
express nos ayudo a configurar un servidor para
poder decirle donde debe escuchar y demas cosas
la variable mongoose nos ayudara a configurar
la base de datos de mongodb que usaremos en
nuestro proyecto.
Es importante no confundir mongoose con mongoDB
ya que son cosas diferentes.

MongoDB: Es la tecnologia de base de datos que nos
permite almacenar nuestra informacion de manera
remota o local

Mongoose: Es una libreria de node que nos permite
configurar un servidor para que sepa donde y como
debe de escribir la informacion. Provee herramientas
para facilitarnos usar mongoDB.
*/
const mongoose = require("mongoose");

/*
Definimos la direccion url de nuestro cluster de
mongoDB.
Omite el process.env.MONGODB_URI, lo explicare en
la siguiente sesion.
*/
const URI = process.env.MONGODB_URI;

/*
Una de las erramientas de mongoose es justamente
establecer una coneccion con la base de datos.
Para esto debemos primero establecer los parametros
mediante los cuales se dara.
Usamos la funcion connect() para decirle dicha
configuracion, los parametros son:
URL de nuestro cluser
Un objeto json con las caracteristicas de nuestra
coneccion o base de datos.
*/
mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

/* Establecemos una coneccion */
const connection = mongoose.connection;

/* Abrimos esta coneccion con el metodo once*/
connection.once("open", () => {
	/*
	Si la coneccion no se da, este mensaje no se mostraria
	ya que el callback o funcion donde se esta esccribiendo este
	comentario que es el segundo argumento de la funcion once
	no se ejecutaria mientras la coneccion no se logre.
	*/
	console.log("DB is conected");
});
