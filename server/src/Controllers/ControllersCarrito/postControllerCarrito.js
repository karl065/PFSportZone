const {Carrito, Inventarios} = require('../../DB.js');

const agregarProdAlCarrito = async (idCar, id_inventory, cant) => {
  try {
    // Inicia una transacción para garantizar la consistencia de los datos
    const t = await Carrito.sequelize.transaction();

    const carrito = await Carrito.findByPk(idCar, {transaction: t});
    const producto = await Inventarios.findByPk(id_inventory, {transaction: t});

    const precioPorCant = producto.selling_price * cant;

    await carrito.addInventarios(producto, {
      through: {
        cant,
        precioPorUnd: producto.selling_price,
        precioPorCant,
      },
      transaction: t,
    });

    const productosEnCarrito = await carrito.getInventarios({transaction: t});
    const total = productosEnCarrito.reduce((tot, product) => {
      return tot + product.CarritoInventarios.precioPorCant;
    }, 0);

    await carrito.update(
      {cantProd: productosEnCarrito.length, total},
      {transaction: t}
    );

    await t.commit(); // Confirma la transacción

    // Ordena los productos por orden alfabético según el nombre
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

    carritoActualizado.Inventarios.sort((a, b) =>
      a.article_name.localeCompare(b.article_name)
    );

    return carritoActualizado;
  } catch (error) {
    return error.message;
  }
};

module.exports = {agregarProdAlCarrito};
