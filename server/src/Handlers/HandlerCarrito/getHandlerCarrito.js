const {
  getAllCarrito,
  getCarritoID,
} = require('../../Controllers/ControllersCarrito/getControllerCarrito');

const getHandlerCarrito = async (req, res) => {
  try {
    const carrito = await getAllCarrito();
    carrito.Inventarios.sort((a, b) =>
      a.article_name.localeCompare(b.article_name)
    );
    return res.status(200).json(carrito);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

const getHandlerCarritoID = async (req, res) => {
  const {id} = req.params;
  try {
    const carrito = await getCarritoID(id);
    return res.status(200).json(carrito);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {getHandlerCarrito, getHandlerCarritoID};
