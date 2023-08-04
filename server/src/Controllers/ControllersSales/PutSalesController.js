const { Ventas } = require("../../DB");

const putSalesController = async (receipt_code, updateData) => {
  try {
    await Ventas.update(updateData, {
      where: { receipt_code },
    });
    const receipt = await Ventas.findOne({ where: { receipt_code } });
    return receipt;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  putSalesController,
};
