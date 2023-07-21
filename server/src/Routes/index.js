const { Router } = require("express");
const users = require("./UsersRoutes/UsersRoutes.js");
const auth = require("./AuthRoutes/authRoutes.js");
const persons = require("./PersonsRoutes/PersonRoutes.js");

const filters = require("./FilterRoutes/FilterRoutes.js");

const router = Router();

/* `router.get('/', prueba);` está definiendo una ruta para una solicitud GET a la URL raíz ("/") de la
aplicación. Cuando se realiza una solicitud GET a la URL raíz, se ejecutará la función `prueba` del
módulo `PruebaHandler`. */
router.use("/users", users);
router.use("/auth", auth);
router.use("/persons", persons);

router.use("/filters", filters);

module.exports = router;
