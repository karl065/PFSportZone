const {
  postInventariosHandler,
} = require("../../Handlers/HandlerInventarios/PostInventariosHandler");
const {
  getInventariosHandler,
  getInventariosByIdHandler,
} = require("../../Handlers/HandlerInventarios/GetInventariosHandler");
const {
  putInventariosHandler,
} = require("../../Handlers/HandlerInventarios/PutInventariosHandler.js");
const {
  deleteHandlerInventarios,
} = require("../../Handlers/HandlerInventarios/DeleteInventariosHandler");
const router = require("express").Router();

router.post("/", postInventariosHandler);
router.get("/", getInventariosHandler);
router.get("/:id", getInventariosByIdHandler);
router.put("/:id", putInventariosHandler);
router.delete("/:id", deleteHandlerInventarios);

module.exports = router;
