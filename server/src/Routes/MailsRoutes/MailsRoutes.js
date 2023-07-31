const {
  postHandlerCompra,
} = require('../../Handlers/HandlerMail/postHandlerCompra');

const router = require('express').Router();

router.post('/', postHandlerCompra);

module.exports = router;
