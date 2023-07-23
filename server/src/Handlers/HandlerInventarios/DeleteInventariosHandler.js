const {
  eliminarArticulo,
} = require("../../Controllers/ControllersInventarios/DeleteInventariosControllers");

const deleteHandlerInventarios = async (req, res) => {
  const { id } = req.params;
  try {
    const articulo = await eliminarArticulo(id);
    return res.status(200).json(articulo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteHandlerInventarios };
