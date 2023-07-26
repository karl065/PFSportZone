const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("IngresosProductos", {
    id_product_income: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idProduct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchase_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
