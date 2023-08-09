const {Ventas, Usuarios, Inventarios} = require('../../DB.js');

const getAllVentasController = async () => {
  try {
    const ventas = await Ventas.findAll({
      include: [
        {
          model: Usuarios,
          as: 'usuario',
        },
        {model: Inventarios},
      ],
    });
    return ventas;
  } catch (error) {
    return error.message;
  }
};

const getVentasIdController = async (id_sales) => {
  try {
    const venta = await Ventas.findByPk(id_sales, {
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

module.exports = {getAllVentasController, getVentasIdController};
