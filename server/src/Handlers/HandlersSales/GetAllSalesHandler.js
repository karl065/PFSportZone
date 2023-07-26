const {
  getAllSales,
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

module.exports = {
  getAllSalesHandler,
};
