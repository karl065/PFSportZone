const {
  deleteFavoriteHandler,
} = require("../../Handlers/HandlersFavoritos/DelFavoritosHandler.js");
const {
  getAllFavoritesHandler,
} = require("../../Handlers/HandlersFavoritos/GetFavoritosHandler.js");
const {
  addFavoritesHandler,
} = require("../../Handlers/HandlersFavoritos/PostFavoritosHandler.js");

const router = require("express").Router();

router.post("/", addFavoritesHandler);
router.get("/", getAllFavoritesHandler);
router.delete("/:idFav/:idInv", deleteFavoriteHandler);

module.exports = router;
