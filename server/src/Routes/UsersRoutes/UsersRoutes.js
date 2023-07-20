const {
  getHandlerUsers,
  getHandleUserID,
} = require('../../Handlers/HandlersUsers/GetUsers');
const {
  deleteHandlerUser,
} = require('../../Handlers/HandlersUsers/deleteUserHandler');
const {
  postUserDbHandler,
} = require('../../Handlers/HandlersUsers/postUserHandler');
const {
  putHandlerUser,
} = require('../../Handlers/HandlersUsers/putUsersHandler');

const router = require('express').Router();

router.post('/', postUserDbHandler);
router.get('/', getHandlerUsers);
router.get('/:id', getHandleUserID);
router.put('/:id', putHandlerUser);
router.delete('/:id', deleteHandlerUser);

module.exports = router;
