const { Ventas } = require("../../DB");

const registerSalesDB = async (saleData) => {
  try {
    const newSale = await Ventas.create(saleData);
    return newSale;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerSalesDB,
};
