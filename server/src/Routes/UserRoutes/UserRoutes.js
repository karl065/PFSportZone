const { Router } = require("express");
const {
  postUserDbHandler,
} = require("../../Handlers/HandlersUsers/postUserHandler.js");

const router = Router();

router.post("/", postUserDbHandler);

module.exports = router;
