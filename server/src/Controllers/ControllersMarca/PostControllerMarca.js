const {Marcas} = require('../../DB');

const crearMarcas = async (name, description, is_active) => {
  try {
    const newMarcas = await Marcas.create({
      name,
      description,
      is_active,
    });
    return newMarcas;
  } catch (error) {
    return error;
  }
};

module.exports = {crearMarcas};
