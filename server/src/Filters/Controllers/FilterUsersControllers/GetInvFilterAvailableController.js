const { Inventario } = require("../../../DB");

const filterStockAvailableController = async (status) => {
  if (status !== undefined) {
    return await Inventario.findAll({ where: { status: status } });
  }
};

module.exports = { filterStockAvailableController };
