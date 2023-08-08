const { Inventarios, Preguntas } = require("../../DB");

const createQuestion = async (idProduct, message) => {
  const product = await Inventarios.findByPk(idProduct);

  if (!product) throw new Error("El producto especificado no existe");

  const newQuestion = await Preguntas.create({
    id_inventory: idProduct,
    message,
  });

  return newQuestion;
};

module.exports = { createQuestion };
