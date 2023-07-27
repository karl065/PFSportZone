const {
  registerSalesDB,
} = require("../../Controllers/ControllersSales/PostSalesController.js");

const salesHandler = async (req, res) => {
  const { receipt_code, tax, total_amount, status } = req.body;

  if (!receipt_code || !tax || !total_amount || !status) {
    return res.status(404).send("Los campos no deben estar vacíos...!");
  }

  const currentDate = new Date().toISOString().split("T")[0];

  try {
    const saleData = {
      receipt_code,
      date: currentDate,
      tax,
      total_amount,
      status,
    };

    const regSales = await registerSalesDB(saleData);
    res.status(201).json(regSales);
    return regSales;
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  salesHandler,
};
