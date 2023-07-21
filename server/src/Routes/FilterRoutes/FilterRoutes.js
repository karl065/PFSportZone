const {
  getUsersFilterHandler,
} = require("../../Filters/Handlers/FilterUsersHandlers/GetUsersFilterHandler.js");
const {
  getStockFilterHandler,
} = require("../../Filters/Handlers/FilterUsersHandlers/GetStockFilterHandler.js");

const router = require("express").Router();

router.get("/", getUsersFilterHandler);
router.get("/status", getStockFilterHandler);

module.exports = router;
