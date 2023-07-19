/* El código importa varias funciones y objetos de diferentes módulos y los asigna a variables mediante
la asignación de desestructuración. */
const { Router } = require("express");
const { prueba } = require("../Handlers/PruebaHandler");
const { postUserDbHandler } = require("../Handlers/postUserHandler");
const {
  getValidateUserPasswordHandler,
} = require("../Handlers/getValidateUPHandler");
const router = Router();

/* `router.get('/', prueba);` está definiendo una ruta para una solicitud GET a la URL raíz ("/") de la
aplicación. Cuando se realiza una solicitud GET a la URL raíz, se ejecutará la función `prueba` del
módulo `PruebaHandler`. */
router.get("/", prueba);

/* `router.post("/registry", postUserDbHandler);` está definiendo una ruta para una solicitud POST a la
URL "/registry" de la aplicación. Cuando se realiza una solicitud POST a la URL "/registry",
ejecutará la función `postUserDbHandler` desde el módulo `postUserHandler`. */
router.post("/registry", postUserDbHandler);

/* La línea `router.get("/login", getValidateUserPasswordHandler);` define una ruta para una solicitud
GET a la URL "/login" de la aplicación. Cuando se realiza una solicitud GET a la URL "/login",
ejecutará la función `getValidateUserPasswordHandler` desde el módulo `getValidateUPHandler`. */
router.get("/login", getValidateUserPasswordHandler);

module.exports = router;
