const {
  postHandlerCompra,
} = require("../../Handlers/HandlerMail/postHandlerCompra");
const {
  postHandlerCompraPendiente,
} = require("../../Handlers/HandlerMail/postHandlerCompraPendiente.js");
const {
  postHandlerCompraRechazada,
} = require("../../Handlers/HandlerMail/postHandlerCompraRechazada.js");

const router = require("express").Router();

router.post("/", (req, res) => {
  const { status } = req.body;
  if (status === "success") {
    postHandlerCompra(req.res);
  } else if (status === "pending") {
    postHandlerCompraPendiente(req, res);
  } else {
    postHandlerCompraRechazada(req, res);
  }
});

module.exports = router;
