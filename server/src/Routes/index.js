const {Router} = require('express');
const users = require('./UsersRoutes/UsersRoutes.js');
const auth = require('./AuthRoutes/authRoutes.js');
const persons = require('./PersonsRoutes/PersonRoutes.js');
const inventory = require('./InventariosRoutes/InventariosRoutes.js');
const filters = require('./FilterRoutes/FilterRoutes.js');
const category = require('./CategoriesRoutes/CategoriesRoutes.js');
const router = Router();

router.use('/users', users);
router.use('/auth', auth);
router.use('/inventory', inventory);
router.use('/persons', persons);
router.use('/filters', filters);
router.use('/category', category);

module.exports = router;
