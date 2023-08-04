const {
  putSalesController,
} = require("../../Controllers/ControllersSales/PutSalesController.js");

const putSalesHandler = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const stat = { ...(status !== undefined && { status }) };
    const updatedSale = await putSalesController(id, stat);
    return res.status(200).json(updatedSale);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putSalesHandler,
};
