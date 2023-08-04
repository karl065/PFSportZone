/* La línea `const { Favoritos, Inventarios } = require("../../DB");` está importando los modelos
`Favoritos` e `Inventarios` del archivo `../../DB`. Es probable que estos modelos estén definidos en
el archivo `DB` y se utilicen en la función `getAllFavorites` para realizar operaciones de base de
datos. */
const { Favoritos, Inventarios } = require("../../DB");

/**
 * La función `getAllFavorites` recupera todos los favoritos junto con sus inventarios asociados.
 * @returns La función `getAllFavorites` devuelve una matriz de todos los favoritos con sus inventarios
 * asociados o un mensaje de error si se produce un error durante la ejecución de la función.
 */
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
