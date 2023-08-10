const {Carrito, Inventarios} = require('../../DB.js');

const mergeWithLocalCart = async (userId, localCart) => {
  try {
    // * Inicia una transacción para garantizar la consistencia de los datos
    const t = await Carrito.sequelize.transaction();

    const userCart = await Carrito.findOne({
      where: {idUser: userId},
      transaction: t,
    });

    const dispatchPromises = localCart.map(async (product) => {
      const inventoryProduct = await Inventarios.findByPk(
        product.id_inventory,
        {transaction: t}
      );

      const precioPorCant = inventoryProduct.selling_price * product.cant;

      await userCart.addInventarios(inventoryProduct, {
        through: {
          cant: product.cant,
          precioPorUnd: inventoryProduct.selling_price,
          precioPorCant,
        },
        transaction: t,
      });
    });

    await Promise.all(dispatchPromises);

    const userProductsInCart = await userCart.getInventarios({
      transaction: t,
    });
    const total = userProductsInCart.reduce((tot, product) => {
      return tot + product.CarritoInventarios.precioPorCant;
    }, 0);

    await userCart.update(
      {cantProd: userProductsInCart.length, total},
      {transaction: t}
    );

    await t.commit();

    const carAll = await Carrito.findByPk(userCart.idCar, {
      include: [
        {
          model: Inventarios,
          through: {
            attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
          },
        },
      ],
    });
    return carAll;
  } catch (error) {
    throw error;
  }
};

module.exports = {mergeWithLocalCart};
