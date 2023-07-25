const {Deportes, Inventarios, Categorias} = require('../../DB');

const getAllDeportes = async () => {
  try {
    return await Deportes.findAll();
  } catch (error) {
    return error;
  }
};

const getDeportesID = async (id) => {
  try {
    return await Deportes.findByPk(id);
  } catch (error) {
    return error;
  }
};

const getDeportesByName = async (deporteName) => {
  try {
    const category = await Deportes.findAll({
      where: {deporteName},
    });
    return category;
  } catch (error) {
    return error;
  }
};

const getDeportesByStatus = async (status) => {
  try {
    return await Deportes.findAll({
      where: {status},
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllDeportes,
  getDeportesByStatus,
  getDeportesID,
  getDeportesByName,
};
