/* El código importa la función `createPersonaDb` desde el archivo `PostPersonsControllers.js` ubicado
en el directorio `../../Controllers/ControllersPersons`. Está utilizando la desestructuración de
objetos para asignar la función importada a la variable `createPersonaDb`. */
const {
  createPersonaDb,
} = require("../../Controllers/ControllersPersons/PostPersonsControllers.js");

/**
 * La función `postPersonDbHandler` maneja la creación de una persona en una base de datos y devuelve
 * los datos de la persona creada.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP realizada por el cliente. Incluye propiedades como los encabezados de la solicitud,
 * el cuerpo de la solicitud, el método de solicitud, la URL de la solicitud, etc. En este fragmento de
 * código, el parámetro `req` se usa para acceder a la propiedad `body`
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o enviar un mensaje de error.
 * @returns un objeto de respuesta con un código de estado y un objeto JSON. Si los campos first_name o
 * last_name están vacíos, devolverá un código de estado 404 con un mensaje que indica que los campos
 * no deben estar vacíos. Si no hay errores, devolverá un código de estado 201 con el objeto dataPerson
 * como respuesta. Si hay un error, devolverá un
 */
const postPersonDbHandler = async (req, res) => {
  const {
    person_type,
    document_type,
    document_number,
    first_name,
    last_name,
    phone,
    address,
  } = req.body;
  if (!first_name || !last_name) {
    return res
      .status(404)
      .send("Los campos 'Nombre' y 'Apellido' no deben estar vacíos...!");
  }
  try {
    const dataPerson = await createPersonaDb(
      person_type,
      document_type,
      document_number,
      first_name,
      last_name,
      phone,
      address
    );
    return res.status(201).json(dataPerson);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { postPersonDbHandler };
