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
    throw error;
  }
};

const getCarritoID = async (id) => {
  try {
    const carrito = await Carrito.findByPk(id, {
      include: [
        {
          model: Usuarios,
          as: 'usuario',
        },
        {
          model: Inventarios,
          through: {
            attributes: ['id', 'cant', 'precioPorUnd', 'precioPorCant'],
          },
        },
      ],
    });

    if (!carrito) throw new Error('Carrito no encontrado');

    return carrito;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCarrito,
  getCarritoID,
};
