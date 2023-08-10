const {
  getInventarios,
  getInventariosByName,
  getInventariosById,
} = require("../../Controllers/ControllersInventarios/GetInventariosControllers");

const getInventariosHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const articulos = await getInventariosByName(name);
      return res.status(200).json(articulos);
    }
    const articulos = await getInventarios();

    return res.status(200).json(articulos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getInventariosByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const articulo = await getInventariosById(id);
    if (!articulo) {
      return res.status(404).json({
        mensaje: "No se encontró el artículo con el ID proporcionado",
      });
    }
    return res.status(200).json(articulo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getInventariosHandler,
  getInventariosByIdHandler,
};
