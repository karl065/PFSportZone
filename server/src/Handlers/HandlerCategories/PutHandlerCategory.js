const {
  putControllerCategory,
} = require('../../Controllers/ControllersCategorias/PutControllerCategory');

const putHandlerCategory = async (req, res) => {
  const {id} = req.params;
  const {categoryName, description, status} = req.body;

  try {
    const categoryData = {
      ...(categoryName !== undefined && {categoryName}),
      ...(description !== undefined && {description}),
      ...(status !== undefined && {status}),
    };
    const categoryUpdate = await putControllerCategory(categoryData, id);
    return res.status(200).json(categoryUpdate);
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

module.exports = {putHandlerCategory};
