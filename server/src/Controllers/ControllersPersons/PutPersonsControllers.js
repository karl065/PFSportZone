/* La línea `const { Personas } = require("../../DB");` está importando el modelo `Personas` desde el
archivo `../../DB`. Está utilizando la desestructuración de objetos para extraer el modelo
`Personas` del módulo requerido. Esto permite que el código acceda e interactúe con el modelo
`Personas` en la base de datos. */
const {Personas} = require('../../DB');

/**
 * La función `updatePersonDbController` actualiza los datos de una persona en una base de datos en
 * función de su ID.
 * @param id_persons - La identificación de la persona en la base de datos que necesita ser
 * actualizada.
 * @param dataToUpdate - El parámetro `dataToUpdate` es un objeto que contiene los datos actualizados
 * de la persona. Debe tener pares clave-valor donde las claves correspondan a los campos en la tabla
 * `Personas` y los valores sean los nuevos valores a actualizar.
 * @returns La función `updatePersonDbController` devuelve un objeto con una propiedad `success` o
 * `error`. Si la persona se encuentra y se actualiza con éxito, devuelve `{ éxito: "La persona se
 * actualizó correctamente". }`. Si no se encuentra la persona, devuelve `{ error: "No se encontró la
 * persona con el id_persons proporcionado". }`. Si hay
 */
const updatePersonDbController = async (id_persons, dataToUpdate) => {
  try {
    const person = await Personas.findByPk(id_persons);

    if (!person) {
      return {
        error: `No se encontró la persona con el id_persons proporcionado.`,
      };
    }

    await Personas.update(dataToUpdate, {
      where: {id_persons},
    });
    const personUpdate = await Personas.findByPk(id_persons);

    return personUpdate;
  } catch (error) {
    return error;
  }
};

module.exports = {updatePersonDbController};
