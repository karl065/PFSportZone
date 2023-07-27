const {
  delProdCarrito,
  delAllCarrito,
} = require('../../Controllers/ControllersCarrito/deleteControllerCarrito');

const delHandlerCarrito = async (req, res) => {
  const {idCar, id_inventory} = req.params;
  try {
    const carrito = await delProdCarrito(idCar, id_inventory);
    return res.status(200).json(carrito);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};
const delHandlerAllCarrito = async (req, res) => {
  const {idCar} = req.params;
  try {
    const carrito = await delAllCarrito(idCar);
    return res.status(200).json(carrito);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {delHandlerCarrito, delHandlerAllCarrito};
