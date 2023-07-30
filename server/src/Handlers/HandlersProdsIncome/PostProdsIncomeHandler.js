const {
  prodsIncomeDB,
} = require("../../Controllers/ControllersProdsIncome/PostProdsIncomeController.js");

const postProdsIncomeHandler = async (req, res) => {
  const { idProduct, article_name, purchase_price, product_quantity } =
    req.body;

  try {
    const regProdsIncome = await prodsIncomeDB(
      idProduct,
      article_name,
      purchase_price,
      product_quantity
    );
    res.status(201).json(regProdsIncome);
    return regProdsIncome;
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postProdsIncomeHandler,
};
