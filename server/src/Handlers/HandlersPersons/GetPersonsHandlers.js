/* Esta línea de código importa tres funciones (`getControllerAllPerson`, `getControllerPersonByNames`,
`getControllerPersonByDocument`) del archivo `GetPersonsControllers.js` ubicado en el directorio
`../../Controllers/ControllersPersons`. Es probable que estas funciones se utilicen para manejar
diferentes tipos de consultas relacionadas con la recuperación de datos personales. */
const {
  getControllerAllPerson,
  getControllerPersonByNames,
  getControllerPersonByDocument,
  getControllerPersonID,
} = require('../../Controllers/ControllersPersons/GetPersonsControllers.js');

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
  const {first_name, last_name, document_type, document_number} = req.body;
  try {
    if (first_name !== undefined && last_name !== undefined) {
      const person = await getControllerPersonByNames(first_name, last_name);
      return res.status(200).json(person);
    } else if (document_type !== undefined && document_number !== undefined) {
      const person = await getControllerPersonByDocument(
        document_type,
        document_number
      );
      return res.status(200).json(person);
    }
    const person = await getControllerAllPerson();
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

const getHandlerPersonID = async (req, res) => {
  const {id} = req.params;
  try {
    const person = await getControllerPersonID(id);
    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {
  getHandlerPersons,
  getHandlerPersonID,
};
