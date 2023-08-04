const {
  salesHandler,
} = require("../../Handlers/HandlersSales/PostSalesHandler.js");
const {
  getAllSalesHandler,
  getSalesByReceiptStatHandler,
} = require("../../Handlers/HandlersSales/GetAllSalesHandler.js");
const {
  putSalesHandler,
} = require("../../Handlers/HandlersSales/PutSalesHandlers.js");

const router = require("express").Router();

router.post("/", salesHandler);
router.get("/", getAllSalesHandler);
router.get("/param", getSalesByReceiptStatHandler);
router.put("/:id", putSalesHandler);

module.exports = router;
