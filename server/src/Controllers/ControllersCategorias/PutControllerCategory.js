const {Categorias} = require('../../DB.js');

const putControllerCategory = async (updateData, id_categories) => {
  try {
    await Categorias.update(updateData, {
      where: {id_categories},
    });
    const category = await Categorias.findByPk(id_categories);
    return category;
  } catch (error) {
    return error;
  }
};

module.exports = {putControllerCategory};
