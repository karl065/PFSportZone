const { Inventarios } = require("../../../DB");

const filterStockAvailableController = async (status) => {
  console.log(status);
  return await Inventarios.findAll({ where: { status: status } });
};

const priceRange = (arr, minRange, maxRange) => {
  let arrMinRange = [];
  let arrPriceRange = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= maxRange) {
      arrMinRange.push(arr[i]);
    }
  }
  for (let i = 0; i < arrMinRange.length; i++) {
    if (arrMinRange[i] >= minRange) {
      arrPriceRange.push(arrMinRange[i]);
    }
  }

  return arrPriceRange.sort(function (a, b) {
    return a - b;
  });
};

const filterStockPriceRange = async (minRange, maxRange) => {
  const allPrices = await Inventarios.findAll({}, "selling_price");
  const pricesList = allPrices.map((stock) => stock.selling_price);
  let pricesSelected = priceRange(pricesList, minRange, maxRange);
  const prods = await Inventarios.findAll({
    where: { selling_price: pricesSelected },
    order: [["selling_price", "ASC"]],
  });

  return prods;
};

module.exports = {
  filterStockAvailableController,
  filterStockPriceRange,
};
