/* Estas líneas de código están importando funciones de diferentes archivos de controlador. */
const {
  getUserId,
} = require('../../Controllers/ControllersUsers/GetControllersUsers.js');
const {
  getInventariosById,
} = require('../../Controllers/ControllersInventarios/GetInventariosControllers.js');
const {
  addToFavoritosDB,
} = require('../../Controllers/ControllersFavoritos/PostControllerFavoritos.js');

/**
 * La función `addFavoritesHandler` es una función asíncrona que maneja la solicitud para agregar un
 * producto a la lista de favoritos de un usuario, verificando la existencia del usuario y la
 * disponibilidad del producto antes de agregarlo a la base de datos.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP realizada por el cliente. Incluye propiedades como `body`, `params`, `query`,
 * `headers`, etc. En este fragmento de código, la propiedad `req.body` se utiliza para extraer los
 * valores de `idUser`
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como establecer el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 * @returns una respuesta con el código de estado y un objeto JSON. Si no se encuentra el usuario o el
 * producto, devuelve un código de estado 404 con el mensaje de error correspondiente. Si el producto
 * no está disponible o está discontinuado, también devuelve un código de estado 404 con el mensaje de
 * error correspondiente. Si todo es exitoso, devuelve un código de estado 201 con el resultado de
 * addToFavor
 */
const addFavoritesHandler = async (req, res) => {
  const {idUser, id_Inventory} = req.body;
  console.log(idUser, id_Inventory);
  try {
    const user = await getUserId(idUser);
    const product = await getInventariosById(id_Inventory);

    // Se verifica existencia del Usuario...
    if (!user) {
      return res.status(404).json({message: 'Usuario no encontrado...!'});
    }
    // Se verifica la existencia y/o disponibilidad del producto...
    if (!product) {
      return res.status(404).json({message: 'Producto no encontrado...!'});
    } else if (
      product.status === 'Not Available' ||
      product.status === 'Discontinued'
    ) {
      return res
        .status(404)
        .json({message: 'Producto no disponible o descontinuado...!'});
    }

    const addToFavorites = await addToFavoritosDB(idUser, id_Inventory);
    return res.status(201).json(addToFavorites);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {
  addFavoritesHandler,
};
