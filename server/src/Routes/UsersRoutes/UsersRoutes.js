const {
  getHandlerUsers,
  getHandleUserID,
} = require('../../Handlers/HandlersUsers/GetUsers');
const {
  deleteHandlerUsuario,
} = require('../../Handlers/HandlersUsers/deleteUserHandler');
const {
  postUserDbHandler,
} = require('../../Handlers/HandlersUsers/postUserHandler');
const {
  putHandlerUsuarios,
} = require('../../Handlers/HandlersUsers/putUsersHandler');

const router = require('express').Router();

router.post('/', postUserDbHandler);
router.get('/', getHandlerUsers);
router.get('/:id', getHandleUserID);
router.put('/:id', putHandlerUsuarios);
router.delete('/:id', deleteHandlerUsuario);

module.exports = router;
