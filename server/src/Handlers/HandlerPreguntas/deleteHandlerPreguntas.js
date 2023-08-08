const {
  deleteQuestion,
} = require("../../Controllers/ControllersPreguntas/deletePreguntasController");

const deleteQuestionHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await deleteQuestion(id);
    return res.status(200).json(deletedQuestion);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteQuestionHandler };
