/* La línea `const { Personas } = require("../../DB");` está importando el objeto `Personas` desde el
módulo `../../DB`. Este objeto es probablemente un modelo de base de datos o una conexión de base de
datos que permite que el código interactúe con la base de datos y realice operaciones en la
colección o tabla `Personas`. */
const { Personas } = require("../../DB");

/**
 * La función `createPersonaDb` crea una nueva persona en una base de datos con la información dada.
 * @param person_type - El tipo de persona, como "individuo" o "empresa".
 * @param document_type - El parámetro document_type se refiere al tipo de documento que tiene la
 * persona, como un pasaporte, una licencia de conducir o una tarjeta de identificación.
 * @param document_number - El número de documento es un identificador único asignado al documento
 * oficial de un individuo, como un número de pasaporte, número de licencia de conducir o número de
 * identificación nacional.
 * @param first_name - El primer nombre de la persona.
 * @param last_name - El parámetro `last_name` es el apellido de la persona.
 * @param phone - El parámetro `teléfono` se utiliza para almacenar el número de teléfono de la persona
 * en la base de datos.
 * @param address - El parámetro de dirección es una cadena que representa la dirección de la persona.
 * @returns el objeto persona recién creado.
 */
const createPersonaDb = async (
  person_type,
  document_type,
  document_number,
  first_name,
  last_name,
  phone,
  address
) => {
  try {
    const newPerson = await Personas.create({
      person_type,
      document_type,
      document_number,
      first_name,
      last_name,
      phone,
      address,
    });

    return newPerson;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createPersonaDb };
