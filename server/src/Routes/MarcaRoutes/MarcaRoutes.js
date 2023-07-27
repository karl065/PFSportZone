const {
  getHandlerMarca,
  getHandlerMarcaId,
} = require('../../Handlers/HandlerMarcas/getHandlerMarca');
const {
  postHandlerMarca,
} = require('../../Handlers/HandlerMarcas/postHandlerMarca');

const router = require('express').Router();

router.post('/', postHandlerMarca);
router.get('/', getHandlerMarca);
router.get('/:id', getHandlerMarcaId);

module.exports = router;
