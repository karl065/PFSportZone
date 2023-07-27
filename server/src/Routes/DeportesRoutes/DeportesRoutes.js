const {
  getHandlerDeportes,
} = require('../../Handlers/HandlersDeportes/getHandlerDeportes');
const {
  postHandlerDeporte,
} = require('../../Handlers/HandlersDeportes/postHandlerDeportes');

const router = require('express').Router();

router.post('/', postHandlerDeporte);
router.get('/', getHandlerDeportes);
router.get('/:id', getHandlerDeportes);

module.exports = router;
