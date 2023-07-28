const {
  handlerCrearOrden,
} = require('../../Handlers/HandlerMercadoPago/HandlerCrearOrden');
const failure = require('../../Handlers/HandlerMercadoPago/HandlerFailure');
const notification = require('../../Handlers/HandlerMercadoPago/HandlerNotification');
const pending = require('../../Handlers/HandlerMercadoPago/HandlerPending');
const success = require('../../Handlers/HandlerMercadoPago/HandlerSuccess');

const router = require('express').Router();

router.post('/', handlerCrearOrden);
router.get('/success', success);
router.get('/failure', failure);
router.get('/pending', pending);

router.post('/notification', notification);

module.exports = router;
