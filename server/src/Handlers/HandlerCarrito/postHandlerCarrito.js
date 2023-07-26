const {
  agregarProdAlCarrito,
} = require('../../Controllers/ControllersCarrito/PostControllerCarrito');

const postHandlerCarrito = async (req, res) => {
  const {idCar, id_inventory, cant} = req.body;
  try {
    const carrito = await agregarProdAlCarrito(idCar, id_inventory, cant);
    return res.status(200).json(carrito);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {postHandlerCarrito};
