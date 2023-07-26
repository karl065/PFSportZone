const {
  getAllProdsHandler,
} = require("../../Handlers/HandlersProdsIncome/GetProdsIncomeHandler.js");
const {
  postProdsIncomeHandler,
} = require("../../Handlers/HandlersProdsIncome/PostProdsIncomeHandler.js");

const router = require("express").Router();

router.post("/", postProdsIncomeHandler);
router.get("/", getAllProdsHandler);

module.exports = router;
