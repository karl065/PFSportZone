const {
  getFilterHandler,
} = require("../../Filters/Handlers/FilterUsersHandlers/GetFilterHandler.js");

const router = require("express").Router();

router.get("/", getFilterHandler);

module.exports = router;
