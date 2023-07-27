const {Marcas} = require('../../DB');

const getControllerMarca = async () => {
  try {
    return await Marcas.findAll();
  } catch (error) {
    return error;
  }
};

const getControllerMarcaById = async (idMarca) => {
  try {
    return await Marcas.findByPk(idMarca);
  } catch (error) {
    return error;
  }
};

module.exports = {getControllerMarca, getControllerMarcaById};
