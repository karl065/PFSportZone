const {
  crearArticulo,
} = require("../../Controllers/ControllersInventarios/PostInventariosControllers.js");

const postInventariosHandler = async (req, res) => {
  const {
    id_inventory,
    article_name,
    selling_price,
    purchase_price,
    stock,
    description,
    image,
    status,
    id_categories,
  } = req.body;
  if (!id_inventory || !article_name || !selling_price) {
    return res.status(404).send("Los campos no deben estar vacíos...!");
  }
  try {
    const dataArticulo = await crearArticulo(
      id_inventory,
      article_name,
      selling_price,
      purchase_price,
      stock,
      description,
      image,
      status,
      id_categories
    );
    return res.status(201).json(dataArticulo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  postInventariosHandler,
};
