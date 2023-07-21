const {Categorias} = require('../../DB');

const crearCategoria = async (categoryName, description, status) => {
  try {
    const newCategory = await Categorias.create({
      categoryName,
      description,
      status,
    });
    return newCategory;
  } catch (error) {
    return error;
  }
};

module.exports = {crearCategoria};
