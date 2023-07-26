const { Ventas } = require("../../DB");

const getAllSales = async () => {
  return await Ventas.findAll();
};

module.exports = {
  getAllSales,
};
