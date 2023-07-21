const {
  actualizarArticulo,
} = require("../../Controllers/ControllersInventarios/PutInventariosControllers");

const putInventariosHandler = async (req, res) => {
  const { id } = req.params;
  const {
    article_name,
    selling_price,
    purchase_price,
    stock,
    description,
    image,
    status,
  } = req.body;
  try {
    const articulo = {
      ...(article_name !== undefined && { article_name }),
      ...(selling_price !== undefined && { selling_price }),
      ...(purchase_price !== undefined && { purchase_price }),
      ...(stock !== undefined && { stock }),
      ...(description !== undefined && { description }),
      ...(image !== undefined && { image }),
      ...(status !== undefined && { status }),
    };
    const articuloActualizado = await actualizarArticulo(id, articulo);
    return res.status(200).json(articuloActualizado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putInventariosHandler,
};
