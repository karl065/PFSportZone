const {Deportes} = require('../../DB');
const deportesApi = require('../../../apiDeportes/deportesApi.json');

const crearDeporte = async (deporteName, status) => {
  try {
    const newDeporte = await Deportes.create({
      deporteName,
      status,
    });
    return newDeporte;
  } catch (error) {
    return error;
  }
};

const inicializarDeportes = async () => {
  try {
    await Deportes.bulkCreate(deportesApi);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {crearDeporte, inicializarDeportes};
