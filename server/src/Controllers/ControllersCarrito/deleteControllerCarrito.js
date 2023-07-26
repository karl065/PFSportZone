const {Carrito, Inventarios} = require('../../DB.js');

const delProdCarrito = async (idCar, id_inventory) => {
  try {
    const carrito = await Carrito.findByPk(idCar);
    const producto = await Inventarios.findByPk(id_inventory);

    await carrito.removeInventarios(producto);

    const productosEnCarrito = await carrito.getInventarios();
    const total = productosEnCarrito.reduce((tot, product) => {
      return tot + product.CarritoInventarios.precioPorCant;
    }, 0);
    await carrito.update({cantProd: productosEnCarrito.length, total});

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

const delAllCarrito = async (idCar) => {
  const carrito = await Carrito.findByPk(idCar);
  carrito.setInventarios([]);
  await Carrito.update({cantProd: 0, total: 0}, {where: {idCar}});
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
};

module.exports = {delProdCarrito, delAllCarrito};
