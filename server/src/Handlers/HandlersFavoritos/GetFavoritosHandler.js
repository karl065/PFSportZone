/* Esta línea de código importa la función `getAllFavorites` del archivo `GetControllerFavoritos.js`
ubicado en el directorio `../../Controllers/ControllersFavoritos`. Está utilizando la asignación de
desestructuración para asignar la función importada a una variable constante llamada
`getAllFavorites`. */
const {
  getAllFavorites,
} = require("../../Controllers/ControllersFavoritos/GetControllerFavoritos.js");

/**
 * La función getAllFavoritesHandler recupera todos los favoritos y los devuelve como una respuesta
 * JSON.
 * @param req - El parámetro `req` es el objeto de la solicitud, que contiene información sobre la
 * solicitud HTTP entrante, como encabezados, parámetros de consulta y cuerpo de la solicitud. Se
 * utiliza para recuperar datos del cliente y pasarlos al servidor.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado y enviar datos JSON.
 * @returns una respuesta con un código de estado de 200 y un objeto JSON que contiene el resultado de
 * la función getAllFavorites.
 */
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
