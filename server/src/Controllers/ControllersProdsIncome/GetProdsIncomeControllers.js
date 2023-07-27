const { IngresosProductos } = require("../../DB");

const getAllProductsIncome = async () => {
  try {
    return await IngresosProductos.findAll();
  } catch (error) {
    return error.message;
  }
};

const getProductsIncomeById = async (idProduct) => {
  try {
    const prods = await IngresosProductos.findAll({ where: { idProduct } });
    return prods;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllProductsIncome,
  getProductsIncomeById,
};
