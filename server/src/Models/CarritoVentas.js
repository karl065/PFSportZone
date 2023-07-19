const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Carrito",
    {
      id_shopping_cart: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_quantity: {
        type: DataTypes.INTEGER,
      },
      amount_per_product: {
        type: DataTypes.FLOAT,
      },
      total_product_quantity: {
        type: DataTypes.INTEGER,
      },
      total_product_amount: {
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
    }
  );
};
