const {Carrito, Usuarios, Inventarios} = require('../../DB');

const getAllCarrito = async () => {
  try {
    return await Carrito.findAll({
      include: [
        {
          model: Usuarios,
          as: 'usuario',
        },
        {
          model: Inventarios,
          through: {
            attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
          },
        },
      ],
    });
  } catch (error) {
    return error;
  }
};

const getCarritoID = async (id) => {
  try {
    return await Carrito.findByPk(id, {
      include: [
        {
          model: Usuarios,
          as: 'usuario',
        },
        {
          model: Inventarios,
          through: {
            attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
          },
        },
      ],
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCarrito,
  getCarritoID,
};
