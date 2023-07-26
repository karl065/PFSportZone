const {
  getAllProductsIncome,
  getProductsIncomeById,
} = require("../../Controllers/ControllersProdsIncome/GetProdsIncomeControllers");

const getAllProdsHandler = async (req, res) => {
  const { idProduct } = req.query;

  try {
    if (idProduct) {
      const prod = await getProductsIncomeById(idProduct);
      return res.status(200).json(prod);
    }
    const allProds = await getAllProductsIncome();
    return res.status(200).json(allProds);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProdsHandler };
