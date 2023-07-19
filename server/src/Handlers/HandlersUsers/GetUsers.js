const {
  getControllerUserByEmail,
  getControllerUser,
} = require('../../Controllers/ControllersUsers/GetControllersUsers');

/**
 * La función `getHandlerUsers` es una función asíncrona que maneja una solicitud GET para recuperar
 * datos de usuario basados en un parámetro de consulta de correo electrónico, o todos los datos de
 * usuario si no se proporciona ningún correo electrónico.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de solicitud, los parámetros de consulta y el cuerpo.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten establecer el código de estado, los
 * encabezados y enviar el cuerpo de la respuesta. En este fragmento de código, el objeto `res` se usa
 * para enviar respuestas JSON con
 * @returns un objeto de respuesta con un código de estado y un objeto JSON. Si se proporciona el
 * parámetro de consulta de correo electrónico, devolverá el objeto de usuario obtenido por la función
 * getControllerUserByEmail. Si no se proporciona el parámetro de consulta de correo electrónico,
 * devolverá el objeto de usuario obtenido por la función getControllerUser. Si ocurre un error,
 * devolverá un objeto de respuesta con un código de estado de 500
 */
const getHandlerUsers = async (req, res) => {
  const {email} = req.query;
  try {
    if (email) {
      const user = await getControllerUserByEmail(email);
      return res.status(200).json(user);
    }
    const user = await getControllerUser();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {getHandlerUsers};
