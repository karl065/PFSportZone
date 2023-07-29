const {
  getAllFavorites,
} = require("../../Controllers/ControllersFavoritos/GetControllerFavoritos.js");

const getAllFavoritesHandler = async (req, res) => {
  try {
    const getAll = await getAllFavorites();
    return res.status(200).json(getAll);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllFavoritesHandler,
};
