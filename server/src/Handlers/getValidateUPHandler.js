/* El código está importando la función `validateUserPassword` desde el módulo
`getValidateUPController` ubicado en el directorio "../Controllers". Está utilizando la
desestructuración de objetos para asignar la función importada a una variable constante llamada
`validateUserPassword`. */
const {
  validateUserPassword,
} = require("../Controllers/getValidateUPController");

/**
 * La función `getValidateUserPasswordHandler` es una función asíncrona que maneja una solicitud para
 * validar la contraseña de un usuario y envía una respuesta con el resultado.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Por lo general, lo proporciona el marco web o el servidor que maneja la
 * solicitud HTTP.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como establecer el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 */
const getValidateUserPasswordHandler = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const response = await validateUserPassword(name, email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getValidateUserPasswordHandler };
