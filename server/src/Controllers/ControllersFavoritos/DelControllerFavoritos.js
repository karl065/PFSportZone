const { Favoritos, Inventarios } = require("../../DB");

const deleteFavorite = async (idFav, idInv) => {
  try {
    const favorite = await Favoritos.findByPk(idFav);
    const product = await Inventarios.findByPk(idInv);

    const removeFav = await favorite.removeInventarios(product);

    if (removeFav > 0) {
      return "Favorite has been removed...!";
    } else {
      return "Favorite not found...!";
    }

    //     const delFav = await Favoritos.destroy({
    //       where: {
    //         idFavorites: idFav,
    //         id_inventory: idInv,
    //       },
    //     });
    //     if (delFav > 0) {
    //       return "Favorite has been removed...!";
    //     } else {
    //       return "Favorite not found...!";
    //     }
    ///////////////////////////////////////////////////////////
    //     const delFav = await Favoritos.findOne({
    //       where: {
    //         idFavorites: idFav,
    //         idUser: idUser,
    //       },
    //     });
    //     await delFav.destroy({
    //       where: {
    //         idFavorites: idFav,
    //         idUser: idUser,
    //       },
    //     });
    //     return "Favorite has been removed...!";
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  deleteFavorite,
};
