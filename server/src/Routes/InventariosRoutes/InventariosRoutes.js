const {
  postInventariosHandler,
} = require("../../Handlers/HandlerInventarios/PostInventariosHandler");
const {
  getInventariosHandler,
  getInventariosByNameHandler,
  getInventariosByIdHandler,
} = require("../../Handlers/HandlerInventarios/GetInventariosHandler");
const router = require("express").Router();

router.post("/", postInventariosHandler);
router.get("/", getInventariosHandler);
router.get("/:id", getInventariosByIdHandler);

module.exports = router;
