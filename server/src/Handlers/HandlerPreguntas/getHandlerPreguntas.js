const {
  getProductQuestions, getUnansweredQuestions,
} = require("../../Controllers/ControllersPreguntas/getPreguntasController");

const getProductQuestionsHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const questions = await getProductQuestions(id);
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUnansweredQuestionsHandler = async (req, res) => {
  try {
    const unansweredQuestions = await getUnansweredQuestions();
    return res.status(200).json(unansweredQuestions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getProductQuestionsHandler, getUnansweredQuestionsHandler };
