const {getHandlerUsers} = require('../../Handlers/HandlersUsers/GetUsers');
const {postHandlerUsers} = require('../../Handlers/HandlersUsers/PostUsers');

const router = require('express').Router();

router.post('/', postHandlerUsers);
router.get('/', getHandlerUsers);

module.exports = router;
