const jwt = require('jsonwebtoken');
const {SECRETA} = process.env;

/**
 * La función authMiddle es una función de middleware en JavaScript que verifica la autenticidad de un
 * token y establece la información decodificada del usuario en el objeto de solicitud.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Es un objeto que el marco Express pasa a la función de middleware.
 * @param res - El parámetro `res` es el objeto de respuesta en Express.js. Se utiliza para enviar una
 * respuesta al cliente.
 * @param next - El parámetro `siguiente` es una función de devolución de llamada que se utiliza para
 * pasar el control a la siguiente función de middleware en el ciclo de solicitud-respuesta. Por lo
 * general, se llama al final de la función de middleware actual para indicar que ha completado su
 * procesamiento y se debe llamar a la siguiente función de middleware.
 * @returns Si no hay token, se devuelve una respuesta con el código de estado 400 y un objeto JSON que
 * contiene el mensaje "No hay token". Si el token no es válido, se devuelve una respuesta con el
 * código de estado 400 y un objeto JSON que contiene el mensaje "Token no valido". De lo contrario, el
 * middleware llama a la siguiente función.
 */
const authMiddle = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(400).json({msg: 'No hay token'});
  }
  try {
    const decoded = jwt.verify(token, SECRETA);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(400).json({msg: 'Token no valido'});
  }
};

module.exports = {authMiddle};
