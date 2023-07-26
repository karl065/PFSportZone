const { Inventarios, IngresosProductos } = require("../../DB");
const {
  getInventariosByName,
} = require("../ControllersInventarios/GetInventariosControllers.js");
const {
  actualizarArticulo,
} = require("../ControllersInventarios/PutInventariosControllers.js");

const prodsIncomeDB = async (
  idProduct,
  article_name,
  purchase_price,
  product_quantity
) => {
  const product = await Inventarios.findByPk(idProduct);
  try {
    const newProdIncome = await IngresosProductos.create({
      idProduct,
      article_name,
      purchase_price,
      product_quantity,
    });

    const newStock = { stock: product.stock + product_quantity };
    actualizarArticulo(idProduct, newStock);

    return newProdIncome;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  prodsIncomeDB,
};
