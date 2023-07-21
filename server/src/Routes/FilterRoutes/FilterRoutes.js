const {
  getUsersFilterHandler,
} = require("../../Filters/Handlers/FilterUsersHandlers/GetUsersFilterHandler.js");

const router = require("express").Router();

router.get("/", getUsersFilterHandler);

module.exports = router;
