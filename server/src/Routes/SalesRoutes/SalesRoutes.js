const {
  salesHandler,
} = require("../../Handlers/HandlersSales/PostSalesHandler.js");
const {
  getAllSalesHandler,
} = require("../../Handlers/HandlersSales/GetAllSalesHandler.js");

const router = require("express").Router();

router.post("/", salesHandler);
router.get("/", getAllSalesHandler);

module.exports = router;
