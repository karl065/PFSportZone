const {Categorias} = require('../../DB');

const getAllCategory = async () => {
  try {
    return await Categorias.findAll();
  } catch (error) {
    return error;
  }
};

const getCategoryID = async (id) => {
  try {
    return await Categorias.findByPk(id);
  } catch (error) {
    return error;
  }
};

const getCategoryByName = async (categoryName) => {
  try {
    const category = await Categorias.findAll({where: {categoryName}});
    return category;
  } catch (error) {
    return error;
  }
};

const getCategoryByStatus = async (status) => {
  try {
    return await Categorias.findAll({where: {status}});
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
