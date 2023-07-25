const {
  getDeportesByName,
  getDeportesByStatus,
  getDeportesID,
  getAllDeportes,
} = require('../../Controllers/ControllersDeportes/GetControllerDeportes');

const getHandlerDeportes = async (req, res) => {
  const {id} = req.params;
  const {deporteName, status} = req.query;
  try {
    if (deporteName) {
      const deporte = await getDeportesByName(deporteName);
      return res.status(200).json(deporte);
    }
    if (status) {
      const deportesStatus = await getDeportesByStatus(status);
      return res.status(200).json(deportesStatus);
    }
    if (id) {
      const deporteByID = await getDeportesID(id);
      return res.status(200).json(deporteByID);
    }
    const allDeportes = await getAllDeportes();
    return res.status(200).json(allDeportes);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {getHandlerDeportes};
