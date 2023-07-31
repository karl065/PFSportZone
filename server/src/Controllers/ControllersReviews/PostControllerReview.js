const { Reviews, Usuarios } = require("../../DB");

const createReviewDB = async (
  idUser,
  id_inventory,
  question,
  answer,
  assessment
) => {
  const user = await Usuarios.findByPk(idUser);

  if (!user) return "No existe este usuario...!";

  try {
    const addNewComment = await Reviews.create({
      idUser: idUser,
      id_inventory: id_inventory,
      question: question,
      answer: answer,
      assessment: assessment,
    });

    return addNewComment;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createReviewDB,
};
