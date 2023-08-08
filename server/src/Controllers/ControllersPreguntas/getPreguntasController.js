const { Preguntas, Inventarios } = require("../../DB");

// * Se verán primero las preguntas mas recientes en el detail.
const getProductQuestions = async (idProduct) => {
  const productQuestions = await Preguntas.findAll({
    where: { id_inventory: idProduct },
    order: [["createdAt", "DESC"]],
  });

  return productQuestions;
};

// * Se verán primero las preguntas mas antiguas en la vista del admin.
const getUnansweredQuestions = async () => {
  const unansweredQuestions = await Preguntas.findAll({
    where: { isAnswered: false },
    order: [["createdAt", "ASC"]],
    include: {
      model: Inventarios,
      as: "product",
      attributes: ["article_name", "image"],
    },
  });

  return unansweredQuestions;
};

module.exports = { getProductQuestions, getUnansweredQuestions };
