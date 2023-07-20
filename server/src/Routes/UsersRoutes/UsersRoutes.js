const { getHandlerUsers } = require("../../Handlers/HandlersUsers/GetUsers");
const {
  postUserDbHandler,
} = require("../../Handlers/HandlersUsers/postUserHandler");

const router = require("express").Router();

router.post("/", postUserDbHandler);
router.get("/", getHandlerUsers);

module.exports = router;
