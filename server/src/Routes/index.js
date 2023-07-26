const {Router} = require('express');
const users = require('./UsersRoutes/UsersRoutes.js');
const auth = require('./AuthRoutes/authRoutes.js');
const inventory = require('./InventariosRoutes/InventariosRoutes.js');
const filters = require('./FilterRoutes/FilterRoutes.js');
const category = require('./CategoriesRoutes/CategoriesRoutes.js');
const deporte = require('./DeportesRoutes/DeportesRoutes.js');
const carrito = require('./CarritoRoutes/CarritoRoutes.js');
const router = Router();

/* El código utiliza el enrutador Express para definir rutas para diferentes partes de la aplicación. */
router.use('/users', users);
router.use('/auth', auth);
router.use('/inventory', inventory);
router.use('/filters', filters);
router.use('/category', category);
router.use('/deporte', deporte);
router.use('/carrito', carrito);

module.exports = router;
