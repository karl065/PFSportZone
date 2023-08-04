const {
  deleteQuestionHandler,
} = require("../../Handlers/HandlerPreguntas/deleteHandlerPreguntas");
const {
  getProductQuestionsHandler,
  getUnansweredQuestionsHandler,
} = require("../../Handlers/HandlerPreguntas/getHandlerPreguntas");
const {
  createQuestionHandler,
} = require("../../Handlers/HandlerPreguntas/postHandlerPreguntas.js");
const {
  updateQuestionHandler,
} = require("../../Handlers/HandlerPreguntas/updateHandlerPreguntas");

const router = require("express").Router();

router.get("/", getUnansweredQuestionsHandler);
router.get("/:id", getProductQuestionsHandler);
router.post("/", createQuestionHandler);
router.put("/:id", updateQuestionHandler);
router.delete("/:id", deleteQuestionHandler);

module.exports = router;
