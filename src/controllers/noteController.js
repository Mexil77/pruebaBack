/* fichero5/Paso6 */

/*
Dentro de controller lo que haremos sera meter toda
la funcionalidad perse de cada uno de nuestros modelos,
es decir si el front pide notas, aqui iran todas las 
lineas de codigo referentes a traerlas de la base de
datos, filtrar las que no se quiera, depurar datos, etc.
para luego devolverlas al front.
*/

/* Definimos un controlador en blanco referente a notas */
let noteCtrl = {};

/*
Importamos el modelo que nos permitira comunicarnos con
la base de datos
*/
const Note = require("../models/Note");

/*
Definimos la primera de las funcionalidades que tendra
nuestro controlador que seria getAllNotes la cual usaremos
para devolver absolutamente todas las notas que hay dentro
de la base de datos sin importar de quien sean o que datos
tengan ya que no estamos metiendo ningun filtro.
Los objetos req y res que recibe la funcion por parametros
se refiere a lo que recibe la peticion y lo que respondera
por ejemplo:
Si quisieramos las notas con el userId = 1 ese dato estaria
dentro de la variable req y mediante esa variable podriamos
saber que el front pidio data mas especifica.
Pero como esta funcion devuelve absolutamente todo sin
restriccion por eso es que no estamos utilizando req para
nada, ya que el mismo front sabe que no deve mandar
informacion adicional para obtener absolutamente todas
las notas.
Por otro lado res, nos ayuda a saber que responder en caso
de que algo pase y nosotros podemos escribir lo que queramos
dentro de res.json(), la diferencia es que aqui como requerimos
devolver las notas, por eso es que se esta devolviendo la
variable notes ya que es la que guarda el resultado de haber
ido a buscar informacion del modelo Note.
*/
noteCtrl.getAllNotes = async (req, res) => {
	/* Llamada a la base de datos */
	let notes = await Note.find();
	/* Retorno de la informacion pedida */
	res.json(notes);
};

noteCtrl.createNote = async (req, res) => {
	const { userId, title, body } = req.body;
	const newNote = new Note({ userId, title, body });
	await newNote.save();
	res.json({ savedNote: true });
};

noteCtrl.deleteNote = async (req, res) => {
	const id = req.params.id;
	await Note.findByIdAndDelete(id);
	res.json({ deltedNote: true });
};

noteCtrl.updateNote = async (req, res) => {
	const id = req.params.id;
	const { title, body } = req.body;
	await Note.findByIdAndUpdate(id, { title, body });
	res.json({ updatedNote: true });
};

noteCtrl.getNote = async (req, res) => {
	const id = req.params.id;
	const note = await Note.findById(id);
	res.json(note);
};

/*
Ahora es necesario exportar el controlador o las funciones
ya que si bien ya sabemos que hacer, falta decirle al servidor
mediante que ruta estara disponible esta funcionalidad.
*/
module.exports = noteCtrl;
