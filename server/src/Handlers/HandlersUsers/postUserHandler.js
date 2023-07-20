const {
  createUserDb,
} = require('../../Controllers/ControllersUsers/postUserController');

/**
 * La función `postUserDbHandler` es una función asíncrona que maneja la creación de un usuario en una
 * base de datos y devuelve los datos del usuario creado.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP realizada por el cliente. Incluye propiedades como los encabezados de la solicitud,
 * el cuerpo de la solicitud, el método de la solicitud y la URL de la solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o enviar un mensaje de error.
 * @returns La función `postUserDbHandler` devuelve un objeto de respuesta con el código de estado y
 * los datos apropiados. Si faltan los campos obligatorios (correo electrónico, usuario, contraseña),
 * devuelve un código de estado 404 con un mensaje que indica que los campos no deben estar vacíos. Si
 * la creación del usuario es exitosa, devuelve un código de estado 201 con los datos del usuario
 * creado. si hay un error
 */
const postUserDbHandler = async (req, res) => {
  const {email, user, password, role, userStatus} = req.body;
  if (!email || !user || !password) {
    return res.status(404).send('Los campos no deben estar vacíos...!');
  }
  try {
    const dataUser = await createUserDb(
      email,
      user,
      password,
      role,
      userStatus
    );
    return res.status(201).json(dataUser);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {postUserDbHandler};
