const {Ventas, Usuarios, Inventarios} = require('../../DB.js');

const crearVenta = async (status, cantProd, total, idUser, Inventario) => {
  try {
    const newVenta = await Ventas.create({
      cantProd,
      total,
      status,
      idUser,
    });
    for (const prod of Inventario) {
      await newVenta.addInventarios(prod, {
        through: {
          cant: prod.CarritoInventarios.cant,
          precioPorUnd: prod.CarritoInventarios.precioPorUnd,
          precioPorCant: prod.CarritoInventarios.precioPorCant,
        },
      });
    }
    const venta = Ventas.findByPk(newVenta.dataValues.id_sales, {
      include: [
        {
          model: Usuarios,
          as: 'usuario',
        },
        {model: Inventarios},
      ],
    });
    return venta;
  } catch (error) {
    return error.message;
  }
};

module.exports = {crearVenta};
