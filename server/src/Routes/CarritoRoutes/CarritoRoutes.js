const {
  getHandlerCarrito,
  getHandlerCarritoID,
} = require('../../Handlers/HandlerCarrito/getHandlerCarrito');
const {
  postHandlerCarrito,
} = require('../../Handlers/HandlerCarrito/postHandlerCarrito');

const router = require('express').Router();

router.get('/', getHandlerCarrito);
router.get('/:id', getHandlerCarritoID);
router.post('/', postHandlerCarrito);

module.exports = router;
