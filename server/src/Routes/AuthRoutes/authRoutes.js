const express = require('express');

const {authMiddle} = require('../../Middleware/authMiddle');
const {
  handlerAuthenticate,
} = require('../../Handlers/HandlerAuth/HandlerAuthenticate');
const {
  handlerAuthenticated,
} = require('../../Handlers/HandlerAuth/HandlerAuthenticated');

const router = express.Router();

/* El código `router.post('/', handlerAuthenticate);` define una ruta para una solicitud POST a la URL
raíz ("/") del servidor. Cuando se realiza una solicitud POST a esta URL, se ejecutará la función
`handlerAuthenticate`. */
router.post('/', handlerAuthenticate);
/* El código `router.get('/', authMiddle, handlerAuthenticated);` define una ruta para una solicitud
GET a la URL raíz ("/") del servidor. Cuando se realiza una solicitud GET a esta URL, primero
ejecutará la función de middleware `authMiddle` y luego la función `handlerAuthenticated`. */
router.get('/', authMiddle, handlerAuthenticated);

module.exports = router;
