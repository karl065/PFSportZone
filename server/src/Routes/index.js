const {Router} = require('express');
const users = require('./UsersRoutes/UsersRoutes.js');
const auth = require('./AuthRoutes/authRoutes.js');
const inventory = require('./InventariosRoutes/InventariosRoutes.js');
const filters = require('./FilterRoutes/FilterRoutes.js');
const category = require('./CategoriesRoutes/CategoriesRoutes.js');
const deporte = require('./DeportesRoutes/DeportesRoutes.js');
const carrito = require('./CarritoRoutes/CarritoRoutes.js');
const productsIncome = require('./ProdsIncomeRoutes/ProdsIncomeRoutes.js');
const marca = require('./MarcaRoutes/MarcaRoutes.js');
const mercadopago = require('./RoutesMercadoPago/RoutesMercadoPago.js');
const mails = require('./MailsRoutes/MailsRoutes.js');
const ventas = require('./VentasRoutes/VentasRoutes.js');
const favorites = require('../Routes/FavoritosRoutes/FavoritosRoutes.js');
const reviews = require('./ReviewsRoutes/ReviewsRoutes.js');
const preguntas = require('./PreguntasRoutes/PreguntasRoutes.js');
const router = Router();

/* El código utiliza el enrutador Express para definir rutas para diferentes partes de la aplicación. */
router.use('/users', users);
router.use('/auth', auth);
router.use('/inventory', inventory);
router.use('/filters', filters);
router.use('/category', category);
router.use('/deporte', deporte);
router.use('/carrito', carrito);
router.use('/ingresarProductos', productsIncome);
router.use('/marca', marca);
router.use('/mercadopago', mercadopago);
router.use('/mails', mails);
router.use('/ventas', ventas);
router.use('/favorites', favorites);
router.use('/review', reviews);
router.use('/questions', preguntas);

module.exports = router;
