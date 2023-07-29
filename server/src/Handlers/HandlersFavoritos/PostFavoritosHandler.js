// const { Usuarios, Inventarios, Favoritos } = require("../../DB");
// const {
//   getInventariosById,
// } = require("../ControllersInventarios/GetInventariosControllers");
// const { getUserId } = require("../ControllersUsers/GetControllersUsers");
const {
  getUserId,
} = require("../../Controllers/ControllersUsers/GetControllersUsers.js");
const {
  getInventariosById,
} = require("../../Controllers/ControllersInventarios/GetInventariosControllers.js");
const {
  addToFavoritosDB,
} = require("../../Controllers/ControllersFavoritos/postControllerFavoritos.js");

const addFavoritesHandler = async (req, res) => {
  const { idUser, id_Inventory, comment } = req.body;
  // console.log(idUser, id_Inventory, comment);
  try {
    const user = await getUserId(idUser);
    const product = await getInventariosById(id_Inventory);

    // Se verifica existencia del Usuario...
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado...!" });
    }
    // Se verifica la existencia y/o disponibilidad del producto...
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado...!" });
    } else if (
      product.status === "Not Available" ||
      product.status === "Discontinued"
    ) {
      return res
        .status(404)
        .json({ message: "Producto no disponible o descontinuado...!" });
    }

    const addToFavorites = await addToFavoritosDB(
      idUser,
      id_Inventory,
      comment
    );
    return res.status(201).json(addToFavorites);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addFavoritesHandler,
};
