const {
  postInventariosHandler,
} = require('../../Handlers/HandlerInventarios/PostInventariosHandler');
const {
  getInventariosHandler,
  getInventariosByIdHandler,
} = require('../../Handlers/HandlerInventarios/GetInventariosHandler');
const {
  putInventariosHandler,
} = require('../../Handlers/HandlerInventarios/PutInventariosHandler.js');
const {
  deleteHandlerInventarios,
} = require('../../Handlers/HandlerInventarios/DeleteInventariosHandler');
const {authMiddle} = require('../../Middleware/authMiddle');
const router = require('express').Router();

router.post('/', authMiddle, postInventariosHandler);
router.get('/', getInventariosHandler);
router.get('/:id', getInventariosByIdHandler);
router.put('/:id', authMiddle, putInventariosHandler);
router.delete('/:id', authMiddle, deleteHandlerInventarios);

module.exports = router;
