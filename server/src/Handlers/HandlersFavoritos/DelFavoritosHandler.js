const {
  deleteFavorite,
} = require("../../Controllers/ControllersFavoritos/DelControllerFavoritos.js");

const deleteFavoriteHandler = async (req, res) => {
  const { idFav, idInv } = req.params;

  try {
    const removeFav = await deleteFavorite(idFav, idInv);
    if (removeFav === "Favorite has been removed...!") {
      res.status(200).json({ message: removeFav });
    } else if (removeFav === "Favorite not found...!") {
      res.status(404).json({ message: removeFav });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the favorite." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteFavoriteHandler,
};
