const { Inventarios } = require("../../../DB");

const filterStockAvailableController = async (status) => {
  console.log(status);
  return await Inventarios.findAll({ where: { status: status } });
};

module.exports = { filterStockAvailableController };
