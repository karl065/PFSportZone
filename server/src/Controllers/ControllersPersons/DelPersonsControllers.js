const {Personas} = require('../../DB');

const deletePersonDb = async (id_persons) => {
  try {
    const person = await Personas.findByPk(id_persons);

    if (!person) {
      return {
        error: 'No se encuentra la persona con el ID proporcionado...!',
      };
    }
    await Personas.destroy({where: {id_persons}});
    return person;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  deletePersonDb,
};
