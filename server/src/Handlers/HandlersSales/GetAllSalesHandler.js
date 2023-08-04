const {
  getAllSales,
  getSalesByReceiptStatus,
} = require("../../Controllers/ControllersSales/GetAllSalesController.js");

const getAllSalesHandler = async (req, res) => {
  try {
    const allSales = await getAllSales();
    res.status(200).json(allSales);
    return allSales;
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getSalesByReceiptStatHandler = async (req, res) => {
  const { rec, status } = req.query;
  try {
    const queryResult = await getSalesByReceiptStatus(rec, status);
    return res.status(200).json(queryResult);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSalesHandler,
  getSalesByReceiptStatHandler,
};
