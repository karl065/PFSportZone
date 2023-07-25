const {
  crearDeporte,
} = require('../../Controllers/ControllersDeportes/PostControllerDeportes');

const postHandlerDeporte = async (req, res) => {
  const {deporteName, status} = req.body;

  try {
    const deporte = await crearDeporte(deporteName, status);
    return res.status(200).json(deporte);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {postHandlerDeporte};
