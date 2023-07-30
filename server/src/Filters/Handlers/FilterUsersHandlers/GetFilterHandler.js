/* El código importa funciones específicas de dos archivos diferentes: "GetStockFilterController.js" y
"GetUsersFilterController.js". */
const {
  filterAvailableController,
  filterPriceRange,
} = require('../../Controllers/FilterUsersControllers/GetPriceRangeFilterController.js');
const {
  filterUsersControllers,
} = require('../../Controllers/FilterUsersControllers/GetUsersFilterController');

/**
 * El código define dos funciones asíncronas, getFilterHandler y getFilterStockPriceRange, que manejan
 * las solicitudes de filtrado para la disponibilidad de existencias y el rango de precios de las
 * acciones, respectivamente.
 * @param req - El parámetro `req` es un objeto que representa la solicitud HTTP realizada por el
 * cliente. Contiene información como el método de solicitud, los encabezados de la solicitud, el
 * cuerpo de la solicitud y los parámetros de la consulta. En este fragmento de código, el parámetro
 * `req` se usa para acceder a los parámetros de consulta usando `req.query` y
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta HTTP
 * al cliente. Contiene métodos y propiedades que le permiten establecer el estado de la respuesta, los
 * encabezados y el cuerpo.
 * @returns En la función `getFilterHandler`, si se proporciona el parámetro de consulta `status`, el
 * resultado de la función `filterStockAvailableController` se devuelve como una respuesta JSON con un
 * código de estado de 200. De lo contrario, el resultado de la función `filterUsersControllers` se
 * devuelve como una respuesta JSON con un código de estado de 200.
 */
const getFilterHandler = async (req, res) => {
  console.log("entro a getFilterHandler");
  const {
    role,
    userStatus,
    status,
    minPrice,
    maxPrice,
    genre,
    state,
    idDeportes,
    id_categorias,
    idMarca,
  } = req.query;

  try {
    if (status) {
      const queryResult = await filterAvailableController(status);
      return res.status(200).json(queryResult);
    }
    // if (minPrice || maxPrice) {
    //   const productsInRange = await filterPriceRange(minPrice, maxPrice);
    //   return res.status(200).json(productsInRange);
    // }
    if ((role || userStatus)||(role && status)||(role && !status)||(!role && status)||(!role && !status)) {
      const queryResult = await filterUsersControllers(role, userStatus);
      return res.status(200).json(queryResult);
    }
    const productsInRange = await filterPriceRange(
      minPrice,
      maxPrice,
      genre,
      state,
      idDeportes,
      id_categorias,
      idMarca
    );
    return res.status(200).json(productsInRange);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {
  getFilterHandler,
};
