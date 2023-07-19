const {Router} = require('express');
const users = require('./UsersRoutes/UsersRoutes.js');
const auth = require('./AuthRoutes/authRoutes.js');
const router = Router();

router.use('/users', users);
/* `router.use('/auth', auth);` está definiendo una ruta para cualquier solicitud que comience con
"/auth". Cuando se realiza una solicitud a una URL que comienza con "/ auth", el enrutador utilizará
el middleware definido en el módulo `auth` para manejar la solicitud. */
router.use('/auth', auth);

module.exports = router;
