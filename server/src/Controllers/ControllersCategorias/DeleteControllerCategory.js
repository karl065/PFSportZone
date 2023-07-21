const {Categorias} = require('../../DB.js');

const deleteControllerCategory = async (id_categories) => {
  try {
    const category = await Categorias.findByPk(id_categories);
    await Categorias.destroy({where: {id_categories}});
    return category;
  } catch (error) {
    return error;
  }
};

module.exports = {deleteControllerCategory};
