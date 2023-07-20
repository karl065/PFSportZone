/* El código importa la función `updatePersonDbController` del archivo `PutPersonsControllers.js`
ubicado en el directorio `Controllers/ControllersPersons`. Está utilizando la asignación de
desestructuración para asignar la función importada a la constante `updatePersonDbController`. */
const {
  updatePersonDbController,
} = require("../../Controllers/ControllersPersons/PutPersonsControllers.js");

/**
 * La función `updatePersonHandler` es una función asíncrona que maneja la actualización de los datos
 * de una persona en una base de datos y devuelve una respuesta basada en el resultado.
 * @param req - El parámetro `req` es un objeto que representa la solicitud HTTP realizada por el
 * cliente. Contiene información como los encabezados de la solicitud, el cuerpo de la solicitud, los
 * parámetros de la solicitud, etc. En este fragmento de código, `req.params.id` se usa para extraer el
 * parámetro `id` de la URL de la solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se usa para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como establecer el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 * @returns un objeto de respuesta con un código de estado y un objeto JSON. Si hay un error, devolverá
 * un código de estado 404 con un mensaje de error. Si la actualización es exitosa, devolverá un código
 * de estado 200 con un mensaje de éxito. Si hay un error interno del servidor, devolverá un código de
 * estado 500 con un mensaje de error.
 */
const updatePersonHandler = async (req, res) => {
  const id_Persons = req.params.id;
  console.log(id_Persons);
  const dataToUpdate = req.body;

  try {
    const result = await updatePersonDbController(id_Persons, dataToUpdate);
    if (result.error) {
      return res.status(404).json({ error: result.error });
    } else {
      return res.status(200).json({ success: result.success });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocurrió un error interno en el servidor." });
  }
};

module.exports = { updatePersonHandler };
