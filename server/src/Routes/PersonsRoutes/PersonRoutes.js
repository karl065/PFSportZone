/* El código importa funciones de diferentes archivos y las asigna a variables mediante la asignación
de desestructuración. */
const {
  postPersonDbHandler,
} = require("../../Handlers/HandlersPersons/PostPersonsHandlers.js");
const {
  getHandlerPersons,
  getHandlerPersonsByDocument,
} = require("../../Handlers/HandlersPersons/GetPersonsHandlers.js");
const {
  updatePersonHandler,
} = require("../../Handlers/HandlersPersons/PutPersonHandlers.js");

const router = require("express").Router();

router.post("/", postPersonDbHandler);
router.get("/", getHandlerPersons);
router.get("/document", getHandlerPersonsByDocument);
router.put("/:id", updatePersonHandler);

module.exports = router;
