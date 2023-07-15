const {Router} = require('express');
const {prueba} = require('../Handlers/PruebaHandler');
const router = Router();

/* `router.get('/', prueba);` está definiendo una ruta para una solicitud GET a la URL raíz ("/") de la
aplicación. Cuando se realiza una solicitud GET a la URL raíz, se ejecutará la función `prueba` del
módulo `PruebaHandler`. */
router.get('/', prueba);

module.exports = router;
