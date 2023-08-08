const {
  crearOrdenController,
} = require('../../Controllers/ControllersMercadoPago/CrearOrdenMercadoPago');

const handlerCrearOrden = async (req, res) => {
  const {Inventarios, cartId} = req.body;
  try {
    const orden = await crearOrdenController(Inventarios, cartId);
    return res.status(200).json(orden);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {handlerCrearOrden};
