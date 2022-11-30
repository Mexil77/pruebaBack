/* fichero4/Paso5 */

/*
Los Schemas tienen que ver con la base de datos y la forma en la cual
nosotros vamos a organizar los datos en la base de datos, ya que debemos
tener cierto control de la informacion.
*/

/*
Utilizamos las herramientas de mongoose que serian Schema y model
*/
const { Schema, model } = require("mongoose");

/*
Schema nos permitira definit un tipo de tabla que mongo pueda
entender para poder nosotros guardar los datos de la forma que mejor nos
convenga segun nuestra aplicacion, aqui podemos meter dentro del primer
objeto json cuantos datos queramos ya que es como nosotros queremos definir
nuestra trabla de notas, cada una de ellas debe tener los datos que
estamos definiendo, aunque estrictamente no le estemos diciendo que sea
obligattorio que los tenga todos lo ideal es que si los tenga.
*/
const NoteSchema = new Schema(
	{
		userId: String,
		title: String,
		body: String,
	},
	{
		timestamps: true,
	}
	/*
	En este segundo objeto le decimos que caracteristicas automaticas que
	ya vienen precargadas en mongoDB queremos agregar, como por ejemplo aqui
	estamos agregando que nos agrege la fecha de creacion en automatico cuando
	un dato de este tipo se guarde.
	*/
);

/*
Por ultimo usamos model para exportar un modelo, esto nos permitira que nuestro
codigo entienda que es un modelo de nota y mediante este modelo podemos usar
las funcionalidades de guardar, buscar, editar y demas, con su respectiva
notacion.
*/
module.exports = model("Note", NoteSchema);

/*
De manera resumida.
Schema es una maqueta de los datos.
Model es un objeto que nos servira en el codigo para realizar acciones con la
base de datos y este tipo de dato en particular.
*/
