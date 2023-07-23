const {Categorias, Inventarios} = require('../../DB');

const getAllCategory = async () => {
  try {
    return await Categorias.findAll({
      include: {
        model: Inventarios,
        as: 'inventarios',
      },
    });
  } catch (error) {
    return error;
  }
};

const getCategoryID = async (id) => {
  try {
    return await Categorias.findByPk(id, {
      include: {
        model: Inventarios,
        as: 'inventarios',
      },
    });
  } catch (error) {
    return error;
  }
};

const getCategoryByName = async (categoryName) => {
  try {
    const category = await Categorias.findAll({
      where: {categoryName},
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

const getCategoryByStatus = async (status) => {
  try {
    return await Categorias.findAll({
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
  getAllCategory,
  getCategoryByName,
  getCategoryByStatus,
  getCategoryID,
};
