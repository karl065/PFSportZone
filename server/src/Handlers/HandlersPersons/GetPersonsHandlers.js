/* Esta línea de código importa tres funciones (`getControllerAllPerson`, `getControllerPersonByNames`,
`getControllerPersonByDocument`) del archivo `GetPersonsControllers.js` ubicado en el directorio
`../../Controllers/ControllersPersons`. Es probable que estas funciones se utilicen para manejar
diferentes tipos de consultas relacionadas con la recuperación de datos personales. */
const {
  getControllerAllPerson,
  getControllerPersonByNames,
  getControllerPersonByDocument,
} = require("../../Controllers/ControllersPersons/GetPersonsControllers.js");

/**
 * La función `getHandlerPersons` es una función asíncrona que maneja una solicitud para obtener una
 * persona o todas las personas en función de su nombre y apellido.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Por lo general, lo proporciona el marco web o el servidor que maneja la
 * solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta HTTP
 * al cliente. Contiene métodos y propiedades que le permiten establecer el estado de la respuesta, los
 * encabezados y el cuerpo. En este fragmento de código, se usa para enviar respuestas JSON con el
 * método `json()`.
 * @returns una respuesta con un código de estado y un objeto JSON. Si se definen los parámetros
 * `first_name` y `last_name`, devolverá el resultado de `getControllerPersonByNames(first_name,
 * last_name)` como un objeto JSON con un código de estado de 200. De lo contrario, devolverá el
 * resultado de `getControllerAllPerson() ` como un objeto JSON con un
 */
const getHandlerPersons = async (req, res) => {
  const { first_name, last_name } = req.body;
  try {
    if (first_name !== undefined && last_name !== undefined) {
      const person = await getControllerPersonByNames(first_name, last_name);
      return res.status(200).json(person);
    }
    const person = await getControllerAllPerson();
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * La función `getHandlerPersonsByDocument` es una función asíncrona que maneja una solicitud para
 * recuperar la información de una persona según su tipo y número de documento.
 * @param req - El parámetro `req` es un objeto que representa la solicitud HTTP realizada al servidor.
 * Contiene información como los encabezados de la solicitud, el cuerpo de la solicitud, el método de
 * la solicitud, la URL de la solicitud, etc. En este fragmento de código, el objeto `req` se usa para
 * acceder a la propiedad `body`, que contiene
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como establecer el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 * @returns una respuesta con un código de estado de 200 y un objeto JSON que contiene los datos de la
 * persona si se encuentra a la persona. Si hay un error, devuelve una respuesta con un código de
 * estado de 500 y un objeto JSON que contiene el mensaje de error.
 */
const getHandlerPersonsByDocument = async (req, res) => {
  const { document_type, document_number } = req.body;
  if (document_type === undefined || document_number === undefined) {
    throw Error("Debe suministrar los datos requeridos...!");
  }
  try {
    const person = await getControllerPersonByDocument(
      document_type,
      document_number
    );
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getHandlerPersons,
  getHandlerPersonsByDocument,
};
