const {
  getFilterHandler,
  getFilterPriceRange,
} = require("../../Filters/Handlers/FilterUsersHandlers/GetFilterHandler.js");

const router = require("express").Router();

router.get("/", getFilterHandler);

router.get("/range", getFilterPriceRange);

module.exports = router;
