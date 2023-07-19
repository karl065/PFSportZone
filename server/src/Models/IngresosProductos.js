const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("IngresosProductos", {
    id_product_income: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    article_name: {
      type: DataTypes.STRING,
    },
    purchase_price: {
      type: DataTypes.FLOAT,
    },
    product_quantity: {
      type: DataTypes.INTEGER,
    },
  });
};
