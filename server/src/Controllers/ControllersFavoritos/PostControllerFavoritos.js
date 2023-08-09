/* La línea `const { Favoritos, Inventarios } = require("../../DB");` está importando los objetos
`Favoritos` e `Inventarios` desde el módulo `../../DB`. Estos objetos son probablemente modelos o
tablas de bases de datos que se definen en el módulo `DB`. Al importarlos, el código puede usar
estos objetos para interactuar con la base de datos. */
const { Favoritos, Inventarios } = require("../../DB");

/**
 * La función `addToFavoritosDB` agrega un nuevo elemento favorito a la base de datos para un usuario,
 * inventario y comentario específicos.
 * @param idUser - La identificación del usuario que desea agregar el inventario a sus favoritos.
 * @param id_inventory - El parámetro `id_inventory` es el ID del elemento del inventario que el
 * usuario desea agregar a sus favoritos.
 * @param comment - El parámetro `comentario` es una cadena que representa el comentario o la nota
 * asociada con el elemento favorito.
 * @returns ya sea la cadena "Ya existe este favorito" si ya existe un favorito existente, o está
 * devolviendo el objeto favorito recién creado si se agregó con éxito a la base de datos.
 */
const addToFavoritosDB = async (idUser, id_inventory) => {
  const existingFavorite = await Favoritos.findOne({
    where: { idUser: idUser, InventarioIdInventory: id_inventory },
  });

  if (existingFavorite) return "Ya existe este favorito";

  const product = await Inventarios.findByPk(id_inventory);

  const addFav = await Favoritos.create({
    idUser: idUser,
    InventarioIdInventory: id_inventory,
  });
  await addFav.addInventarios(product);
  const newFavorite = await Favoritos.findByPk(addFav.idFavorites);
  return newFavorite;
};

module.exports = {
  addToFavoritosDB,
};
