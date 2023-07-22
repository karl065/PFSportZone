const {
  crearCategoria,
} = require('../../Controllers/ControllersCategorias/PostControllerCategory');

const postHandlerCategory = async (req, res) => {
  const {categoryName, description, status} = req.body;

  try {
    const category = await crearCategoria(categoryName, description, status);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {postHandlerCategory};
