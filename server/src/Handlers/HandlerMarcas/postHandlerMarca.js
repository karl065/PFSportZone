const {
  crearMarcas,
} = require('../../Controllers/ControllersMarca/PostControllerMarca');

const postHandlerMarca = async (req, res) => {
  const {name, description, is_active} = req.body;
  try {
    const marca = await crearMarcas(name, description, is_active);
    return res.status(200).json(marca);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {postHandlerMarca};
