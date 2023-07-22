/* La línea `const { Personas } = require("../../DB.js");` está importando el objeto `Personas` del
archivo `DB.js` ubicado en el archivo `DB.js` del directorio principal . Esto permite que el código
acceda al objeto `Personas` y use sus métodos y propiedades. */
const {Personas} = require('../../DB.js');

/**
 * La función `getControllerAllPerson` recupera todos los registros de la tabla `Personas`.
 * @returns el resultado de llamar al método `findAll()` en el objeto `Personas`.
 */
const getControllerAllPerson = async () => {
  return await Personas.findAll();
};

const getControllerPersonID = async (id) => {
  return await Personas.findByPk(id);
};

/**
 * La función `getControllerPersonByNames` recupera a una persona de la base de datos según su nombre y
 * apellido.
 * @param first_name - El primer nombre de la persona que desea encontrar en la base de datos.
 * @param last_name - El parámetro `last_name` es el apellido de la persona que desea encontrar en la
 * base de datos.
 * @returns La función `getControllerPersonByNames` devuelve el resultado de la llamada al método
 * `findOne` en el modelo `Personas`.
 */
const getControllerPersonByNames = async (first_name, last_name) => {
  return await Personas.findOne({
    where: {first_name: first_name, last_name: last_name},
  });
};

/**
 * La función `getControllerPersonByDocument` recupera a una persona de la base de datos según su tipo
 * y número de documento.
 * @param document_type - El tipo de documento de la persona, como "pasaporte", "licencia de conducir",
 * "documento de identidad", etc.
 * @param document_number - El número de documento es un identificador único asignado a un documento
 * específico, como una tarjeta de identificación, pasaporte o licencia de conducir. Se utiliza para
 * identificar de forma única a una persona o entidad.
 * @returns el resultado de la consulta para encontrar una persona en la base de datos según el tipo de
 * documento proporcionado y el número de documento.
 */
const getControllerPersonByDocument = async (
  document_type,
  document_number
) => {
  console.log(document_type, document_number);
  return await Personas.findOne({
    where: {document_type: document_type, document_number: document_number},
  });
};

module.exports = {
  getControllerAllPerson,
  getControllerPersonByNames,
  getControllerPersonByDocument,
  getControllerPersonID,
};
