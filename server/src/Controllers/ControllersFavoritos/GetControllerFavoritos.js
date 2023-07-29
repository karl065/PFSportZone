const { Favoritos, Inventarios } = require("../../DB");

const getAllFavorites = async () => {
  try {
    const allFav = await Favoritos.findAll({
      include: [
        {
          model: Inventarios,
          as: "inventarios",
        },
      ],
    });

    return allFav;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllFavorites,
};
