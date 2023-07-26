const {Carrito, Inventarios} = require('../../DB.js');

const agregarProdAlCarrito = async (idCar, id_inventory, cant) => {
  try {
    const carrito = await Carrito.findByPk(idCar);
    const producto = await Inventarios.findByPk(id_inventory);

    const precioPorCant = producto.selling_price * cant;
    await carrito.addInventarios(producto, {
      through: {
        cant,
        precioPorUnd: producto.selling_price,
        precioPorCant,
      },
    });

    const productosEnCarrito = await carrito.getInventarios();
    const total = productosEnCarrito.reduce((tot, product) => {
      return tot + product.CarritoInventarios.precioPorCant;
    }, 0);
    await carrito.update({total});

    const carritoActualizado = await Carrito.findByPk(idCar, {
      include: [
        {
          model: Inventarios,
          through: {
            attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
          },
        },
      ],
    });

    return carritoActualizado;
  } catch (error) {
    return error.message;
  }
};

module.exports = {agregarProdAlCarrito};
