const { Favoritos, Inventarios } = require("../../DB");

const addToFavoritosDB = async (idUser, id_inventory, comment) => {
  const existingFavorite = await Favoritos.findOne({
    where: { idUser: idUser, InventarioIdInventory: id_inventory },
  });

  if (existingFavorite) return "Ya existe este favorito";

  const product = await Inventarios.findByPk(id_inventory);

  const addFav = await Favoritos.create({
    idUser: idUser,
    InventarioIdInventory: id_inventory,
    comment: comment,
  });
  await addFav.addInventarios(product);
  const newFavorite = await Favoritos.findByPk(addFav.idFavorites);
  return newFavorite;
};

module.exports = {
  addToFavoritosDB,
};
