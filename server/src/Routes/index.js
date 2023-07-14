const {Router} = require('express');
const {prueba} = require('../Handlers/PruebaHandler');
const router = Router();

router.get('/', prueba); // * Mensaje de prueba

module.exports = router;
