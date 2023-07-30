const {
  crearOrdenController,
} = require('../../Controllers/ControllersMercadoPago/CrearOrdenMercadoPago');

const handlerCrearOrden = async (req, res) => {
  const {Inventarios} = req.body;
  console.log(Inventarios);
  try {
    const orden = await crearOrdenController(Inventarios);
    return res.status(200).json(orden);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {handlerCrearOrden};
