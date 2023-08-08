const {
  createQuestion,
} = require("../../Controllers/ControllersPreguntas/postPreguntasController.js");

const createQuestionHandler = async (req, res) => {
  try {
    const { id_inventory, message } = req.body;
    const newQuestion = await createQuestion(id_inventory, message);
    return res.status(201).json(newQuestion);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createQuestionHandler };
