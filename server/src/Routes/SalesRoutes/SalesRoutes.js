const {
  salesHandler,
} = require("../../Handlers/HandlersSales/PostSalesHandler.js");
const {
  getAllSalesHandler,
} = require("../../Handlers/HandlersSales/GetAllSalesHandler.js");
const {
  putSalesHandler,
} = require("../../Handlers/HandlersSales/PutSalesHandler.js");

const router = require("express").Router();

router.post("/", salesHandler);
router.get("/", getAllSalesHandler);
router.put("/:id",putSalesHandler);

module.exports = router;
