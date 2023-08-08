const {
  updateQuestion,
} = require("../../Controllers/ControllersPreguntas/updatePreguntasController");

const updateQuestionHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;
    const updatedQuestion = await updateQuestion(id, response);
    return res.status(200).json({ updatedQuestion });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { updateQuestionHandler };
