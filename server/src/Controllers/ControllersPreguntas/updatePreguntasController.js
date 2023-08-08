const { Preguntas } = require("../../DB");

const updateQuestion = async (questionId, response) => {
  if (!response || typeof response !== "string")
    throw new Error("Respuesta invalida");

  const question = await Preguntas.findByPk(questionId);

  if (!question)
    throw new Error(`Pregunta con el id ${questionId} no encontrada`);

  const updatedQuestion = await question.update({
    response,
    isAnswered: true,
  });

  return updatedQuestion;
};

module.exports = { updateQuestion };
