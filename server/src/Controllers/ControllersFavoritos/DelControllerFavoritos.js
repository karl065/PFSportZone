/* La línea `const { Favoritos, Inventarios } = require("../../DB");` está importando los modelos
`Favoritos` e `Inventarios` del archivo `../../DB`. Es probable que estos modelos estén definidos en
el archivo `DB` y representen tablas en una base de datos. Al importarlos, el código puede usar
estos modelos para interactuar con las tablas de la base de datos correspondientes. */
const { Favoritos, Inventarios } = require("../../DB");

/**
 * La función `deleteFavorite` elimina un elemento favorito y sus relaciones asociadas en función del
 * ID de favorito y el ID de inventario proporcionados.
 * @param idFav - El parámetro `idFav` representa la ID del favorito que desea eliminar. Se utiliza
 * para encontrar el registro favorito en la base de datos.
 * @param idInv - El parámetro `idInv` representa el ID del inventario asociado al favorito. Se utiliza
 * para especificar la condición para incluir el inventario en la consulta para encontrar el favorito.
 * @returns La función `deleteFavorite` devuelve una promesa que se resuelve en un mensaje de cadena
 * que indica el éxito o el fracaso de la operación de eliminación, o un mensaje de error si se produce
 * un error durante el proceso.
 */
const deleteFavorite = async (idFav, idInv) => {
  try {
    // Se busca al favorito por su 'id' y se cargan las realaciones asociadas...
    const favorite = await Favoritos.findByPk(idFav, {
      include: [
        {
          model: Inventarios,
          as: "inventarios",
          where: { id_inventory: idInv },
        },
      ],
    });

    // Si no encuentra el favorito, devuelve un mensaje...
    if (!favorite) return "Favorite not found...!";

    // Se procede a la eliminación y sus relaciones...
    await favorite.destroy();

    return "Favorite has been removed...!";
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  deleteFavorite,
};
