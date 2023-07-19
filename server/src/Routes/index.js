const {Router} = require('express');
const {prueba} = require('../Handlers/PruebaHandler');
const router = Router();

router.use('/users', users);

module.exports = router;
