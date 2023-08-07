const {Ventas} = require('../../DB');

const actualizarVenta = async (id, data) => {
  console.log(id+"    "+data);
  try {
    await Ventas.update(data, {
      where: {id_sales: id},
    });
    const venta = await Ventas.findByPk(id, {
    });
    return venta;
  } catch (error) {
    return error;
  }
};

module.exports = {
  actualizarVenta,
};
