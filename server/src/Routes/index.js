const {Router} = require('express');
const users = require('./UsersRoutes/UsersRoutes.js');
const auth = require('./AuthRoutes/authRoutes.js');
const persons = require('./PersonsRoutes/PersonRoutes.js');
const inventory = require('./InventariosRoutes/InventariosRoutes.js');
const filters = require('./FilterRoutes/FilterRoutes.js');
const category = require('./CategoriesRoutes/CategoriesRoutes.js');
const router = Router();

/* `router.get('/', prueba);` está definiendo una ruta para una solicitud GET a la URL raíz ("/") de la
aplicación. Cuando se realiza una solicitud GET a la URL raíz, se ejecutará la función `prueba` del
módulo `PruebaHandler`. */
router.use('/users', users);
router.use('/auth', auth);
router.use('/inventory', inventory);
router.use('/persons', persons);
router.use('/filters', filters);
router.use('/category', category);

module.exports = router;
