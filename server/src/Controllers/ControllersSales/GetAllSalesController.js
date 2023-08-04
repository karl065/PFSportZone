const { Ventas } = require("../../DB");

const getAllSales = async () => {
  try {
    return await Ventas.findAll();
  } catch (error) {
    return error.message;
  }
};

const getSalesByReceiptStatus = async (receiptCod, status) => {
  try {
    if (receiptCod !== undefined) {
      const receipt = await Ventas.findOne({
        where: { receipt_code: receiptCod },
      });
      return receipt;
    }

    const transactionStatus = await Ventas.findAll({ where: { status } });

    return transactionStatus;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllSales,
  getSalesByReceiptStatus,
};
