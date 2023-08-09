const {
  delHandlerCarrito,
  delHandlerAllCarrito,
} = require("../../Handlers/HandlerCarrito/deleteHandlerCarrito");
const {
  getHandlerCarrito,
  getHandlerCarritoID,
} = require("../../Handlers/HandlerCarrito/getHandlerCarrito");
const {
  postHandlerCarrito,
} = require("../../Handlers/HandlerCarrito/postHandlerCarrito");
const {
  putHandlerCarrito,
} = require("../../Handlers/HandlerCarrito/putHandlerCarrito");

const router = require("express").Router();

router.get("/", getHandlerCarrito);
router.get("/:id", getHandlerCarritoID);
router.post("/", postHandlerCarrito);
router.put("/", putHandlerCarrito);
router.delete("/:idCar/:id_inventory", delHandlerCarrito);
router.delete("/:idCar", delHandlerAllCarrito);

module.exports = router;
