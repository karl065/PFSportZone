/* La línea `const { Usuarios, Reviews, Inventarios } = require("../../DB");` está importando los
modelos `Usuarios`, `Reviews` e `Inventarios` desde `../.. archivo /DB`. Es probable que estos
modelos estén definidos en el archivo `DB` y representen tablas o colecciones de bases de datos que
se usan en el código. Al importarlos, el código puede acceder e interactuar con los datos
almacenados en estas tablas o colecciones. */
const { Usuarios, Reviews, Inventarios } = require("../../DB");

const getAllReview = async () => {
  try {
    const getAll = await Reviews.findAll({
      include: [
        {
          model: Usuarios,
          as: "usuario",
        },
        {
          model: Inventarios,
          as: "inventarios",
        },
      ],
    });
    return getAll;
  } catch (error) {}
};

const getReviewByUser = async (idUser, idReview) => {
  const review = await Usuarios.findByPk(idUser, {
    where: { idUser: idUser },
    include: [
      {
        model: Reviews,
        as: "reviews",
      },
    ],
  });

  return review;
};

const getReviewById = async (idReview) => {
  try {
    const review = await Reviews.findByPk(idReview, {
      include: [
        {
          model: Usuarios,
          as: "usuario",
        },
        {
          model: Inventarios,
          as: "inventarios",
        },
      ],
    });
    return review;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getReviewByUser,
  getReviewById,
  getAllReview,
};
