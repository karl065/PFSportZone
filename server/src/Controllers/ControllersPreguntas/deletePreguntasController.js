const { Preguntas } = require("../../DB");

const deleteQuestion = async (questionId) => {
  const questionToDelete = await Preguntas.findByPk(questionId);

  if (!questionToDelete)
    throw new Error(`Pregunta con el id ${questionId} no encontrada`);

  await questionToDelete.destroy();

  return questionToDelete;
};

module.exports = { deleteQuestion };
