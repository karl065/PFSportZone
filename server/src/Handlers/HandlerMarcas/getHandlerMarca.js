const {
  getControllerMarcaById,
  getControllerMarca,
} = require('../../Controllers/ControllersMarca/GetControllerMarca');

const getHandlerMarca = async (req, res) => {
  try {
    const marca = await getControllerMarca();
    return res.status(200).json(marca);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

const getHandlerMarcaId = async (req, res) => {
  const {id} = req.params;
  try {
    const marca = await getControllerMarcaById(id);
    return res.status(200).json(marca);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {getHandlerMarca, getHandlerMarcaId};
