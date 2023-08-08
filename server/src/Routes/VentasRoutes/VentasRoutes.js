const {
  getHandlerVentas,
  getHandlerVentasID,
} = require('../../Handlers/HandlerVentas/GetHandlerVentas');

const router = require('express').Router();

router.get('/', getHandlerVentas);
router.get('/:id', getHandlerVentasID);

module.exports = router;
