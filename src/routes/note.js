/* fichero6/Paso7 */

/*
En los ficheros de Rutas lo que haremos sera definir ese diccionario
de turas que le permitira al front acceder a las funcionalidades
que acabamos de definir en el controlador, ya que justo lo que necesita
el front es esa informacion que definimos, parseamos y depuramos en el
archivo de controlador.
*/

/*
Lo primero es definir Router como una herramienta mas de express
*/
const { Router } = require("express");

/* La instanciamos muy parecido a lo que hicimos con app = express() */
const router = Router();

/*
En esta linea importamos las funcionalidades del controlador de notas
que definimos anteriormente para poder asignarle una funcion a cada
ruta que definamos para este schema.
*/
const {
	getAllNotes,
	createNote,
	deleteNote,
	updateNote,
	getNote,
} = require("../controllers/noteController");

/*
Fichero6/Paso9 (Si aun no has revisado los pasos anteriores a este,
asume que este espacio esta en blanco)
Como ya vimos en el Paso8 esta ruta se complementa a la ruta general
que le definimos con nombre propio al schema notas por lo tanto
para que el front pueda "ejecutar" la funcion getAllNotes necesitaria
realizar una peticion get a la ruta:
http://localhost:5000/api/notes/
Mas adelante veremos mas tipos de rutas para que se entienda mejor.
*/
router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getNote).delete(deleteNote).put(updateNote);
/* Final Paso9 */

/*
Continuacion Paso7
Por ultimo exportamos las rutas para que estas puedan ser utilizadas
desde nuestra aplicacion y esta entienda que hay un schema que esta
conectado a la base de datos y tiene ciertas funcionalidades.
*/
module.exports = router;
