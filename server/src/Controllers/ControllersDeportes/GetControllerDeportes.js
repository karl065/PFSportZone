const {Deportes, Inventarios, Categorias} = require('../../DB');

const getAllDeportes = async () => {
  try {
    return await Deportes.findAll({
      include: [
        {
          model: Categorias,
          as: 'categorias',
        },
        {
          model: Deportes,
          as: 'deportes',
        },
      ],
    });
  } catch (error) {
    return error;
  }
};

const getDeportesID = async (id) => {
  try {
    return await Deportes.findByPk(id, {
      include: [
        {
          model: Categorias,
          as: 'categorias',
        },
        {
          model: Deportes,
          as: 'deportes',
        },
      ],
    });
  } catch (error) {
    return error;
  }
};

const getDeportesByName = async (deporteName) => {
  try {
    const category = await Deportes.findAll({
      where: {deporteName},
      include: {
        model: Inventarios,
        as: 'inventarios',
      },
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
      include: {
        model: Inventarios,
        as: 'inventarios',
      },
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
