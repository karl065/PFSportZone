const { Personas } = require("../../DB");

const deletePersonDb = async (id_persons) => {
  try {
    const person = await Personas.findOne({
      where: { id_persons: id_persons },
    });

    if (!person) {
      return {
        error: "No se encuentra la persona con el ID proporcionado...!",
      };
    }
    await person.destroy();
    return { success: "La persona ha sido eleiminada correctamente...!" };
  } catch (error) {
    return { error: "Ocurrió un error al intentar eliminar la persona." };
  }
};

module.exports = {
  deletePersonDb,
};
