const {
  mergeWithLocalCart,
} = require("../../Controllers/ControllersCarrito/putControllerCarrito");

const putHandlerCarrito = async (req, res) => {
  try {
    const { userId, localCart } = req.body;
    const carrito = await mergeWithLocalCart(userId, localCart);
    return res.status(200).json(carrito);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { putHandlerCarrito };
