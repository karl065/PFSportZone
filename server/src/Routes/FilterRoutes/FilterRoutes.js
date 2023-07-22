const {
  getFilterHandler,
  getFilterStockPriceRange,
} = require("../../Filters/Handlers/FilterUsersHandlers/GetFilterHandler.js");

const router = require("express").Router();

router.get("/", getFilterHandler);

router.get("/prc", getFilterStockPriceRange);

module.exports = router;
