/* El código importa la función `deleteFavorite` del archivo `DelControllerFavoritos.js` ubicado en el
directorio `../../Controllers/ControllersFavoritos`. Está utilizando la asignación de
desestructuración para asignar la función importada a una variable constante llamada
`deleteFavorite`. */
const {
  deleteFavorite,
} = require("../../Controllers/ControllersFavoritos/DelControllerFavoritos.js");

/**
 * La función `deleteFavoriteHandler` maneja la eliminación de un elemento favorito y envía una
 * respuesta adecuada según el resultado.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP realizada por el cliente. Incluye propiedades como encabezados, cuerpo, parámetros de
 * consulta y parámetros de ruta.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o redirigir al cliente a otra URL.
 * @returns un objeto de respuesta con un código de estado y un objeto JSON que contiene un mensaje o
 * un error.
 */
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
